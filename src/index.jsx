import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#9a4445',
          light: '#b77374',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#505050',
          paper: '#a0a0a8',
        },
        text: {
          primary: '#161515',
          secondary: 'rgba(166,166,166,0.7)',
        },
      },
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
