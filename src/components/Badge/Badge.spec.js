import { render, screen, fireEvent } from '@testing-library/vue'
import Badge from './Badge.vue'

//Render test
test('test if badge is rendering', async () => {
  render(Badge);

  expect(screen.queryByTestId('badge')).toBeTruthy();
})

test('test if badge is not rendering', async () => {
  render(Badge)

  expect(screen.queryByTestId('not_badge')).toBeFalsy();
})

//Name test
test('test if name is correct', async () => {
  render(Badge, { props: { name: 'test' } });

  expect(screen.queryByText('test')).toBeTruthy();
});

test('test if name is not correct', async () => {
  render(Badge, { props: { icon: 'not_test' } });

  expect(screen.queryByText('test')).toBeFalsy();
})

//onDelete test
test('test if onDelete is workng', async () => {
  const mockCallback = jest.fn(() => { });

  render(Badge, { props: { onDelete: mockCallback } });
  fireEvent.click(screen.queryByTestId('badgeDelete'));
  expect(mockCallback).toHaveBeenCalled();
})

test('test if onDelete is not workng', async () => {
  const mockCallback = jest.fn(() => { });

  render(Badge, { props: { onDelete: () => { } } });
  fireEvent.click(screen.queryByTestId('badgeDelete'));
  expect(mockCallback).not.toHaveBeenCalled();
})