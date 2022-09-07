import * as React from 'react';

const useModalsLogic = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [newTaskDialogOpen, setNewTaskDialogOpen] = React.useState(false);

    const handleClickOpen = () => {
        setNewTaskDialogOpen(true);
    };
    
    const handleClose = () => {
        setNewTaskDialogOpen(false);
    };

    return {
        mobileOpen,
        setMobileOpen,
        handleDrawerToggle,
        newTaskDialogOpen,
        setNewTaskDialogOpen,
        handleClickOpen,
        handleClose
    }
};

export default useModalsLogic;