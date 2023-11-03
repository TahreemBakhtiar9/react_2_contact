import React from 'react'
import './Button.css'

const Button = ({isOutline, icon, text, ...rest}) => {
  return (
    
        <button
        {...rest}
        className={isOutline ? 'outlinebttn' : 'primarybttn'}>
        {icon}
        {text}
        </button >
        
  )
}

export default Button