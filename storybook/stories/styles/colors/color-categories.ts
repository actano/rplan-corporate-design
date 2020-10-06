import flatMap from 'lodash/flatMap'
import map from 'lodash/map'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import { themeConfig } from '../../../../src/theme/theme-config'
import { CorporateDesignTheme } from '../../../../src'

const theme = createMuiTheme(themeConfig) as unknown as CorporateDesignTheme

export interface ColorInfo {
  name: string,
  value: string,
}

export interface ColorCategoryMap {
  [id: string]: {
    colors: ColorInfo[],
  },
}

const colorCategories: ColorCategoryMap = {
  neutrals: {
    colors: [
      {
        name: 'Black',
        value: theme.palette.colors.black,
      },
      {
        name: 'Darkest Grey',
        value: theme.palette.colors.darkestGrey,
      },
      {
        name: 'Dark Grey',
        value: theme.palette.colors.darkGrey,
      },
      {
        name: 'Darker Grey',
        value: theme.palette.colors.darkerGrey,
      },
      {
        name: 'Grey',
        value: theme.palette.colors.grey,
      },
      {
        name: 'Light Grey',
        value: theme.palette.colors.lightGrey,
      },
      {
        name: 'Very Light Grey',
        value: theme.palette.colors.veryLightGrey,
      },
      {
        name: 'Lightest Grey',
        value: theme.palette.colors.lightestGrey,
      },
      {
        name: 'White',
        value: theme.palette.colors.white,
      },
    ],
  },
  signature: {
    colors: [
      {
        name: 'Very Dark Blue',
        value: theme.palette.colors.veryDarkBlue,
      },
      {
        name: 'Darker Blue',
        value: theme.palette.colors.darkerBlue,
      },
      {
        name: 'Dark Blue',
        value: theme.palette.colors.darkBlue,
      },
      {
        name: 'Stronger Blue',
        value: theme.palette.colors.strongerBlue,
      },
      {
        name: 'Blue (Primary)',
        value: theme.palette.colors.blue,
      },
      {
        name: 'Pale Blue',
        value: theme.palette.colors.paleBlue,
      },
      {
        name: 'Lighter Blue',
        value: theme.palette.colors.lighterBlue,
      },
      {
        name: 'Lightest Blue',
        value: theme.palette.colors.lightestBlue,
      },
    ],
  },
  support: {
    colors: [
      {
        name: 'Very Dark Deep Blue',
        value: theme.palette.colors.veryDarkDeepBlue,
      },
      {
        name: 'Deep Blue',
        value: theme.palette.colors.deepBlue,
      },
      {
        name: 'Light Deep Blue',
        value: theme.palette.colors.lightDeepBlue,
      },
      {
        name: 'Dull Blue',
        value: theme.palette.colors.dullBlue,
      },
      {
        name: 'Dull Turquoise',
        value: theme.palette.colors.dullTurquoise,
      },
      {
        name: 'Cyan',
        value: theme.palette.colors.cyan,
      },
      {
        name: 'Turquoise',
        value: theme.palette.colors.turquoise,
      },
      {
        name: 'Almond',
        value: theme.palette.colors.almond,
      },
      {
        name: 'Teal',
        value: theme.palette.colors.teal,
      },
      {
        name: 'Amber',
        value: theme.palette.colors.amber,
      },
      {
        name: 'Orange',
        value: theme.palette.colors.orange,
      },
    ],
  },
  signal: {
    colors: [
      {
        name: 'Green',
        value: theme.palette.colors.green,
      },
      {
        name: 'Pale Green',
        value: theme.palette.colors.paleGreen,
      },
      {
        name: 'Light Green',
        value: theme.palette.colors.lightGreen,
      },
      {
        name: 'Dark Red',
        value: theme.palette.colors.darkRed,
      },
      {
        name: 'Red',
        value: theme.palette.colors.red,
      },
      {
        name: 'Pale Red',
        value: theme.palette.colors.paleRed,
      },
      {
        name: 'Light Red',
        value: theme.palette.colors.lightRed,
      },
    ],
  },
}

const categorizedColors: ColorInfo[] = flatMap(colorCategories, cat => cat.colors)
const allColors: ColorInfo[] = map(
  theme.palette.colors,
  (value, name): ColorInfo => ({ value, name }),
)

const uncategorizedColors: ColorInfo[] = allColors.filter(
  ({ value }) => !categorizedColors.some(other => other.value === value),
)

export {
  colorCategories,
  uncategorizedColors,
}
