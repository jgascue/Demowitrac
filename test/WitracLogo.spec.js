import { mount } from '@vue/test-utils'
import LogoWitrac from '@/components/LogoWitrac.vue'

describe('LogoWitrac', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoWitrac)
    expect(wrapper.vm).toBeTruthy()
  })
})
