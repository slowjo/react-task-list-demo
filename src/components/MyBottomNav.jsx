import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const MyBottomNav = ({ newTaskDialogOpen, bottomNavValue, handleFilterChange, anyTasks }) => {
    return (
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
    );
};

MyBottomNav.defaultProps = {
    newTaskDialogOpen: false,
    bottomNavValue: 'all',
    handleFilterChange: () => {},
    anyTasks: false,
}

export default MyBottomNav;