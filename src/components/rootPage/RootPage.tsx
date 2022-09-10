import { Fab, Tooltip } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { Fade } from "react-reveal";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { AppContext } from "../../Context/AppContext";
import { CharactersList } from "../charactersList/CharactersList";
import { SearchBlock } from "../SearchBlock/SearchBlock";
import { ActionType } from "../../models/Actions";
import { ViewedCharactersList } from "./viewedCharactersList/ViewedCharactersList";

import "./RootPage.scss";

export const RootPage: React.FC = () => {
    const { state, changeState } = React.useContext(AppContext);
    const [showViewedCharacters, setShowViewedCharacters] = useState(false);

    const showSearchBlock = useMemo(() => !state.searchData.results || state.searchData.results.length === 0, [state.searchData.results]);

    const toggleViewedCharactersList = useCallback(() => setShowViewedCharacters(!showViewedCharacters), [showViewedCharacters]);

    const clearSearchResults = useCallback(() => {
        changeState({ type: ActionType.CLEAR_SEARCH_DATA, payload: null });
    }, [changeState]);

    return <div className="root-page-container">
        <Fade left wait={2000} when={showSearchBlock && !state.isDataLoading} mountOnEnter appear>
            <SearchBlock />
        </Fade>
        <Fade left when={!showSearchBlock} mountOnEnter appear>
            <Tooltip title="Back to search">
                <Fab size="small" color="info" aria-label="search" onClick={clearSearchResults} className="left-button first">
                    <ArrowBackIcon />
                </Fab>
            </Tooltip>
        </Fade>
        <Fade left when={state.viewedCharacters.length > 0} mountOnEnter appear>
            <Tooltip title="Show / Hide viewed characters">
                <Fab size="small" color="info" aria-label="search" onClick={toggleViewedCharactersList} className="left-button second">
                    <RemoveRedEyeOutlinedIcon />
                </Fab>
            </Tooltip>
        </Fade>
        <CharactersList />
        <ViewedCharactersList show={showViewedCharacters} hideCallback={toggleViewedCharactersList} />
    </div>;
};
