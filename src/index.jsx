import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
          palette: {
            type: 'dark',
            primary: {
              main: '#ffa4f2',
            },
            secondary: {
              main: '#fb4385',
        },  background: {
              default: '#cccccc'
        },  surface: {
              default: '#545454'
        }
      },
    })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
