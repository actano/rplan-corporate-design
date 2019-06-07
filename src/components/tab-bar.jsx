import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Tab, Tabs } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => {
  const colors = theme.palette.headerBar
  return {
    menuRow: {
      flex: 'none',
      height: theme.spacing(3.6),
      minHeight: theme.spacing(3.5),
    },
    menuEntryRoot: {
      fontSize: theme.spacing(1.5),
      fontWeight: 600,
      textTransform: 'initial',
      lineHeight: `${theme.spacing(2)}px`,
      letterSpacing: `${theme.spacing(0.0625)}px`,
      marginRight: theme.spacing(5),
      color: colors.TEXT.HOVER,
      minWidth: 'initial',
      minHeight: theme.spacing(3.5),
      padding: theme.spacing(0, 0, 1.625, 0),
    },
  }
}

const _TabBar = ({
  className, tabs, onChange, classes, selectedTabIndex,
}) => (
  <Tabs
    className={classnames(className, classes.menuRow)}
    value={selectedTabIndex}
    onChange={onChange}
    indicatorColor="primary"
    textColor="primary"
    variant="standard"
  >
    {
      tabs.map(tab => (
        <Tab
          label={tab.text}
          key={tab.text}
          classes={{
            root: classes.menuEntryRoot,
          }}
        />
      ))
    }
  </Tabs>
)

_TabBar.propTypes = {
  className: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabIndex: PropTypes.number,
  onChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
}

_TabBar.defaultProps = {
  className: undefined,
  selectedTabIndex: 0,
  onChange: () => {},
}

const TabBar = withStyles(styles)(_TabBar)

export { TabBar }
