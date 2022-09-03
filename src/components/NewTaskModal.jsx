import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewTaskModal({ addTask }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <div>
      <Button onClick={handleOpen}>Add new task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={style}
            onSubmit={handleSubmit}
        >
            <Stack spacing={3}>
                <Typography variant='h5' component='p'>Add a new task</Typography>
                <TextField id="outlined-basic" name="taskName" label="Task Name" variant="outlined" value={taskInput.taskName} onChange={handleChange} />
                <TextField id="outlined-basic" name="taskCategory" label="Category" variant="outlined" value={taskInput.taskCategory}  onChange={handleChange} />
                <Button type="submit">Add Task</Button>
            </Stack>
        </Box>
      </Modal>
    </div>
  );
}