import React, { ReactNode } from 'react'
import styles from './Typography.module.scss'

interface TypographyProps {
  children: ReactNode
  variant?: string
  className?: string
  color?: string
}

const Button: React.FC<TypographyProps> = ({ children, variant = 'body1', color, className = false }) => {
  const otherClasses = `${className ? ` ${className}` : ''}`
  const txtColor = `${color ? ` ${styles[color]}` : ''}`
  const combinedClass = `${otherClasses}${txtColor}`
  return (
    <>
      {variant === 'h1' && <h1 className={`${styles.h1}${combinedClass}`}>{children}</h1>}
      {variant === 'h2' && <h2 className={`${styles.h2}${combinedClass}`}>{children}</h2>}
      {variant === 'h3' && <h3 className={`${styles.h3}${combinedClass}`}>{children}</h3>}
      {variant === 'h4' && <h4 className={`${styles.h4}${combinedClass}`}>{children}</h4>}
      {variant === 'h5' && <h5 className={`${styles.h5}${combinedClass}`}>{children}</h5>}
      {variant === 'h6' && <h6 className={`${styles.h6}${combinedClass}`}>{children}</h6>}
      {variant === 'subtitle1' && <p className={`${styles.subtitle1}${combinedClass}`}>{children}</p>}
      {variant === 'subtitle2' && <p className={`${styles.subtitle2}${combinedClass}`}>{children}</p>}
      {variant === 'body1' && <p className={`${styles.body1}${combinedClass}`}>{children}</p>}
      {variant === 'body2' && <p className={`${styles.body2}${combinedClass}`}>{children}</p>}
      {!variant && <p className={`${styles.body1}${combinedClass}`}>{children}</p>}
    </>
  )
}

export default Button
