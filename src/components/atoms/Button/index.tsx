import React from 'react'
import './index.scss'
import { ButtonProps } from '../../../interfaces/atomProps'

const Button: React.FC<ButtonProps> = ({ text = '' }) => (
  <button
    data-testid='test-button'
    type='button'
    className='btn btn-primary'
  >
    {text}
  </button>
)

export default Button
