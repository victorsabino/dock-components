import { render, screen, fireEvent } from '@testing-library/vue'
import TopTab from './TopTab.vue'
window.MutationObserver = require("mutation-observer");

test('test if tab is rendering', async () => {
  render(TopTab, {props: {tabs: [{title: 'Tab1', icon: 'swap'}, {title: 'Tab2', icon: 'money'}]}});

  expect(screen.queryByText('Tab1')).toBeTruthy();
  expect(screen.queryByText('Tab2')).toBeTruthy();
  expect(screen.queryByText('swap')).toBeTruthy();
  expect(screen.queryByText('money')).toBeTruthy();
})
