import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const TopMenu = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#1c1e22" }}>
                <Toolbar style={{ minHeight: "40px" }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {"Star Wars API"}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
