import React, { ReactNode } from 'react'
import styles from './Typography.module.scss'

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2'
  color?: 'default' | 'primary' | 'secondary'
  children: ReactNode
}

const Typography = ({ variant = 'body1', color = 'default', children, ...props }: TypographyProps) => {
  const classes = [`${styles.txt}`, `${styles[`txt-variant--${variant}`]}`, `${styles[`txt-color--${color}`]}`].join(' ')
  return (
    <>
      {variant === 'h1' && (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      )}
      {variant === 'h2' && (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      )}
      {variant === 'h3' && (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      )}
      {variant === 'h4' && (
        <h4 className={classes} {...props}>
          {children}
        </h4>
      )}
      {variant === 'h5' && (
        <h5 className={classes} {...props}>
          {children}
        </h5>
      )}
      {variant === 'h6' && (
        <h6 className={classes} {...props}>
          {children}
        </h6>
      )}
      {variant === 'subtitle1' && (
        <p className={classes} {...props}>
          {children}
        </p>
      )}
      {variant === 'subtitle2' && (
        <p className={classes} {...props}>
          {children}
        </p>
      )}
      {variant === 'body1' && (
        <p className={classes} {...props}>
          {children}
        </p>
      )}
      {variant === 'body2' && (
        <p className={classes} {...props}>
          {children}
        </p>
      )}
      {!variant && (
        <p className={classes} {...props}>
          {children}
        </p>
      )}
    </>
  )
}

export default Typography
