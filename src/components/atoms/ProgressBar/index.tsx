import React from 'react'
// PROPS
import { ProgressBarProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/parsers'

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  min = 0,
  style = null,
  color = 'primary',
  size = 'md',
  isStriped = false,
  isAnimated = false,
  isLabeled = false
}) => {
  const classes = parseClasses([
    `progress-bar${isStriped ? '-striped' : ''}`,
    `bg-${color}`,
    `w-${value}`,
    `progress-${size}`,
    isAnimated ? 'progress-bar-animated' : null
  ])
  return (
    <div className='progress'>
      <div
        className={classes}
        role='progressbar'
        style={{ width: `${value}%`, ...(style || {}) }}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {isLabeled ? `${value}%` : null}
      </div>
    </div>
  )
}

export default ProgressBar
