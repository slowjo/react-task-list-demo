import { useEffect } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import DeleteNoteSnackbar from './components/DeleteNoteSnackbar';
import NotificationSnackbar from './components/NotificationSnackbar';
import useTasksLogic from './customhooks/useTasksLogic';
import useModalsLogic from './customhooks/useModalsLogic';
import MyBottomNav from './components/MyBottomNav';
import NewTaskFab from './components/NewTaskFab';
import ContentLayoutBox from './components/ContentLayoutBox';
import useBottomNav from './customhooks/useBottomNav';

function App() {
  const { tasks, addTask, toggleCompleted, deleteTask, restoreTask, deleteNoteOpen, handleDeleteNoteClose, notificationOpen, handleNotificationClose, notificationSeverity, notificationMessage, } = useTasksLogic();

  const openTaskCount = tasks.filter((task) => !task.completed).length;
  const anyTasks = tasks.length > 0;

  const { mobileOpen, handleDrawerToggle, newTaskDialogOpen, handleClickOpen, handleClose } = useModalsLogic();

  const drawerWidth = 240;

  const { bottomNavValue, setBottomNavValue, displayedTasks, setDisplayedTasks, handleFilterChange } = useBottomNav();

  useEffect(() => {
    if (tasks.length < 1) {
      setBottomNavValue('all');
    }
  }, [tasks, setBottomNavValue]);

  useEffect(() => {
    console.log(bottomNavValue);
    const filteredTasks = bottomNavValue === 'all' ? tasks : bottomNavValue === 'completed' ? tasks.filter((task) => task.completed) : tasks.filter((task) => !task.completed);
    setDisplayedTasks(filteredTasks);
  }, [bottomNavValue, tasks, setDisplayedTasks]);

  const leftPanel = (
    <TaskList
      tasks={displayedTasks}
      openTaskCount={openTaskCount}
      addTask={addTask} 
      toggleCompleted={toggleCompleted}
      newTaskDialogOpen={newTaskDialogOpen}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      bottomNavValue={bottomNavValue}
      handleFilterChange={handleFilterChange}
      deleteTask={deleteTask}
    />
  );

  const rightPanel = (
    <NewTaskForm addTask={addTask} />
  );

  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <ButtonAppBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
      <ContentLayoutBox leftPanelContent={leftPanel} rightPanelContent={rightPanel} />
      <NewTaskFab handleClickOpen={handleClickOpen} newTaskDialogOpen={newTaskDialogOpen} />
      <DeleteNoteSnackbar deleteNoteOpen={deleteNoteOpen} handleDeleteNoteClose={handleDeleteNoteClose} restoreTask={restoreTask} />
      <NotificationSnackbar severity={notificationSeverity} message={notificationMessage} open={notificationOpen} handleClose={handleNotificationClose} />
      <MyBottomNav newTaskDialogOpen={newTaskDialogOpen} bottomNavValue={bottomNavValue} handleFilterChange={handleFilterChange} anyTasks={anyTasks} />
    </div>
  );
}

export default App;
