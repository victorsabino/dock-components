import { render, screen, fireEvent } from '@testing-library/vue'
import Money from './Money.vue'
window.MutationObserver = require("mutation-observer");

//Render test
test('test if icon is rendering', async () => {
  render(Money);

  expect(screen.queryByTestId('money')).toBeTruthy();
})

test('test if icon is not rendering', async () => {
  render(Money)

  expect(screen.queryByTestId('no_money')).toBeFalsy();
})

// test('test if icon is swap', async () => {
//   render(Money, { props: { icon: 'swap' } });

//   expect(screen.queryByText('swap')).toBeTruthy();
// });

// test('test if icon is not swap', async () => {
//   render(Money, { props: { icon: 'not_s_wap' } });

//   expect(screen.queryByText('swap')).toBeFalsy();
// })

// test('test if text is rendering', async () => {
//   render(Money, { props: { text: 'ImAUniqueText' } });

//   expect(screen.queryByText('ImAUniqueText')).toBeTruthy();
// })

// test('test if onclick is workng', async () => {
//   const mockCallback = jest.fn(() => { });

//   render(Money, { props: { onClick: mockCallback } });
//   fireEvent.click(screen.queryByTestId('mainMoney'));
//   expect(mockCallback).toHaveBeenCalled();
// })

// test('test if onclick is workng', async () => {
//   const mockCallback = jest.fn(() => { });

//   render(Money, { props: { onClick: () => { } } });
//   fireEvent.click(screen.queryByTestId('mainMoney'));
//   expect(mockCallback).not.toHaveBeenCalled();
// })

// test('list Money', async () => {
//   const mockCallback = jest.fn(() => { });
  
//   render(Money, {
//     props: {
//       text: 'teste',
//       onClick: mockCallback,
//       listMoneys: [{
//         text: "SERVICE",
//         icon: "add_circle_outline",
//         MoneyBgcolor: "#7EC6AE",
//         MoneyShadow: "#579580",
//         onClick: mockCallback
//       }]
//     }
//   });

//   fireEvent.click(screen.queryByTestId('mainMoney'));
//   await wait(0);
//   expect(screen.getByTestId('listMoneys')).toBeTruthy();
// })