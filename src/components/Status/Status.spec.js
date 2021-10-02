import { render, screen, fireEvent } from '@testing-library/vue'
import Status from './Status.vue'

//Render test
test('test if status is rendering', async () => {
  render(Status);

  expect(screen.queryByTestId('status')).toBeTruthy();
})

test('test if status is not rendering', async () => {
  render(Status)

  expect(screen.queryByTestId('not_status')).toBeFalsy();
})

//Status test
//From Prop
test('test if status is correct', async () => {
  render(Status, { props: { status: 'test' } });

  expect(screen.queryByText('test')).toBeTruthy();
});

test('test if status is not correct', async () => {
  render(Status, { props: { status: 'not_test' } });

  expect(screen.queryByText('test')).toBeFalsy();
})

//From Computed
test('test if status is correct', async () => {
  render(Status, { props: { status: 'saved, needs price' } });

  expect(screen.queryByText('Needs Price')).toBeTruthy();
});

test('test if status is not correct', async () => {
  render(Status, { props: { status: 'not_saved' } });

  expect(screen.queryByText('Needs Price')).toBeFalsy();
})

//Proposal Count test
test('test if proposal count is correct', async () => {
  render(Status, { props: { status: 'waiting proposals', proposalCount: 10 } });

  expect(screen.queryByText('Proposals (10)')).toBeTruthy();
});

test('test if proposal count is not correct', async () => {
  render(Status, { props: { status: 'waiting proposals', proposalCount: 0 } });

  expect(screen.queryByText('Proposals (10)')).toBeFalsy();
})

//Open Price Quotes test
test('test if openPriceQuotes is workng', async () => {
  const mockCallback = jest.fn(() => { });

  render(Status, { props: { status: 'waiting proposals', openPriceQuotes: mockCallback } });
  fireEvent.click(screen.queryByTestId('status'));
  expect(mockCallback).toHaveBeenCalled();
})

test('test if openPriceQuotes is not workng', async () => {
  const mockCallback = jest.fn(() => { });

  render(Status, { props: { status: 'waiting proposals', openPriceQuotes: () => { } } });
  fireEvent.click(screen.queryByTestId('status'));
  expect(mockCallback).not.toHaveBeenCalled();
})