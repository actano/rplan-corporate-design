import {
  FormControl, MenuItem, Select, makeStyles, InputLabel, OutlinedInput,
} from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react'
import classnames from 'classnames'

import { CommonTooltip } from '../components/common-tooltip'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

let nextId = 0

enum CommonSelectSize {
  regular = 'regular',
  small = 'small',
}

enum CommonSelectVariant {
  default = 'default',
  outlined = 'outlined',
}

const renderText = (option: CommonSelectOption): React.ReactNode =>
  option.value


interface CommonSelectOption {
  id: string,
  value: string,
}

interface CommonSelectProps {
  options: CommonSelectOption[],
  value: string,
  variant?: CommonSelectVariant,
  fullWidth?: boolean,
  classes?: {
    [key: string]: object,
  },
  className?: string,
  tooltipText?: string,
  onChange?: (value: string) => void,
  onClick?: (event: React.MouseEvent) => void,
  onOpen?: (event: React.ChangeEvent<{}>) => void,
  onClose?: (event: React.ChangeEvent<{}>) => void,
  disabled?: boolean,
  size: CommonSelectSize,
  label?: string,
  renderOption?: (option: CommonSelectOption) => React.ReactNode,
}

interface StylesProps {
  size: CommonSelectSize,
  isOutlined: boolean,
  fullWidth: boolean,
}

const useStyles = makeStyles<CorporateDesignTheme, StylesProps>((theme) => {
  const { colors } = theme.palette
  const selectIconHeight = theme.spacing(2)

  return {
    value: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    select: ({ size, isOutlined, fullWidth }) => ({
      flex: 'none',
      lineHeight: 1.54,
      fontSize: (size === 'regular' ? '0.8125rem' : '0.75rem'),
      fontWeight: 'normal',
      borderStyle: 'none',

      color: colors.darkestGrey,

      ...(
        fullWidth ? {
          width: '100%',
        } : {}
      ),

      ...(
        isOutlined ? {
          border: `1px solid ${colors.lightGrey}`,
          borderRadius: '2px',
          padding: theme.spacing(1.5),
        } : {
          '&:after': {
            content: 'none',
          },
          '&:before': {
            content: 'none',
          },
        }
      ),
    }),
    selectElement: ({ size, isOutlined }) => ({
      '&:focus': {
        backgroundColor: 'transparent',
      },

      ...(
        isOutlined ? {
          padding: theme.spacing(0.25, 4, 0.25, 0),
          color: colors.darkestGrey,
          backgroundColor: 'transparent',
        } : {
          padding: size === 'regular'
            ? theme.spacing(0.25, 3, 0.25, 1)
            : theme.spacing(0.25, 2.5, 0.25, 0.25),
        }
      ),
    }),
    dropdownIcon: ({ isOutlined }) => ({
      color: colors.grey,
      width: selectIconHeight,
      height: selectIconHeight,
      top: `calc(50% - (${selectIconHeight}px/2))`,

      ...(
        isOutlined ? {
          marginRight: theme.spacing(1),
        } : {}
      ),
    }),
    selectMenuItem: ({ size }) => ({
      fontSize: size === 'regular' ? '0.8125rem' : '0.75rem',
      padding: size === 'regular' ? theme.spacing(0.5, 2) : theme.spacing(0.5),
      color: colors.darkGrey,
      '&:hover': {
        backgroundColor: colors.veryLightGrey,
      },
      '&:focus': {
        backgroundColor: colors.veryLightGrey,
      },
      '&$selectMenuItemSelected': {
        backgroundColor: colors.lightGrey,
        '&:hover': {
          backgroundColor: colors.lightGrey,
        },
        '&:focus': {
          backgroundColor: colors.lightGrey,
        },
      },
    }),
    selectMenuItemSelected: () => ({}),
  }
})

type MuiSelectChangeEvent = React.ChangeEvent<{ name?: string; value: unknown }>

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
  variant = CommonSelectVariant.default,
  fullWidth = false,
  size = CommonSelectSize.regular,
  label,
  renderOption = renderText,
}) => {
  const isOutlined = variant === CommonSelectVariant.outlined
  const ownClasses = useStyles({ size, isOutlined, fullWidth })
  const _onChange = useCallback<(event: MuiSelectChangeEvent, child: React.ReactNode) => void>(
    (event) => {
      onChange(event.target.value as string)
    },
  [onChange])

  // This state handling is needed to prevent the tooltip staying open when the select is opened
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)
  const inputLabel = useRef<HTMLLabelElement>(null)
  const [labelWidth, setLabelWidth] = useState<number>(0)
  const [inputId, setInputId] = useState<string | undefined>()

  useEffect(
    () => {
      if (inputLabel.current) {
        setLabelWidth(inputLabel.current.offsetWidth)
      }
    },
    [],
  )

  useEffect(
    () => {
      setInputId(`outlined-select-${nextId}`)
      nextId += 1
    },
    [],
  )


  return (
    <CommonTooltip title={tooltipText} open={isTooltipOpen}>
      <FormControl
        variant={isOutlined ? 'outlined' : undefined}
        className={classnames(className, ownClasses.value)}
        disabled={disabled}
      >
        {
          isOutlined ? (
            <InputLabel ref={inputLabel} htmlFor={inputId}>
              { label }
            </InputLabel>
          ) : undefined
        }
        <Select
          value={value}
          className={
            classnames(
              ownClasses.select,
            )
          }
          classes={{
            select: classnames(
              ownClasses.selectElement,
              classes.select,
            ),
            icon: ownClasses.dropdownIcon,
          }}
          input={
            isOutlined ? (
              <OutlinedInput
                labelWidth={labelWidth}
                id={inputId}
              />
            ) : undefined
          }
          onChange={_onChange}
          IconComponent={ExpandIcon}
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
          onOpen={(event) => {
            setIsTooltipOpen(false)
            onOpen(event)
          }}
          onClose={event => onClose(event)}
          onClick={(event) => {
            event.stopPropagation()
            setIsTooltipOpen(false)
            onClick(event)
          }}
        >
          {
            options.map(option => (
              <MenuItem
                key={option.id}
                value={option.id}
                className={ownClasses.selectMenuItem}
                classes={{
                  selected: ownClasses.selectMenuItemSelected,
                }}
              >
                {renderOption(option)}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </CommonTooltip>
  )
}

export {
  CommonSelect,
  CommonSelectVariant,
  CommonSelectOption,
  CommonSelectSize,
  CommonSelectProps,
}
