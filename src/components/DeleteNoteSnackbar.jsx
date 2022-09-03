import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const DeleteNoteSnackbar = ({ deleteNoteOpen, handleDeleteNoteClose, restoreTask }) => {
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={restoreTask}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleDeleteNoteClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            open={deleteNoteOpen}
            autoHideDuration={6000}
            onClose={handleDeleteNoteClose}
            message="Task deleted"
            action={action}
            sx={{ bottom: { xs: '9em', sm: '1em' } }}
        />
    );
};

export default DeleteNoteSnackbar;