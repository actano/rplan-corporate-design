import React from 'react'
import PropTypes from 'prop-types'

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
    },
    menuEntryLabelContainer: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: theme.spacing(1.625),
      paddingTop: 0,
    },
    menuEntryLabel: {
      height: theme.spacing(2),
    },
  }
}

const _TabBar = ({
  tabs, onChange, classes, selectedTabIndex,
}) => (
  <Tabs
    className={classes.menuRow}
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
            labelContainer: classes.menuEntryLabelContainer,
            label: classes.menuEntryLabel,
          }}
        />
      ))
    }
  </Tabs>
)

_TabBar.propTypes = {
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
  selectedTabIndex: 0,
  onChange: () => {},
}

const TabBar = withStyles(styles)(_TabBar)

export { TabBar }
