import { render, screen, fireEvent } from '@testing-library/vue'
import PercentageBar from './PercentageBar.vue'

//Render test
test('test if percentageBar is rendering', async () => {
  render(PercentageBar);

  expect(screen.queryByTestId('percentageBar')).toBeTruthy();
})

test('test if percentageBar is not rendering', async () => {
  render(PercentageBar)

  expect(screen.queryByTestId('not_percentageBar')).toBeFalsy();
})

//Percentage test
test('test if percentage of percentageBar is rendering', async () => {
  let percentage = "10"
  render(PercentageBar, {props: {percentage: percentage}});
  
  expect(screen.queryByTestId('percentageBar').__vue__._vnode.componentOptions.propsData.percentage === percentage).toBeTruthy();
})

test('test if percentage of percentageBar is not rendering', async () => {
  let percentage = "10"
  render(PercentageBar, {props: {percentage: percentage}});
  
  expect(screen.queryByTestId('percentageBar').__vue__._vnode.componentOptions.propsData.percentage === "5").toBeFalsy();
})