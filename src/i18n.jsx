import { useTranslation as originalUseTranslation } from 'react-i18next'
import pkg from '../package.json'

export const useTranslation = (fileName = 'translations', ...args) =>
  originalUseTranslation(`corporate-design:${pkg.version}:${fileName}`, ...args)
