import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const NotificationSnackbar = ({ severity, message, open, handleClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} sx={{ bottom: { xs: '9em', sm: '1em' } }}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} variant='filled'>
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
}

export default NotificationSnackbar;