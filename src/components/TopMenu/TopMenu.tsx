import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppContext } from '../../Context/AppContext';
import { ActionType } from '../../models/Actions';
import { Theme } from '../../models/Theme';
import { Fab } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

export const TopMenu = () => {
    const { state, changeState } = React.useContext(AppContext);

    const changeTheme = React.useCallback(() => {
        changeState({ type: ActionType.CHANGE_THEME, payload: state.theme === Theme.Dark ? Theme.Light : Theme.Dark });
    }, [changeState, state.theme]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#1c1e22" }}>
                <Toolbar style={{ minHeight: "40px" }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {"Star Wars API"}
                    </Typography>
                    <Fab size="small" color="info" aria-label="Change theme" onClick={changeTheme} sx={{ height: "30px", width: "30px", minHeight: "30px" }}>
                        <BoltIcon />
                    </Fab>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
