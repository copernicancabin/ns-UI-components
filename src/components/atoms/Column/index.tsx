import React from 'react'
// PROPS
import { ColumnProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses } from '../../../functions/perser'

const Column: React.FC<ColumnProps> = ({
  size = null,
  offset = null,
  isNarrow = null,
  children = null
}) => {
  const classes = parseClasses([
    'column',
    size,
    offset,
    isNarrow ? 'is-narrow' : null
  ])
  return (
    <section
      data-testid='test-column'
      className={classes}
    >
      {children}
    </section>
  )
}

export default Column
