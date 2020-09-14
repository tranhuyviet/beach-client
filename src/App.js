import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/bars/NavBar';
import HomePage from './components/pages/HomePage';

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
            <BrowserRouter>
                <CssBaseline />
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
