import { render, screen, fireEvent } from '@testing-library/vue'
import MenuList from './MenuList.vue'
window.MutationObserver = require("mutation-observer");

test('test if menu list is rendering', async () => {
  render(MenuList, {props: {items: [{name: 'Menu1'}, {name: 'Menu2'}]}});

  expect(screen.queryByText('Menu1')).toBeTruthy();
  expect(screen.queryByText('Menu2')).toBeTruthy();
})

test('test if menu list is not rendering', async () => {
    render(MenuList, {props: {items: [{name: 'Menu1'}, {name: 'Menu2'}]}});
  
    expect(screen.queryByText('Menu5')).toBeFalsy();
  })
  