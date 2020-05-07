import { translationsTest } from '@rplan/allex-i18n-tools'
import path from 'path'

const i18nPath = path.join(__dirname, '../static/i18n')

// TODO: unskip as soon as the allex-i18n-tools can handle pluralization
describe.skip('i18n', translationsTest(i18nPath))
