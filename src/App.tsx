import { CssBaseline } from '@mui/material';
import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MainRouter } from './components/router/MainRouter';
import { AppContext } from './Context/AppContext';
import { AppReducer } from './Context/AppReducer';
import { DefaultContextValue, AppContextType } from './Context/DefaultContextValue';
import { Action } from './models/Actions';
import { AppContextState } from './models/AppContextState';

const App = () => {
    const [state, changeState] = useReducer<React.Reducer<AppContextType, Action>>(AppReducer, DefaultContextValue);

    const ContextState: AppContextState = {
        state,
        changeState
    };

    return (
        <AppContext.Provider value={ContextState} >
            <CssBaseline enableColorScheme />
            <BrowserRouter >
                <MainRouter />
            </BrowserRouter>
        </AppContext.Provider>

    );
};

export default App;
