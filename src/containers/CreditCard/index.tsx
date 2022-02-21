import React, { ChangeEvent, useEffect, useState } from 'react'

import FormGroup from '@/components/FormGroup'
import Select from '@/components/Select'
import TextInput from '@/components/TextInput'
import { monthOptions, yearOptions } from '@/utils/date'
import { creditCardInputMask, cvvMask } from '@/utils/formatter'

import './styles.scss'
import CreditCard from '@/components/CreditCard'

type KeyValueStringPair = { [k: string]: string | undefined }

const initialValues = {
  number: undefined,
  name: undefined,
  month: undefined,
  year: undefined,
  cvv: undefined
}

const CreditCardContainer = () => {
  const [focus, setFocus] = useState<string | undefined>(undefined)
  const [formValues, setFormValues] = useState<KeyValueStringPair>(initialValues)
  const [formErrors, setFormErrors] = useState<KeyValueStringPair>({})

  function handleInputChange(value: string, name: string) {
    setFormValues(oldValues => ({ ...oldValues, [name]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('Credit card added!')
    setFormValues(initialValues)
    event.currentTarget.reset()
  }

  useEffect(() => {
    if (formValues.month && formValues.year) {
      const isDateInvalid = new Date(Number(formValues.year), Number(formValues.month)) <= new Date()
      setFormErrors(v => ({ ...v, date: isDateInvalid ? "Insert a valid date" : undefined }))
    }
  }, [formValues.month, formValues.year, setFormErrors])

  useEffect(() => {
    if (formValues.number) {
      const isNumberInvalid = formValues.number.length < 19 && focus !== 'cc-number'
      setFormErrors(v => ({ ...v, number: isNumberInvalid ? "Insert a valid credit card" : undefined }))
    }
  }, [focus, formValues.number, setFormErrors])

  const allFieldsAreFilled = Object.values(formValues).filter(Boolean).length === 5
  const noErrors = Object.values(formErrors).filter(Boolean).length === 0
  const isSubmitDisabled = !(allFieldsAreFilled && noErrors)

  function handleCCNumberChange(e: ChangeEvent<HTMLInputElement>) {
    const maskedValue = creditCardInputMask(e.target.value)
    handleInputChange(maskedValue, 'number')
  }

  function handleCvvChange(e: ChangeEvent<HTMLInputElement>) {
    const maskedValue = cvvMask(e.target.value)
    handleInputChange(maskedValue, 'cvv')
  }

  function handleBlur() {
    setFocus(undefined)
  }

  return (
    <form className="form__credit-card" noValidate onSubmit={handleSubmit}>
      <CreditCard {...formValues} focus={focus} />
      <FormGroup id="cardnumber" label="Card Number" error={formErrors.number}>
        <TextInput
          name="cardnumber"
          autoComplete="cc-number"
          value={formValues.number}
          onChange={handleCCNumberChange}
          onFocus={() => setFocus("cc-number")}
          onBlur={handleBlur}
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </FormGroup>
      <FormGroup id="ccname" label="Card Name">
        <TextInput
          name="ccname"
          autoComplete="cc-name"
          value={formValues.name}
          onChange={e => handleInputChange((e.target.value).toUpperCase(), 'name')}
          onFocus={() => setFocus("cc-name")}
          onBlur={handleBlur}
          spellCheck={false}
        />
      </FormGroup>
      <div style={{ display: 'flex' }}>
        <FormGroup id="ccmonth" label="Expiration Date" error={formErrors.date}>
          <Select
            name="ccmonth"
            autoComplete="cc-month"
            placeholder="Month"
            value={formValues.month}
            onChange={e => handleInputChange(e.target.value, 'month')}
            onFocus={() => setFocus("cc-expiry")}
            onBlur={handleBlur}
            options={monthOptions}
          />
          <Select
            name="ccyear"
            autoComplete="cc-year"
            placeholder="Year"
            value={formValues.year}
            onChange={e => handleInputChange(e.target.value, 'year')}
            onFocus={() => setFocus("cc-expiry")}
            onBlur={handleBlur}
            options={yearOptions()}
          />
        </FormGroup>
        <div className="cvv-block">
          <FormGroup id="cvc" label="CVV">
            <TextInput
              name="cvc"
              autoComplete="cc-csc"
              value={formValues.cvv}
              onChange={handleCvvChange}
              pattern="[0-9]*"
              inputMode="numeric"
              onFocus={() => setFocus("cvv")}
              onBlur={handleBlur}
            />
          </FormGroup>
        </div>
      </div>
      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  )
}

export default CreditCardContainer