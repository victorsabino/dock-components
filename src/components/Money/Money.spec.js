import { render, screen, fireEvent } from '@testing-library/vue'
import Money from './Money.vue'
import wait from 'waait';
window.MutationObserver = require("mutation-observer");

//Render test
test('test if component money is rendering', async () => {
  render(Money);

  expect(screen.queryByTestId('money')).toBeTruthy();
})

test('test if component money is not rendering', async () => {
  render(Money)

  expect(screen.queryByTestId('no_money')).toBeFalsy();
})

//Value test
test('test if value is correct', async () => {
  render(Money, { props: { value: '100' } });

  expect(screen.queryByText('US$ 100.00')).toBeTruthy();
})

test('test if value is not correct', async () => {
  render(Money, { props: { value: '200' } });

  expect(screen.queryByText('US$ 100.00')).toBeFalsy();
})

//Currency test
test('test if currency is correct', async () => {
  render(Money, { props: { value: '100', currency:'BRL' } });

  expect(screen.queryByText('R$ 100.00')).toBeTruthy();
})

test('test if currency is not correct', async () => {
  render(Money, { props: { value: '100', currency:'USD' } });

  expect(screen.queryByText('R$ 100.00')).toBeFalsy();
})