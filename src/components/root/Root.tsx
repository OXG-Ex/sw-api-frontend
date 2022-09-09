import { Fab } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import { Fade } from "react-reveal";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { AppContext } from "../../Context/AppContext";
import { CharactersList } from "../Characters/CharactersList";
import { SearchBlock } from "../SearchBlock/SearchBlock";
import { ActionType } from "../../models/Actions";


export const Root: React.FC = () => {
    const { state, changeState } = React.useContext(AppContext);

    const showSearchBlock = useMemo(() => !state.findList || state.findList.length === 0, [state.findList]);
    const clearSearchResults = useCallback(() => {
        changeState({ type: ActionType.CLEAR_FIND_LIST, payload: null });
    }, [changeState]);

    return <div style={{ position: "relative" }}>
        <Fade left wait={2000} when={showSearchBlock && !state.isDataLoading}>
            <SearchBlock />
        </Fade>
        <Fade left when={!showSearchBlock}>
            <Fab size="small" color="info" aria-label="search" onClick={clearSearchResults}>
                <ArrowBackIcon />
            </Fab>
        </Fade>
        <CharactersList />
    </div>;
};
