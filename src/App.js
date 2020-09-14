import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/bars/NavBar';

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#92EC96',
            },
        },
        share: {
            container: {
                maxWidth: '600px',
                margin: '0 auto',
                padding: '16px',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
        </ThemeProvider>
    );
}

export default App;
