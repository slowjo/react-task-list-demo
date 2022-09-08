import * as React from 'react';

const useNotifications = () => {
    const [notificationState, setNotificationState] = React.useState({
        open: false,
        severity: 'success',
        message: '',
        action: null,
      });
  
      const handleNotificationClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotificationState({
        open: false,
        // severity: 'success',
        message: '',
        action: null,
        });
    };

    return {
        notificationState, 
        setNotificationState, 
        handleNotificationClose,
    };
};

export default useNotifications;