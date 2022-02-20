import React from 'react'

import cn from '@/utils/classnames'

import './styles.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement>

function TextInput(props: Props) {
  return (
    <input {...props} className={cn(['text-input', props?.className])} type="text" />
  )
}

export default TextInput