import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading column name', () => {
    const { container } = renderWithTheme(<Footer />)

    // Contact
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    // Links
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    // Follow us
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    // location
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
