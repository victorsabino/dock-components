import Vue from "vue";
import VModal from "vue-js-modal";
import "../public/MaterialIcons.css";
import "../public/style.css";
import "../public/multiselect.css";
import "../public/Raleway.css";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import { configure, addDecorator, addParameters } from "@storybook/vue";
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import { create } from '@storybook/theming';
import logo from '../public/DockComponentsWhite.svg';


Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });
Vue.use(VueMaterial);
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

addDecorator(() => ({
  vuetify: VueMaterial,
  template: "<div><story/></div>"
}));

addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
    options: {
      theme: create({
        base: 'dark',
        colorPrimary: '#10434F',
        colorSecondary: '#4EB9B1',
        brandImage: logo,
  
        // UI
        appBg: '#0D3943',
        appContentBg: '#f4f1eb',
        appBorderColor: '#f4f1eb',
        appBorderRadius: 4,

        // Toolbar default and active colors
        barTextColor: '#707070',
        barSelectedColor: '#4EB9B1',
        barBg: '#ebe8e3',

        // Text colors
        textColor: '#909090',
        textInverseColor: '#FFFFFF',

        // Form colors
        inputBg: '#EBE8E3',
        inputBorder: 'rgba(0,0,0,.3)',
        inputTextColor: '#10434f',
        inputBorderRadius: 4,
        
        // Typography
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',
      })
    }
  });

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);


