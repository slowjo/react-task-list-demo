import * as React from 'react';

const useTasksLogic = () => {
    const [tasks, setTasks] = React.useState([]);
    const [lastDeletedTask, setLastDeletedTask] = React.useState(null);
    const [deleteNoteOpen, setDeleteNoteOpen] = React.useState(false);

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
      const selectedTask = tasks.find((task) => task.id === id);
      if (!selectedTask.completed) {
        setNotificationState({
          open: true,
          severity: 'success',
          message: 'Task completed!',
        });
      } else {
        setNotificationState({
          open: true,
          severity: 'warning',
          message: "Task marked as 'open'!",
        });
      }

      setTasks((prev) => {
          return prev.map((item) => (
          item.id === id ? {
              ...item,
              completed: !item.completed,
          } : item
          ));
      });
    };

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
        setNotificationState({
          open: true,
          severity: 'success',
          message: 'Task restored!',
        });
    };

    const handleDeleteNoteClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setDeleteNoteOpen(false);
        setLastDeletedTask(null);
      }

    // Notifications
    const [notificationState, setNotificationState] = React.useState({
      open: false,
      severity: 'success',
      message: '',
    });

    // const handleNotificationClick = () => {
    //   setNotificationOpen(true);
    // };

    const handleNotificationClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotificationState({
          open: false,
          // severity: 'success',
          message: '',
        });
    };
    
    const { open: notificationOpen, severity: notificationSeverity, message: notificationMessage } = notificationState;

    return {
        tasks,
        setTasks,
        addTask,
        toggleCompleted,
        deleteTask,
        restoreTask,
        deleteNoteOpen,
        setDeleteNoteOpen,
        handleDeleteNoteClose,
        setLastDeletedTask,
        notificationOpen,
        handleNotificationClose,
        notificationSeverity,
        notificationMessage,
    }
};

export default useTasksLogic;