import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const MyTabs = ({ bottomNavValue, handleFilterChange }) => {
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: { xs: 'none', sm: 'block' } }}>
            <Tabs 
                value={bottomNavValue}
                onChange={handleFilterChange}  
            >
                <Tab label='All' value="all" />
                <Tab label='Open' value="uncompleted" />
                <Tab label='Completed' value="completed" />
            </Tabs>
        </Box>
    );
};

MyTabs.defaultProps = {
    bottomNavValue: 'all',
    handleFilterChange: () => {},
}

export default MyTabs;