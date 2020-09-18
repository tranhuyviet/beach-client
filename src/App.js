import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/bars/NavBar';
import HomePage from './components/pages/HomePage';
import DetailPage from './components/pages/DetailPage';
import { DataProvider } from './context/dataContext';
import { UIProvider } from './context/uiContext';

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                // main: '#92EC96',
                // main: '#673ab7',
                // main: '#f57c00',
                main: '#388e3c',
            },
        },
        share: {
            container: {
                maxWidth: '600px',
                margin: '0 auto',
                padding: '16px',
            },
            serviceIcon: {
                border: '1px solid',
                fontSize: 35,
                borderRadius: 10,
                margin: '8px 4px',
                padding: 4,
            },
        },
    });
    return (
        <UIProvider>
            <DataProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <CssBaseline />
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/:name" component={DetailPage} />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </DataProvider>
        </UIProvider>
    );
}

export default App;
