import { translationsTest } from '@rplan/allex-i18n-tools'
import path from 'path'

const i18nPath = path.join(__dirname, '../static/i18n')

describe('i18n', translationsTest(i18nPath))
