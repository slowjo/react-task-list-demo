import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const NotificationSnackbar = ({ severity, message, open, handleClose, buttonAction }) => {
    const action = (
        <React.Fragment>
            {buttonAction && (
                <Button size="small" onClick={buttonAction}>
                    UNDO
                </Button>
            )}
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} sx={{ bottom: { xs: '9em', sm: '1em' } }}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} variant='filled' action={action}>
                {message}
            </Alert>
        </Snackbar>
    );
};

NotificationSnackbar.defaultProps = {
    severity: 'success',
    message: 'Successful!',
    open: true,
    handleClose: () => {},
    buttonAction: null,
}

export default NotificationSnackbar;