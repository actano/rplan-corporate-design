import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Tab, Tabs } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { testIdProp } from '../shared/test-ids'

const styles = (theme) => {
  const { colors } = theme.palette
  return {
    menuRow: {
      flex: 'none',
      height: theme.spacing(3.6),
      minHeight: theme.spacing(3.5),
    },
    menuEntryRoot: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'initial',
      lineHeight: `${theme.spacing(2)}px`,
      letterSpacing: `${theme.spacing(0.0625)}px`,
      color: colors.darkGrey,
      opacity: '1',
      minWidth: 'initial',
      minHeight: theme.spacing(3.5),
      padding: theme.spacing(0, 0, 1.625, 0),
    },
    standardVariant: {
      marginRight: theme.spacing(5),
    },
    selectedTab: {
      color: colors.strongerBlue,
    },
    indicator: {
      border: `1px solid ${colors.strongerBlue}`,
    },
  }
}

const _TabBar = ({
  className, tabs, onChange, classes, selectedTabIndex, tabsFullWidth,
}) => (
  <Tabs
    classes={{ indicator: classes.indicator }}
    className={classnames(className, classes.menuRow)}
    value={selectedTabIndex}
    onChange={onChange}
    variant={tabsFullWidth ? 'fullWidth' : 'standard'}
  >
    {
      tabs.map(tab => (
        <Tab
          label={tab.text}
          key={tab.text}
          classes={{
            root: classnames(
              classes.menuEntryRoot,
              !tabsFullWidth ? classes.standardVariant : null,
            ),
            selected: classes.selectedTab,
          }}
          {...testIdProp(tab.testId)}
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
      testId: PropTypes.string,
    }),
  ).isRequired,
  selectedTabIndex: PropTypes.number,
  onChange: PropTypes.func,
  classes: PropTypes.object.isRequired,
  tabsFullWidth: PropTypes.bool,
}

_TabBar.defaultProps = {
  className: undefined,
  selectedTabIndex: 0,
  onChange: () => {},
  tabsFullWidth: false,
}

const TabBar = withStyles(styles)(_TabBar)

export { TabBar }
