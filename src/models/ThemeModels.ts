import { createTheme, ThemeOptions } from "@mui/material/styles";

const DarkThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#a40000',
            light: '#003aa4',
        },
        secondary: {
            main: '#5d00f5',
        },
        info: {
            main: '#a40000',
        },
        background: {
            paper: '#1c1e22ff',
        },
        mode: "dark"
    }
};

export const LightThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#003aa4',
            light: '#003aa4',
            dark: '#002872'
        },
        secondary: {
            main: '#f50057',
        },
        info: {
            main: '#002bff'
        },
        mode: "dark"
    }
};

export const DarkTheme = createTheme(DarkThemeOptions);
export const LightTheme = createTheme(DarkThemeOptions, LightThemeOptions);
