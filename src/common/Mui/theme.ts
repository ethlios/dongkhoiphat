import { createTheme, responsiveFontSizes } from '@mui/material';

export let theme = createTheme({
    typography: {
        // fontFamily: ['Arial'].join(','),
    },
    palette: {
        primary: {
            main: '#3aaeae',
        },
        secondary: {
            main: '#EBAE46;',
            light: '#f8fafb',
        },
        info: {
            main: '#000',
        },
    },
});

theme = responsiveFontSizes(theme);
