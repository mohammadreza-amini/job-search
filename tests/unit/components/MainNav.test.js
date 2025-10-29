import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'
import { describe, expect, it } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('MR Careers')
    console.log(companyName)
    expect(companyName).toBeInTheDocument()
  })

  it('display menu items for navigation', () => {
    render(MainNav)
    const navigatioMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigatioMenuItems.map((item) => item.textContent)
    console.log(navigationMenuTexts)
  })
})
