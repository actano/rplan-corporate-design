import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core'

import { PrimaryButton, SecondaryButton } from '../../buttons'
import { testIdProp } from '../../utils/test-id-prop'

const useButtonStyles = makeStyles(theme => ({
  buttonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
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
    marginRight: theme.spacing(4),
    padding: theme.spacing(0.75),

  },
}))

export const EditorButtons = ({
  onCancel, onSave, isSaveDisabled, testIds,
}) => {
  const classes = useButtonStyles()
  return (
    <div className={classes.buttonContainer}>
      {isSaveDisabled ? (
        <div
          className={classes.warningMessage}
        >
          Text exceeds maximum valid size!
        </div>
      ) : null}
      <SecondaryButton
        className={classes.cancelButton}
        onClick={onCancel}
        {...testIdProp(testIds.cancelButton)}
      >
        Cancel
      </SecondaryButton>
      <PrimaryButton
        className={classes.saveButton}
        onClick={onSave}
        disabled={isSaveDisabled}
        {...testIdProp(testIds.saveButton)}
      >
        Save
      </PrimaryButton>
    </div>
  )
}

EditorButtons.propTypes = {
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  isSaveDisabled: PropTypes.bool,
  testIds: PropTypes.shape({
    saveButton: PropTypes.string,
    cancelButton: PropTypes.string,
  }),
}

EditorButtons.defaultProps = {
  onChange: () => {},
  onCancel: () => {},
  onSave: () => {},
  isSaveDisabled: false,
  testIds: {
    saveButton: '',
    cancelButton: '',
  },
}
