import Task from './Task';
import * as React from 'react';
import Box from '@mui/material/Box';
import NewTaskDialog from './NewTaskDialog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TransitionGroup } from 'react-transition-group';

const TaskList =  ({ tasks, openTaskCount, addTask, toggleCompleted, newTaskDialogOpen, handleClickOpen, handleClose, bottomNavValue, handleFilterChange, anyTasks, deleteTask }) => {
    return (
        <>
        <Card elevation={0}>
            <CardHeader
                title="My Tasks"
                subheader={`${openTaskCount} open tasks`}
                action={
                    <IconButton 
                        onClick={handleClickOpen}
                        sx={{
                            display: { sm: 'none' }
                        }}
                    >
                        <AddIcon color='primary' />
                    </IconButton>
                }
            />
            <NewTaskDialog addTask={addTask} handleClickOpen={handleClickOpen} handleClose={handleClose} newTaskDialogOpen={newTaskDialogOpen} />
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: { xs: 'none', sm: 'block' } }}>
                <Tabs 
                    value={bottomNavValue}
                    onChange={handleFilterChange}  
                >
                    <Tab label='All' value="all" />
                    <Tab label='Open' value="uncompletd" />
                    <Tab label='Completed' value="completed" />
                </Tabs>
            </Box>
            <Box sx={{ width: '100%' }}>
                <TransitionGroup>
                    {tasks.map((task, index) => (
                        <Task task={task} toggleCompleted={toggleCompleted} deleteTask={deleteTask} index={index} key={task.id} />
                    )
                    )}
                </TransitionGroup>    
            </Box>
        </Card>
        </>
    );
};

export default TaskList;