import { render, screen } from '@testing-library/react'

import FormGroup from "."

describe("<FormGroup />", () => {
  it("renders the children and pass props correctly", () => {
    render(
      <FormGroup id="formgroup-id" label="label">
        <input />
      </FormGroup>
    )
    expect(screen.getByLabelText("label")).toHaveAttribute('id', "formgroup-id")
  })

  it("renders the error message and pass props correctly to input", () => {
    render(
      <FormGroup id="formgroup-id" label="label" error="error message example">
        <input />
      </FormGroup>
    )

    const input = screen.getByLabelText("label")
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-errormessage", "formgroup-id-error")
    expect(input).toHaveErrorMessage("Error: error message example")
  })
})