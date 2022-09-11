import React, { useCallback, useMemo, useState } from "react";
import { Fade } from "react-reveal";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { AppContext } from "../../Context/AppContext";
import { CharactersList } from "../charactersList/CharactersList";
import { SearchBlock } from "../SearchBlock/SearchBlock";
import { ActionType } from "../../models/Actions";
import { ViewedCharactersList } from "./viewedCharactersList/ViewedCharactersList";
import { FloatingButton } from "../floatingButton/FloatingButton";

import "./RootPage.scss";


export const RootPage: React.FC = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const [showViewedCharacters, setShowViewedCharacters] = useState(false);

    const showSearchBlock = useMemo(() => !state.searchData.results || state.searchData.results.length === 0, [state.searchData.results]);
    const showViewedButton = useMemo(() => state.viewedCharacters.length > 0, [state.viewedCharacters.length]);

    const toggleViewedCharactersList = useCallback(() => setShowViewedCharacters(!showViewedCharacters), [showViewedCharacters]);

    const clearSearchResults = useCallback(() => {
        dispatch({ type: ActionType.CLEAR_SEARCH_DATA, payload: null });
    }, [dispatch]);

    return <div className="root-page-container">
        <Fade left when={showSearchBlock && !state.isDataLoading} mountOnEnter appear>
            <SearchBlock />
        </Fade>

        <FloatingButton onClick={clearSearchResults} tooltipText="Back to search" className="first" show={!showSearchBlock} >
            <ArrowBackIcon />
        </FloatingButton>

        <FloatingButton onClick={toggleViewedCharactersList} tooltipText="Show / Hide viewed characters" className="second" show={showViewedButton} >
            <RemoveRedEyeOutlinedIcon />
        </FloatingButton>

        <CharactersList />
        <ViewedCharactersList show={showViewedCharacters} hideCallback={toggleViewedCharactersList} />
    </div>;
};
