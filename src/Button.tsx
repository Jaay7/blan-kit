import React, { HTMLAttributes, ReactNode } from 'react'
import styled from "styled-components";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonColor: 'primary' | 'secondary' | string;
  textColor: string;
  variant: 'elevated' | 'contained' | 'outlined' | 'text';
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
}

export const Button = ({children, textColor = '#fff', buttonColor = 'primary', variant = 'contained', icon, iconPosition = 'start', ...props}: Props) => {
  const Button = styled.button`
    background-color: ${variant === 'contained' || variant === 'elevated' ? buttonColor === 'primary' ? '#0070f3' : buttonColor === 'secondary' ? '#d63826' : buttonColor : 'transparent'};
    color: ${variant === 'contained' || variant === 'elevated' ? textColor : buttonColor === 'primary' ? '#0070f3' : buttonColor === 'secondary' ? '#d63826' : buttonColor};
    padding: 0.5rem 1rem;
    border-radius: 25rem;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    border: ${variant === 'outlined' ? buttonColor === 'primary' ? '1px solid #0070f3' : buttonColor === 'secondary' ? '1px solid #d63826' : `1px solid ${buttonColor}` : 'none'};
    box-shadow: ${variant === 'elevated' ? buttonColor === 'primary' ? '0px 2px 4px #0070f350' : buttonColor === 'secondary' ? '0px 2px 4px #d6382650' : `0px 2px 4px ${buttonColor}50` : 'none'};
  `
  const IconElement = styled.span`
    margin-right: ${iconPosition === 'start' && '0.5rem'};
    margin-left: ${iconPosition === 'end' && '0.5rem'};
  `
  return (
    <Button {...props}>
      {icon && iconPosition === 'start' && <IconElement className="icon">{icon}</IconElement>}
      {children}
      {icon && iconPosition === 'end' && <IconElement className="icon">{icon}</IconElement>}
    </Button>
  )
}
