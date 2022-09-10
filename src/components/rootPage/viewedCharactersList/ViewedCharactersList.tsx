import { List, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";

import { AppContext } from "../../../Context/AppContext";
import { ViewedCharacterItem } from "../viewedCharacterItem/viewedCharacterItem";

import "./ViewedCharactersList.scss";

export const ViewedCharactersList: React.FC = () => {
    const { state } = React.useContext(AppContext);
    const theme = useTheme();

    const viewedCharacters = useMemo(() => state.viewedCharacters.map(x => <ViewedCharacterItem character={x} />), [state.viewedCharacters]);

    return <div className="viewed-characters-container" style={{ boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}` }}>
        <Typography variant="h6" component="div" sx={{ padding: "0px 10px" }}>
            Viewed characters
        </Typography>
        <List>
            {viewedCharacters}
        </List>
    </div>;
};
