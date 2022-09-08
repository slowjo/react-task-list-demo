import * as React from 'react';
import useNotifications from './useNotifications';

const useTasksLogic = () => {
    const [tasks, setTasks] = React.useState([]);

    const { notificationState, setNotificationState, handleNotificationClose } = useNotifications();

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

    // const undoToggle = (id, backTo) => {
    //   setTasks((prev) => {
    //     return prev.map((item) => (
    //     item.id === id ? {
    //         ...item,
    //         completed: backTo,
    //     } : item
    //     ));
    //   });

    //   setNotificationState({
    //     open: true,
    //     severity: 'success',
    //     message: 'Task completed!',
    //     action: () => {undoToggle(id, false)},
    //   });
    // };
    
    const toggleCompleted = (id, backTo) => {
      const selectedTask = tasks.find((task) => task.id === id);
      if ((!backTo && !selectedTask.completed) || backTo === 'completed') {
        setNotificationState({
          open: true,
          severity: 'success',
          message: 'Task completed!',
          action: () => {toggleCompleted(id, 'open')},
        });
      } else if ((!backTo && selectedTask.completed) || backTo === 'open') {
        setNotificationState({
          open: true,
          severity: 'warning',
          message: "Task marked as 'open'!",
          action: () => {toggleCompleted(id, 'completed')},
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

    const restoreTask = (deletedTask, taskIndex) => {
        setTasks((prev) => {
          const tasksCopy = [...prev];
          tasksCopy.splice(taskIndex, 0, deletedTask);
          return tasksCopy;
        });
        setNotificationState({
          open: true,
          severity: 'success',
          message: 'Task restored!',
          action: null,
        });
    };

    const deleteTask = (id) => {
      const taskToDelete = tasks.find((task) => task.id === id);
      const taskIndex = tasks.indexOf(taskToDelete);
      setTasks((prev) => ([
          ...prev.filter((task) => task.id !== id)
      ]));
      setNotificationState({
        open: true,
        severity: 'warning',
        message: 'Task deleted',
        action: () => {restoreTask(taskToDelete, taskIndex)},
      });
    };
    
    const { open: notificationOpen, severity: notificationSeverity, message: notificationMessage, action: notificationButtonAction } = notificationState;

    return {
        tasks,
        setTasks,
        addTask,
        toggleCompleted,
        deleteTask,
        notificationOpen,
        handleNotificationClose,
        notificationSeverity,
        notificationMessage,
        notificationButtonAction,
    }
};

export default useTasksLogic;