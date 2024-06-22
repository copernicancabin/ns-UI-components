import React from 'react'
import './Button.scss'
import { ButtonProps } from '../../../interfaces/atomProps'

const Button: React.FC<ButtonProps> = ({ text = '' }) => (
  <button
    type='button'
    className='btn btn-primary'
  >
    {text}
  </button>
)

export default Button