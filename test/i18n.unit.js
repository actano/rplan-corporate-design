import { translationsTest } from '@rplan/allex-i18n-tools'
import path from 'path'

const i18nPath = path.join(__dirname, '../static/i18n')
const srcPath = path.join(__dirname, '../src')

describe('i18n', translationsTest(i18nPath, srcPath))
