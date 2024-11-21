import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  size?: string
  children: ReactNode
  variant?: string
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ size = 'md', children, variant, onClick, disabled = false }) => {
  const btnType = `${variant ? ` ${styles[variant]}` : ''}`
  const btnSize = `${size ? ` ${styles[size]}` : ''}`
  return (
    <button className={`${styles.btn}${btnSize}${btnType}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
