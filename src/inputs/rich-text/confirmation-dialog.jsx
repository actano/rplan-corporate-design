import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { ReportProblemOutlined } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { DefaultDialog } from '../../components/default-dialog'
import { TertiaryButton, PrimaryButton } from '../../buttons'

import { useTranslation } from '../../i18n'

const useStyles = makeStyles(theme => ({
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

const ConfirmationDialog = ({
  isOpen,
  cancel,
  confirm,
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
          >
            {translate("Don't save")}
          </TertiaryButton>
          <PrimaryButton
            onClick={confirm}
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

ConfirmationDialog.propTypes = {
  isOpen: PropTypes.bool,
  cancel: PropTypes.func,
  confirm: PropTypes.func,
}

ConfirmationDialog.defaultProps = {
  isOpen: false,
  cancel: () => {},
  confirm: () => {},
}

export { ConfirmationDialog }
