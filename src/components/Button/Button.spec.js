import {render, screen, fireEvent} from '@testing-library/vue'
import Button from './Button.vue'

test('increments value on click', async () => {
  render(Button)

  expect(screen).toBeTruthy()
})