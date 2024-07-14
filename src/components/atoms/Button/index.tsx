import React from 'react'
import './index.scss'
// COMPONENT
import { ButtonProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/parsers'

const Button: React.FC<ButtonProps> = ({
  text = false,
  type = 'button',
  style = null,
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
    size ? `btn-${size}` : null,
    'mr-2' //DEFAULT MARGIN-RYT 0.5rem !important;
  ])
  return (
    <button
      data-testid='test-button'
      type={type}
      style={style ?? undefined}
      className={buttonClasses}
      disabled={isDisabled ?? false}
      onClick={onClick ?? undefined}
    >
      {text}
    </button>
  )
}

export default Button
