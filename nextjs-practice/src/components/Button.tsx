import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: null | 'primary' | 'secondary' | 'border' | 'borderPrimary' | 'borderSecondary'
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}

const Button = ({ size = 'md', children, variant, onClick, disabled = false, ...props }: ButtonProps) => {
  return (
    <button className={[`${styles.btn}`, `${styles[`btn-variant--${variant}`]}`, `${styles[`btn-size--${size}`]}`].join(' ')} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
