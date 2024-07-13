import React from 'react'
import './index.scss'
// COMPONENT
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/parsers'

const Button: React.FC<ButtonProps> = ({
  text = false,
  type = 'button',
  color = 'primary',
  isRounded = false,
  isLoading = false,
  isOutlined = false,
  isSoft = false,
  isGhost = false,
  isDisabled = false,
  isLink = false,
  size = null,
  onClick = null
}) => {
  if (isOutlined) color = 'outline-' + color
  else if (isSoft) color = 'soft-' + color
  else if (isGhost) color = 'ghost-' + color

  const buttonClasses = parseClasses([
    'btn',
    `btn-${isLink ? 'link' : color}`,
    isRounded ? 'btn-pill' : null,
    isLoading ? 'is-loading' : null,
    size ? `btn-${size}` : null
  ])
  return (
    <button
      data-testid='test-button'
      type='button'
      className={buttonClasses}
      disabled={isDisabled ?? false}
      onClick={onClick ?? undefined}
    >
      {text}
    </button>
  )
}

export default Button
