import { useTranslation as originalUseTranslation } from 'react-i18next'
import pkg from '../package.json'

export const getNamespace = fileName => `corporate-design:${pkg.version}:${fileName}`

export const useTranslation = (fileName = 'translations', ...args) =>
  originalUseTranslation(getNamespace(fileName), ...args)
