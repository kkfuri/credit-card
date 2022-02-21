import { render, screen } from '@testing-library/react'

import CreditCard from "."

describe("<CreditCard />", () => {
  it("renders empty credit card when no props are passed", () => {
    render(<CreditCard />)

    expect(screen.getByTestId("cc-number")).toHaveTextContent("#### #### #### ####")
    expect(screen.getByTestId("cc-name")).toHaveTextContent("")
    expect(screen.getByTestId("cc-expiry")).toHaveTextContent("MM/YYYY")
    expect(screen.getByTestId("cvv")).toHaveTextContent("")
  })

  it("renders filled credit card when all props are passed", () => {
    render(<CreditCard name="Ada Lovelace" number="1234 5678 9101 1121" month="02" year="2025" cvv="0123" />)

    expect(screen.getByTestId("cc-number")).toHaveTextContent("1234 **** **** 1121")
    expect(screen.getByTestId("cc-name")).toHaveTextContent("Ada Lovelace")
    expect(screen.getByTestId("cc-expiry")).toHaveTextContent("02/2025")
    expect(screen.getByTestId("cvv")).toHaveTextContent("0123")
  })

  it("shows flipped credit card when focus is on cvv", () => {
    render(<CreditCard focus="cvv" />)

    expect(screen.getByTestId("cc-card")).toHaveClass("flipped")
  })
})