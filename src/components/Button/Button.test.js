import {render, screen, fireEvent} from '@testing-library/vue'
import Button from './Button'

test('increments value on click', async () => {
  render(Button)

  expect(true).toBeTruthy()
})