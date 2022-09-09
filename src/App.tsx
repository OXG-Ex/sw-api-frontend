import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { useMemo, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MainRouter } from './components/router/MainRouter';
import { AppContext } from './Context/AppContext';
import { AppReducer } from './Context/AppReducer';
import { DefaultContextValue, AppContextType } from './Context/DefaultContextValue';
import { Action } from './models/Actions';
import { AppContextState } from './models/AppContextState';
import { Background } from './components/background/Background';
import { Theme } from './models/Theme';
import { LightTheme, DarkTheme } from './models/ThemeModels';

import "./App.scss";

const App = () => {
    const [state, changeState] = useReducer<React.Reducer<AppContextType, Action>>(AppReducer, DefaultContextValue);

    const currentThemeOptions = useMemo(() => state.theme === Theme.Light ? LightTheme : DarkTheme, [state.theme]);

    const ContextState: AppContextState = {
        state,
        changeState
    };

    return (
        <AppContext.Provider value={ContextState} >
            <ThemeProvider theme={currentThemeOptions}>
                <CssBaseline enableColorScheme />
                <BrowserRouter >
                    <MainRouter />
                </BrowserRouter>
                <Background></Background>
            </ThemeProvider>
        </AppContext.Provider>

    );
};

export default App;
