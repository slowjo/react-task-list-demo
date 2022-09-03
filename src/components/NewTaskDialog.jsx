import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

export default function FormDialog({ addTask, handleClose, newTaskDialogOpen }) {
  const [taskInput, setTaskInput] = React.useState({
    id: null,
    taskName: '',
    taskCategory: '',
  });

  const handleChange = (e) => {
    setTaskInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskInput);
    addTask(taskInput);
    setTaskInput({
        id: null,
        taskName: '',
        taskCategory: '',
    })
    handleClose();
  }

  return (
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <Dialog open={newTaskDialogOpen} onClose={handleClose}>
        <DialogTitle>Add new task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter task details to create a new task
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Task Name"
            type="text"
            fullWidth
            variant="outlined"
            value={taskInput.taskName}
            onChange={handleChange}
            name="taskName"
          />
          <TextField
            autoFocus
            margin="dense"
            id="taskCategory"
            label="Category"
            type="text"
            fullWidth
            variant="outlined"
            value={taskInput.taskCategory}
            onChange={handleChange}
            name="taskCategory"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Task</Button>
        </DialogActions> 
      </Dialog>
    </Box>
  );
}