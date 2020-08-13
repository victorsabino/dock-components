import { render, screen } from '@testing-library/vue'
import Logo from './Logo.vue'

test('increments value on click', async () => {
  render(Logo)

  expect(screen.queryByText('Times clicked: 0')).toBeTruthy()

  const Logo = screen.getByText('increment')

  expect(screenLogo).toBeTruthy();
})
