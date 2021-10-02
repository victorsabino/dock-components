import { render, screen } from '@testing-library/vue'
import MenuList from './MenuList.vue'
window.MutationObserver = require("mutation-observer");

test('test if menu list is rendering', async () => {
  render(MenuList, {props: {items: [{name: 'Menu1'}, {name: 'Menu2'}]}});

  expect(screen.queryAllByText('Menu1')).toBeTruthy();
  expect(screen.queryAllByText('Menu2')).toBeTruthy();
})

test('test if menu list is not rendering', async () => {
    render(MenuList, {props: {items: [{name: 'Menu1'}, {name: 'Menu2'}]}});

    expect(screen.queryAllByText('Menu5').length).toBeLessThanOrEqual(0);
  })
  