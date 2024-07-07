import React from 'react'
import './index.scss'
// COMPONENT
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/perser'

const Button: React.FC<ButtonProps> = ({
  text = null,
  color = null,
  isRounded = null,
  isLoading = null,
  isOutlined = null,
  isSoft = null,
  isGhost = null,
  isDisabled = false,
  isLink = null,
  size = null
}) => {
  let btnClass = color ?? 'primary'
  if (isOutlined) btnClass = 'outline-' + btnClass
  else if (isSoft) btnClass = 'soft-' + btnClass
  else if (isGhost) btnClass = 'ghost-' + btnClass

  const buttonClasses = parseClasses([
    'btn',
    `btn-${isLink ? 'link' : btnClass}`,
    isRounded ? 'btn-pill' : null,
    isLoading ? 'is-loading' : null,
    size ? `btn-${size}` : null
  ])
  return (
    <button
      data-testid='test-button'
      type='button'
      className={buttonClasses}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

export default Button
