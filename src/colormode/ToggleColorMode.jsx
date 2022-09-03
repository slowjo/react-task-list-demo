import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'dark' ? {
            drawerText: 'black',
            background: {
                default: '#121212',
                paper: '#171717',
            },
        } : {
            drawerText: 'white',
            background: {
                default: '#f1f1f1',
                paper: '#fff',
            },
        }),
    },
});

const ToggleColorMode = ({ children }) => {
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(() => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },  
    }), []);

    const theme = React.useMemo(() => (
        createTheme(getDesignTokens(mode))
    ), [mode]);

    return (
        <ColorModeContext.Provider
            value={colorMode}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ToggleColorMode;