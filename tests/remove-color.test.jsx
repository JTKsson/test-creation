import { render, screen } from '@testing-library/react'
import RemoveColor from "../app/components/removeColor"
import { mockColor } from './utils'

const mockProps = {
  color: mockColor,
  removeColor: jest.fn()
}

describe('Remove color', () => {
  test('renders a button', () => {
    render(<RemoveColor {...mockProps} />)
  
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})