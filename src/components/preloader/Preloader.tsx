import { Paper, CircularProgress, Snackbar, Stack, Typography } from "@mui/material";
import React from "react";

import { AppContext } from "../../Context/AppContext";

export const Preloader: React.FC = () => {
    const { state } = React.useContext(AppContext);

    return <Snackbar open={state.isDataLoading} anchorOrigin={{ horizontal: 'right', vertical: 'top' }} sx={{ marginTop: "30px" }}>
        <Paper sx={{ padding: "10px" }}>
            <Stack direction={"row"} gap={"10px"}>
                <CircularProgress size={22} />
                <Typography variant="body1" color="info.main">
                    Loading data...
                </Typography>
            </Stack>
        </Paper>
    </Snackbar>;
};
