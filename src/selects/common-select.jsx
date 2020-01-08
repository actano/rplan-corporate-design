import {
  FormControl, MenuItem, Select, makeStyles, InputLabel, OutlinedInput,
} from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CommonTooltip } from '../components/common-tooltip'

let nextId = 0

const useStyles = makeStyles((theme) => {
  const { colors } = theme.palette
  const selectIconHeight = theme.spacing(2)

  return {
    value: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    select: ({ size }) => ({
      flex: 'none',
      lineHeight: 1.54,
      fontSize: (size === 'regular' ? '0.8125rem' : '0.75rem'),
      fontWeight: 'normal',
      borderStyle: 'none',

      color: colors.darkestGrey,

      '&:after': {
        content: 'none',
      },
      '&:before': {
        content: 'none',
      },
    }),
    fullWidth: {
      width: '100%',
    },
    selectOutlined: {
      border: `1px solid ${colors.lightGrey}`,
      borderRadius: '2px',
      padding: theme.spacing(1.5),
    },
    selectElement: ({ size }) => ({
      padding: size === 'regular' ? theme.spacing(0.25, 3, 0.25, 1) : theme.spacing(0.25, 2.5, 0.25, 0.25),

      '&:focus': {
        backgroundColor: 'transparent',
      },
    }),
    selectElementOutlined: () => ({
      padding: theme.spacing(0.25, 4, 0.25, 0),
      color: colors.darkestGrey,
      backgroundColor: 'transparent',
    }),
    dropdownIcon: {
      color: colors.grey,
      width: selectIconHeight,
      height: selectIconHeight,
      top: `calc(50% - (${selectIconHeight}px/2))`,
    },
    dropdownIconOutlined: {
      marginRight: theme.spacing(1),
    },
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

const CommonSelect = ({
  options,
  value,
  classes,
  className,
  tooltipText,
  onChange,
  onClick,
  disabled,
  variant,
  fullWidth,
  size,
  label,
}) => {
  const ownClasses = useStyles({ size })
  const _onChange = useCallback(
    (event) => {
      onChange(event.target.value)
    },
    [onChange],
  )

  // This state handling is needed to prevent the tooltip staying open when the select is opened
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  const [inputId, setInputId] = useState()

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

  const isOutlined = variant === 'outlined'

  return (
    <CommonTooltip title={tooltipText} open={isTooltipOpen}>
      <FormControl variant="outlined" className={classnames(className, ownClasses.value)} disabled={disabled}>
        {isOutlined ? (
          <InputLabel ref={inputLabel} htmlFor={inputId}>
            { label }
          </InputLabel>
        ) : undefined }
        <Select
          value={value}
          className={
            classnames(
              ownClasses.select,
              isOutlined && ownClasses.selectOutlined,
              fullWidth && ownClasses.fullWidth,
            )
          }
          classes={{
            select: classnames(
              ownClasses.selectElement,
              isOutlined && ownClasses.selectElementOutlined,
              classes.select,
            ),
            icon: classnames(
              ownClasses.dropdownIcon,
              isOutlined && ownClasses.dropdownIconOutlined,
            ),
          }}
          input={isOutlined ? (
            <OutlinedInput
              variant="outlined"
              labelWidth={labelWidth}
              id={inputId}
            />
          ) : undefined}
          onChange={_onChange}
          IconComponent={ExpandIcon}
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
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
                {option.value}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </CommonTooltip>
  )
}

CommonSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'outlined']),
  value: PropTypes.string.isRequired,
  classes: PropTypes.object,
  className: PropTypes.string,
  tooltipText: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['regular', 'small']),
  label: PropTypes.string,
}

CommonSelect.defaultProps = {
  variant: 'default',
  fullWidth: false,
  classes: {},
  className: undefined,
  tooltipText: '',
  onChange: () => {},
  onClick: () => {},
  disabled: false,
  size: 'regular',
  label: undefined,
}

export { CommonSelect }
