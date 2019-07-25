import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from '@material-ui/core'
import DotIcon from '@material-ui/icons/MoreVert'

const useDotMenuItemStyles = makeStyles(() => ({
  menuItem: {
    fontSize: '0.8125rem',
    minHeight: 'initial',
  },
}))

const DotMenuItem = React.forwardRef(({ className, children, ...props }, ref) => {
  const classes = useDotMenuItemStyles()

  return (
    <MenuItem
      ref={ref}
      className={classnames(className, classes.menuItem)}
      {...props}
    >
      {children}
    </MenuItem>
  )
})

DotMenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

DotMenuItem.defaultProps = {
  className: undefined,
  children: undefined,
}

function extendCallback(originalCallback, extension) {
  if (originalCallback == null) {
    return extension
  }

  return (...args) => {
    originalCallback(...args)
    extension(...args)
  }
}

const DotMenu = React.forwardRef(({ className, classes, children }, ref) => {
  const [menuAnchor, setMenuAnchor] = useState()

  const openDotMenu = useCallback(
    (event) => {
      setMenuAnchor(event.currentTarget)
    },
    [],
  )

  const closeDotMenu = useCallback(
    () => {
      setMenuAnchor(null)
    },
    [],
  )

  const preventClickThrough = useCallback(
    (event) => {
      event.stopPropagation()
    },
    [],
  )

  // automatically close the menu when a child (i.e. menu item) is clicked
  const _children = React.Children.map(children, (child) => {
    const onClick = extendCallback(child.props.onClick, closeDotMenu)
    return React.cloneElement(child, { onClick })
  })

  return (
    <div
      ref={ref}
      className={className}
      onClick={preventClickThrough}
      role="presentation"
    >
      <IconButton
        onClick={openDotMenu}
        className={classes.button}
        size="small"
      >
        <DotIcon />
      </IconButton>
      <Menu
        open={menuAnchor != null}
        onClose={closeDotMenu}
        getContentAnchorEl={null}
        anchorEl={menuAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {_children}
      </Menu>
    </div>
  )
})

DotMenu.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node,
}

DotMenu.defaultProps = {
  className: undefined,
  classes: {},
  children: undefined,
}

export { DotMenu, DotMenuItem }
