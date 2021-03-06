import React, { PropsWithChildren } from 'react';

import cn from '@/utils/classnames';

import './styles.scss'

type Props = PropsWithChildren<{
  id: string
  label: string
  error?: string
}>

function FormGroup({ id, label, error, children }: Props) {
  const errorInputProps = error ? { 'aria-invalid': true, 'aria-errormessage': `${id}-error` } : {}
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, index === 0 ? { id, ...errorInputProps } : { ...errorInputProps } as any);
    }
    return child;
  });

  return (
    <div className={cn(["form-group", error && 'error-message'])}>
      <label htmlFor={id}>{label}</label>
      <div className="children-inputs">
        {childrenWithProps}
      </div>
      {error && (
        <p className="error-hint" id={`${id}-error`} aria-live="assertive">
          <span className="visually-hidden">Error:</span> {error}
        </p>
      )}
    </div>
  )
}

export default FormGroup