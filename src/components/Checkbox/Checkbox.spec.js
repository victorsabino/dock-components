import { render, screen, fireEvent } from '@testing-library/vue'
import Checkbox from './Checkbox.vue'
window.MutationObserver = require("mutation-observer");

test('test if checkbox is rendering', async () => {
  render(Checkbox, {props: {icon: 'swap'}});

  expect(screen.queryByTestId('checkbox')).toBeTruthy();
})

test('test if checkbox is clicking', async () => {
    let vmodel = false;
    let mock = jest.fn();
    render(Checkbox, {props: {'v-model': vmodel}, 'v-on': {change: mock}});
    fireEvent.click(screen.queryByTestId('checkbox'));
    console.log('LOOOL ', vmodel)
    expect(mock).toHaveBeenCalled();
  })
  