import { Card, CardContent, IconButton, List, Stack, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { Fade } from "react-reveal";
import CloseIcon from '@mui/icons-material/Close';

import { AppContext } from "../../../Context/AppContext";
import { ViewedCharacterItem } from "../viewedCharacterItem/viewedCharacterItem";

import "./ViewedCharactersList.scss";

export type ViewedCharactersListProps = {
    show: boolean;
    hideCallback: () => void;
};

export const ViewedCharactersList: React.FC<ViewedCharactersListProps> = ({ show, hideCallback }) => {
    const { state } = React.useContext(AppContext);
    const theme = useTheme();

    const viewedCharacters = useMemo(() => state.viewedCharacters.map(x => <ViewedCharacterItem character={x} />), [state.viewedCharacters]);

    return <Fade left when={show} mountOnEnter>
        <div className="viewed-characters-container" style={{ boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}` }}>
            <Card>
                <CardContent >
                    <Stack direction={"row"}>
                        <Typography variant="h6" component="div" sx={{ padding: "0px 10px" }}>
                            Viewed characters
                        </Typography>
                        <IconButton onClick={hideCallback}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <List>
                        {viewedCharacters}
                    </List>
                </CardContent>
            </Card>
        </div>
    </Fade>;
};
