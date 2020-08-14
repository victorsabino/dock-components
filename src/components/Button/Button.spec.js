import { render, screen, fireEvent } from '@testing-library/vue'
import Button from './Button.vue'
import wait from 'waait';
window.MutationObserver = require("mutation-observer");

test('test if icon is rendering', async () => {
  render(Button);

  expect(screen.queryByText('add_circle_outline')).toBeTruthy();
})

test('test if icon is not rendering', async () => {
  render(Button)

  expect(screen.queryByText('no_icon')).toBeFalsy();
})

test('test if icon is swap', async () => {
  render(Button, { props: { icon: 'swap' } });

  expect(screen.queryByText('swap')).toBeTruthy();
});

test('test if icon is not swap', async () => {
  render(Button, { props: { icon: 'not_s_wap' } });

  expect(screen.queryByText('swap')).toBeFalsy();
})

test('test if text is rendering', async () => {
  render(Button, { props: { text: 'ImAUniqueText' } });

  expect(screen.queryByText('ImAUniqueText')).toBeTruthy();
})

test('test if onclick is workng', async () => {
  const mockCallback = jest.fn(() => { });

  render(Button, { props: { onClick: mockCallback } });
  fireEvent.click(screen.queryByTestId('mainButton'));
  expect(mockCallback).toHaveBeenCalled();
})

test('test if onclick is workng', async () => {
  const mockCallback = jest.fn(() => { });

  render(Button, { props: { onClick: () => { } } });
  fireEvent.click(screen.queryByTestId('mainButton'));
  expect(mockCallback).not.toHaveBeenCalled();
})

test('list button', async () => {
  const mockCallback = jest.fn(() => { });
  
  render(Button, {
    props: {
      text: 'teste',
      onClick: mockCallback,
      listButtons: [{
        text: "SERVICE",
        icon: "add_circle_outline",
        buttonBgcolor: "#7EC6AE",
        buttonShadow: "#579580",
        onClick: mockCallback
      }]
    }
  });

  fireEvent.click(screen.queryByTestId('mainButton'));
  await wait(1000);
  expect(screen.getByTestId('listButtons')).toBeTruthy();
})