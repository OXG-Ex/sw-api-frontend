import { Paper, CircularProgress } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import { AppContext } from "../../Context/AppContext";

export const Preloader: React.FC = () => {
    const { state } = React.useContext(AppContext);

    return <Fade up when={state.isDataLoading}>
        <Paper elevation={10} sx={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress />
        </Paper>
    </Fade>;
};
