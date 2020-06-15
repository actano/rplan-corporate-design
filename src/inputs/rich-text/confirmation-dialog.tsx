import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { ReportProblemOutlined } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { DefaultDialog } from '../../dialogs/default-dialog'
import { TertiaryButton, PrimaryButton } from '../../buttons'

import { useTranslation } from '../../i18n'
import { testIdProp } from '../../utils/test-id-prop'
import { CorporateDesignTheme } from '../../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  icon: {
    width: theme.spacing(4.5),
    height: theme.spacing(3.5),
    color: theme.palette.colors.orange,
  },
  note: {
    marginTop: theme.spacing(2.25),
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    textAlign: 'center',
    maxWidth: '100%',
  },
}))

interface ConfirmationDialogProps {
  isOpen: boolean
  cancel: () => void,
  confirm: () => void,
  testIds: {
    confirmSave: string
    confirmDontSave: string
  },
}

const ConfirmationDialog: React.FunctionComponent<ConfirmationDialogProps> = ({
  isOpen = false,
  cancel = () => {},
  confirm = () => {},
  testIds = {
    confirmSave: '',
    confirmDontSave: '',
  },
}) => {
  const classes = useStyles()
  const [translate] = useTranslation()

  return (
    <DefaultDialog
      onClose={cancel}
      maxWidth="sm"
      open={isOpen}
      title={translate('Do you want to save the changes?')}
      icon={<ReportProblemOutlined className={classes.icon} />}
      buttons={(
        <>
          <TertiaryButton
            onClick={cancel}
            {...testIdProp(testIds.confirmDontSave)}
          >
            {translate("Don't save")}
          </TertiaryButton>
          <PrimaryButton
            onClick={confirm}
            {...testIdProp(testIds.confirmSave)}
          >
            {translate('Save changes')}
          </PrimaryButton>
        </>
      )}
    >
      <Typography
        className={classnames(classes.text, classes.warning)}
      >
        {translate('Otherwise your changes will not be saved.')}
      </Typography>
    </DefaultDialog>
  )
}

export { ConfirmationDialog }
