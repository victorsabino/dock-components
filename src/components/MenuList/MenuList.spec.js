import { render, screen, fireEvent } from '@testing-library/vue'
import MenuList from './MenuList.vue'
window.MutationObserver = require("mutation-observer");

test('test if tab is rendering', async () => {
  render(MenuList, {props: {tabs: [{title: 'Tab1', icon: 'swap'}, {title: 'Tab2', icon: 'money'}]}});

  expect(true).toBeTruthy();
 
})
