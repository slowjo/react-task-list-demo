import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const NewTaskFab = ({ handleClickOpen, newTaskDialogOpen }) => {
    return (
        <Fab
        color='primary'
        variant='extended' 
        aria-label="add new task"
        onClick={handleClickOpen}
        sx={{ mb: 1, position: 'fixed', right: 16, bottom: '4rem', display: { xs: newTaskDialogOpen ? 'none' : 'flex', sm: 'none' } }}
      >
        <AddIcon sx={{ mr: 1 }} />
        New Task
      </Fab>
    );
};

NewTaskFab.defaultProps = {
    handleClickOpen: () => {},
    newTaskDialogOpen: false,
};

export default NewTaskFab;