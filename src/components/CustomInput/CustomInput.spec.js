import Vue from "vue";
import CustomInput from './CustomInput.vue';
import { dockRender } from "../../../test/utils"
import { render, screen } from '@testing-library/vue';
window.MutationObserver = require("mutation-observer");

Vue.directive("decimal", {
    bind(el, binding, vnode) {
      let maxDecimal = parseInt(binding.value);
      let countDecimals = function(value) {
        if (Math.floor(value) !== value)
          return value.toString().split(".")[1].length || 0;
        return 0;
      };
      let handler = function(e) {
        let value = parseFloat(e.target.value);
        if (countDecimals(value) > maxDecimal) {
          e.target.value = value.toFixed(maxDecimal);
          vnode.elm.dispatchEvent(new CustomEvent("input"));
        }
      };
      el.addEventListener("input", handler);
    }
  });

//Render test
test('test if customInput is rendering', async () => {
  dockRender(CustomInput)

  expect(screen.queryByTestId('customInput')).toBeTruthy();
  })
  
test('test if customInput is not rendering', async () => {
  dockRender(CustomInput)

  expect(screen.queryByTestId('not_customInput')).toBeFalsy();
})

//Input test
test('test if input value is valid', async () => {
  render(CustomInput, { props: { value: 'testeCustomInput' } });
  
  expect(screen.queryByTestId('testeCustomInput')).toBeTruthy();
});

test('test if input value is not valid', async () => {
  render(CustomInput, { props: { value: 'not_testeCustomInput' } });
  
  expect(screen.queryByTestId('testeCustomInput')).toBeFalsy();
});