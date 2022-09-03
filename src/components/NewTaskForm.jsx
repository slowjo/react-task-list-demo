import React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const NewTaskForm = ({ addTask }) => {
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
      }

    return (
        <Card component='form' onSubmit={handleSubmit} sx={{ display: { xs: 'none', sm: 'block' } }} elevation={0} >
            <CardHeader
                title="Add new task"
             />
            <CardContent>
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
            {/* <Button type="submit" variant="contained">Add Task</Button>                 */}
            </CardContent>
            <CardActions margin="dense">
                <Button disableElevation sx={{ boxSizing: 'border-box', width: '100%' }} type="submit" variant="contained">Add Task</Button>
            </CardActions>
        </Card>
    );
};

export default NewTaskForm;

