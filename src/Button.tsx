import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({children, variant = 'primary', ...props}: Props) => {
  return (
    <button {...props} 
      style={{
        backgroundColor: variant === 'primary' ? '#0070f3' : '#fff',
        color: variant === 'primary' ? '#fff' : '#000',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  )
}
