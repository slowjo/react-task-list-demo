import * as React from 'react';

const useBottomNav = () => {
    const [bottomNavValue, setBottomNavValue] = React.useState('all');

    const [displayedTasks, setDisplayedTasks] = React.useState([]);

    const handleFilterChange = (event, newValue) => {
        setDisplayedTasks([]);
        setTimeout(() => {
        setBottomNavValue(newValue);
        }, 500);
    };

    return {
        bottomNavValue,
        setBottomNavValue,
        displayedTasks,
        setDisplayedTasks,
        handleFilterChange
    };
};

export default useBottomNav;