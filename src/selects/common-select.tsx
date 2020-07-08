import React from 'react'

import { BaseSelect, BaseSelectSize, BaseSelectVariant } from './base-select'
import { BaseSelectMenuItem } from './base-select-menu-item'

const renderText = (option: CommonSelectOption): React.ReactNode =>
  option.value

interface CommonSelectOption {
  id: string,
  value: string,
}

interface CommonSelectProps {
  options: CommonSelectOption[],
  value: string,
  variant?: BaseSelectVariant,
  fullWidth?: boolean,
  classes?: {
    [key: string]: string,
  },
  className?: string,
  tooltipText?: string,
  onChange?: (value: string) => void,
  onClick?: (event: React.MouseEvent) => void,
  onOpen?: (event: React.ChangeEvent<{}>) => void,
  onClose?: (event: React.ChangeEvent<{}>) => void,
  disabled?: boolean,
  size: BaseSelectSize,
  label?: string,
  renderOption?: (option: CommonSelectOption) => React.ReactNode,
}

const CommonSelect: React.FunctionComponent<CommonSelectProps> = ({
  options,
  value,
  classes = {},
  className,
  tooltipText = '',
  onChange = () => {},
  onClick = () => {},
  onOpen = () => {},
  onClose = () => {},
  disabled = false,
  variant = BaseSelectVariant.default,
  fullWidth = false,
  size = BaseSelectSize.regular,
  label,
  renderOption = renderText,
}) => (
  <BaseSelect
    value={value}
    size={size}
    classes={classes}
    className={className}
    tooltipText={tooltipText}
    onChange={onChange}
    onClick={onClick}
    onOpen={onOpen}
    onClose={onClose}
    disabled={disabled}
    variant={variant}
    fullWidth={fullWidth}
    label={label}
  >
    {
      options.map(option => (
        <BaseSelectMenuItem
          key={option.id}
          value={option.id}
          size={size}
        >
          {renderOption(option)}
        </BaseSelectMenuItem>
      ))
    }
  </BaseSelect>
)

export {
  CommonSelect,
  CommonSelectOption,
  CommonSelectProps,
}
