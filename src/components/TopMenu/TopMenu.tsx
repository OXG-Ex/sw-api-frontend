import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Fab, Tooltip } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

import { AppContext } from '../../Context/AppContext';
import { ActionType } from '../../models/Actions';
import { Theme } from '../../models/Theme';

export const TopMenu = () => {
    const { state, dispatch } = React.useContext(AppContext);

    const changeTheme = React.useCallback(() => {
        dispatch({ type: ActionType.CHANGE_THEME, payload: state.theme === Theme.Dark ? Theme.Light : Theme.Dark });
    }, [dispatch, state.theme]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#1c1e22" }}>
                <Toolbar style={{ minHeight: "40px" }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {"Star Wars API"}
                    </Typography>
                    <Tooltip title="Go to the other side of the force">
                        <Fab size="small" color="info" aria-label="Change theme" onClick={changeTheme} sx={{ height: "30px", width: "30px", minHeight: "30px" }}>
                            <BoltIcon />
                        </Fab>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
