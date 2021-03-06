import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { ReportProblemOutlined } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { DefaultDialog } from './default-dialog'
import { TertiaryButton, PrimaryButton } from '../buttons'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

import { testIdProp } from '../shared/test-ids'

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

type TestIds = {
  confirmationDialog?: string,
  confirmButton?: string
  dontConfirmButton?: string
}

interface ConfirmationDialogProps {
  isOpen: boolean,
  title: string,
  confirmationText: string,
  cancellationText: string,
  infoText: string,
  cancel: () => void,
  confirm: () => void,
  testIds?: TestIds,
}

const ConfirmationDialog: React.FunctionComponent<ConfirmationDialogProps> = ({
  isOpen = false,
  title,
  confirmationText,
  cancellationText,
  infoText,
  cancel = () => {},
  confirm = () => {},
  testIds = {},
}) => {
  const classes = useStyles()

  return (
    <DefaultDialog
      onClose={cancel}
      maxWidth="sm"
      open={isOpen}
      title={title}
      icon={<ReportProblemOutlined className={classes.icon} />}
      buttons={(
        <>
          <TertiaryButton
            onClick={cancel}
            {...testIdProp(testIds.dontConfirmButton)}
          >
            {cancellationText}
          </TertiaryButton>
          <PrimaryButton
            onClick={confirm}
            {...testIdProp(testIds.confirmButton)}
          >
            {confirmationText}
          </PrimaryButton>
        </>
      )}
      {...testIdProp(testIds.confirmationDialog)}
    >
      <Typography
        className={classnames(classes.text, classes.warning)}
      >
        {infoText}
      </Typography>
    </DefaultDialog>
  )
}

export { ConfirmationDialog }
