import {
  basicColorType,
  columnOffsetType,
  columnSizeType,
  sizeType
} from '../types/styleTypes'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: string
  color?: basicColorType
  style?: React.CSSProperties
  isRounded?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  isOutlined?: boolean
  isSoft?: boolean
  isGhost?: boolean
  isLink?: boolean
  size?: sizeType
  onClick?: () => void
}

export interface ColumnProps extends React.ComponentPropsWithRef<'section'> {
  size?: columnSizeType
  offset?: columnOffsetType
  isNarrow?: boolean
}
