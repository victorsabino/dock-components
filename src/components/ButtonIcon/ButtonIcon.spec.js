import { render, screen, fireEvent } from '@testing-library/vue'
import ButtonIcon from './ButtonIcon.vue'
window.MutationObserver = require("mutation-observer");

test('test if button icon is rendering', async () => {
  render(ButtonIcon, {props: {icon: 'swap'}});

  expect(screen.queryByText('swap')).toBeTruthy();
})

test('test if button icon is not endering', async () => {
  render(ButtonIcon, {props: {icon: 'swap'}});

  expect(screen.queryByText('money')).toBeFalsy();
})
