import { render, screen, fireEvent } from '@testing-library/vue'
import Checkbox from './Checkbox.vue'
window.MutationObserver = require("mutation-observer");

//Render test
test('test if checkbox is rendering', async () => {
  render(Checkbox);

  expect(screen.queryByTestId('checkbox')).toBeTruthy();
})

test('test if checkbox is not rendering', async () => {
  render(Checkbox)

  expect(screen.queryByTestId('not_checkbox')).toBeFalsy();
})

//Click test
test('test if checkbox is clicking', async () => {
    render(Checkbox, {props: {value: true}});
    await fireEvent.click(screen.queryByTestId('checkbox').firstChild);

    expect(screen.queryByTestId('checkbox')).toBeTruthy();
  })

test('test if checkbox is not clicking', async () => {
    render(Checkbox, {props: {value: true}});
    await fireEvent.click(screen.queryByTestId('checkbox').firstChild);

    expect(screen.queryByTestId('unchecked')).toBeFalsy();
  })