import React from 'react'

import cn from '@/utils/classnames'

import './styles.scss'

type Props = {
  placeholder?: string
  options: { value: string | number, label: string | number }[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

function Select({ options, placeholder, ...props }: Props) {
  return (
    <select {...props} className={cn(['select', props?.className])} defaultValue={props.value ?? 'placeholder'}>
      {placeholder && <option value="placeholder" disabled>{placeholder}</option>}
      {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
    </select>
  )
}

export default Select