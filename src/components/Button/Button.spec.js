// src/components/__tests__/HelloWorld.spec.ts
import { shallowMount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Button, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})