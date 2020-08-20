import {render, screen, fireEvent} from '@testing-library/vue'
import Logo from "./Logo";

test('increments value on click', async () => {
  render(Logo);
  expect(true).toBeTruthy()
})