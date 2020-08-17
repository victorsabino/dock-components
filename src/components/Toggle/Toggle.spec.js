import { render, screen, fireEvent } from '@testing-library/vue'
import Toggle from './Toggle.vue'
import wait from 'waait';

window.MutationObserver = require("mutation-observer");

//Render test
test('test if icon is rendering', async () => {
  render(Toggle);

  expect(screen.queryByTestId('toggle')).toBeTruthy();
})

test('test if icon is not rendering', async () => {
  render(Toggle)

  expect(screen.queryByTestId('not_toggle')).toBeFalsy();
})

//Title test
test('test if title is correct', async () => {
  render(Toggle, { props: { title: 'test_toggle' } });

  expect(screen.queryByText('test_toggle')).toBeTruthy();
});

test('test if title is not correct', async () => {
  render(Toggle, { props: { title: 'not_test_toggle' } });

  expect(screen.queryByText('test_toggle')).toBeFalsy();
})

//DefaltToggle test
test('test if defaultToggle is correct', async () => {
    render(Toggle, { props: { title: 'test_toggle', defaultToggle: true } });

    expect(screen.queryByText('arrow_drop_down')).toBeTruthy();
    
});
test('test if defaultToggle is not correct', async () => {
    render(Toggle, { props: { title: 'test_toggle', defaultToggle: false } });
    expect(screen.queryByText('arrow_drop_down')).toBeFalsy();
})

//Click test
test('test if toggle click is workng', async () => {
  render(Toggle, { props: { title: 'test_toggle', defaultToggle: true } });
  
  fireEvent.click(screen.queryByTestId('toggle'));
  await wait(0)
  expect(screen.queryByText('arrow_right')).toBeTruthy();
})

test('test if toggle click is not workng', async () => {
  render(Toggle, { props: { title: 'test_toggle', defaultToggle: true } });

  fireEvent.click(screen.queryByTestId('toggle'));
  await wait(0)
  expect(screen.queryByText('arrow_drop_down')).toBeFalsy();
})