import { columnOffsetType, columnSizeType } from '../types/styleTypes'

export interface ButtonProps {
  text?: string
}

export interface ColumnProps extends React.ComponentPropsWithRef<'section'> {
  size?: columnSizeType
  offset?: columnOffsetType
  isNarrow?: boolean
}
