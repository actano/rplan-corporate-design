import React from 'react'
import { makeStyles } from '@material-ui/core'

import { PrimaryButton, SecondaryButton } from '../../buttons'
import { useTranslation } from '../../i18n'
import { testIdProp } from '../../shared/test-ids'
import { CorporateDesignTheme } from '../../theme/corporate-design-theme'

const useButtonStyles = makeStyles<CorporateDesignTheme>(theme => ({
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    height: theme.spacing(4.25),
  },
  saveButton: {
    fontSize: '0.75rem',
    padding: '4px 12px',
  },
  cancelButton: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    marginRight: theme.spacing(1),
  },
  warningMessage: {
    backgroundColor: theme.palette.colors.red,
    color: theme.palette.colors.darkestGrey,
    textAlign: 'center',

    flex: '1 1 auto',
    marginRight: theme.spacing(2.5),
    padding: theme.spacing(0.75),
  },
}))

type TestIds = {
  saveButton?: string,
  cancelButton?: string,
}

interface EditorButtonsProps {
  onCancel: () => void
  onSave: () => void
  isSaveDisabled: boolean
  testIds?: TestIds
}

export const EditorButtons: React.FunctionComponent<EditorButtonsProps> = ({
  onCancel = () => {},
  onSave = () => {},
  isSaveDisabled = false,
  testIds = {},
}) => {
  const [translate] = useTranslation()
  const classes = useButtonStyles()

  return (
    <div className={classes.main}>
      {isSaveDisabled ? (
        <div
          className={classes.warningMessage}
        >
          {translate('Text exceeds maximum valid size!')}
        </div>
      ) : null}
      <div className={classes.buttonContainer}>
        <SecondaryButton
          className={classes.cancelButton}
          onClick={onCancel}
          onMouseDown={onCancel}
          {...testIdProp(testIds.cancelButton)}
        >
          {translate('Cancel')}
        </SecondaryButton>
        <PrimaryButton
          className={classes.saveButton}
          onClick={onSave}
          onMouseDown={onSave}
          disabled={isSaveDisabled}
          {...testIdProp(testIds.saveButton)}
        >
          {translate('Save')}
        </PrimaryButton>
      </div>
    </div>
  )
}
