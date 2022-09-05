import { useState, useEffect } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import TaskList from './components/TaskList';
import Box from '@mui/material/Box';
import NewTaskForm from './components/NewTaskForm';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DeleteNoteSnackbar from './components/DeleteNoteSnackbar';

function App() {
  const [tasks, setTasks] = useState([]);

  const openTaskCount = tasks.filter((task) => !task.completed).length;
  const anyTasks = tasks.length > 0;

  const addTask = (newTask) => {
    setTasks((prev) => ([
      ...prev,
      {
        ...newTask,
        id: Date.now().toString(),
        completed: false,
      }
    ]));
  };

  const toggleCompleted = (id) => {
    setTasks((prev) => {
      return prev.map((item) => (
        item.id === id ? {
          ...item,
          completed: !item.completed,
        } : item
      ));
    });
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;

  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState(false);

  const handleClickOpen = () => {
      setNewTaskDialogOpen(true);
    };
    
  const handleClose = () => {
    setNewTaskDialogOpen(false);
  };

  const [bottomNavValue, setBottomNavValue] = useState('all');

  const handleFilterChange = (event, newValue) => {
    setDisplayedTasks([]);
    setTimeout(() => {
      setBottomNavValue(newValue);
    }, 500);
  };

  useEffect(() => {
    if (tasks.length < 1) {
      setBottomNavValue('all');
    }
  }, [tasks]);

  const [displayedTasks, setDisplayedTasks] = useState([]);

  useEffect(() => {
    console.log(bottomNavValue);
    const filteredTasks = bottomNavValue === 'all' ? tasks : bottomNavValue === 'completed' ? tasks.filter((task) => task.completed) : tasks.filter((task) => !task.completed);
    setDisplayedTasks(filteredTasks);
  }, [bottomNavValue, tasks]);

  const [deleteNoteOpen, setDeleteNoteOpen] = useState(false);

  const [lastDeletedTask, setLastDeletedTask] = useState(null);

  const deleteTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setLastDeletedTask({
      task: taskToDelete,
      index: tasks.indexOf(taskToDelete),
    });
    setTasks((prev) => ([
      ...prev.filter((task) => task.id !== id)
    ]));
    setDeleteNoteOpen(true);
  };

  const restoreTask = () => {
    if (lastDeletedTask == null) {
      return;
    }
    const tasksCopy = [...tasks];
    tasksCopy.splice(lastDeletedTask.index, 0, lastDeletedTask.task);
    setTasks(tasksCopy);
    setLastDeletedTask(null);
    setDeleteNoteOpen(false);
  };

  const handleDeleteNoteClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setDeleteNoteOpen(false);
    setLastDeletedTask(null);
  }

  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <ButtonAppBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
      <Box component='main' sx={{ 
          display: { sm: 'grid' },
          gridTemplateColumns: '1fr 1fr',
          padding: { xs: '1em', sm: '2em'}, 
          paddingLeft: { sm: 'calc(240px + 2em)' },
          paddingBottom: { xs: '7em', sm: '2em' },
          gap: '2em', 
      }}>
        <div>
          <TaskList
            tasks={displayedTasks}
            openTaskCount={openTaskCount}
            anyTasks={anyTasks} 
            addTask={addTask} 
            toggleCompleted={toggleCompleted}
            newTaskDialogOpen={newTaskDialogOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            bottomNavValue={bottomNavValue}
            handleFilterChange={handleFilterChange}
            deleteTask={deleteTask}
          />
        </div>
        <div>
          <NewTaskForm addTask={addTask} />
        </div>
      </Box>
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
      <DeleteNoteSnackbar deleteNoteOpen={deleteNoteOpen} handleDeleteNoteClose={handleDeleteNoteClose} restoreTask={restoreTask} />
      <BottomNavigation
        sx={{ position: 'fixed', right: 0, bottom: 0, left: 0, display: { xs: newTaskDialogOpen ? 'none' : 'flex', sm: 'none' } }}
        showLabels
        value={bottomNavValue}
        onChange={handleFilterChange}
      >
        <BottomNavigationAction label="All" icon={<AssignmentIcon />} value='all' disabled={!anyTasks} />
        <BottomNavigationAction label="Open" icon={<AssignmentLateIcon />} value='uncompleted' disabled={!anyTasks} />
        <BottomNavigationAction label="Completed" icon={<AssignmentTurnedInIcon />} value='completed' disabled={!anyTasks} />
      </BottomNavigation>
    </div>
  );
}

export default App;
