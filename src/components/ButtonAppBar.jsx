import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyDrawer from './MyDrawer';
import { ColorModeContext } from '../colormode/ToggleColorMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

export default function ButtonAppBar({ mobileOpen, handleDrawerToggle, drawerWidth }) {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'background.paper', color: 'text.primary', boxShadow: 'none', backgroundImage: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
          color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, pl: `${drawerWidth}px`, display: { xs: 'none', sm: 'block' } }}
          >
            Task List
          </Typography>
          <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
            </IconButton>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <MyDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth}s />
    </Box>
  );
}