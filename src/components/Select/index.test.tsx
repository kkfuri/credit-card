import { render, screen } from '@testing-library/react'

import Select from "."

describe("<Select />", () => {
  it("renders 0 children when options prop is empty", () => {
    render(<Select options={[]} />)

    const select = screen.getByRole('combobox')
    expect(select.childNodes).toHaveLength(0)
  })

  it("renders options prop as children", () => {
    render(<Select options={[{ value: 1, label: '1' }, { value: 2, label: '2' }]} />)

    const select = screen.getByRole('combobox')
    expect(select.childNodes).toHaveLength(2)
  })

  it("renders placeholder as disabled option", () => {
    render(<Select placeholder="Placeholder text" options={[{ value: 1, label: '1' }, { value: 2, label: '2' }]} />)

    const select = screen.getByRole('combobox')
    expect(select.childNodes).toHaveLength(3)

    expect(select.childNodes[0]).toHaveTextContent("Placeholder text")
    expect(select.childNodes[0]).toHaveAttribute("disabled", "")
  })
})