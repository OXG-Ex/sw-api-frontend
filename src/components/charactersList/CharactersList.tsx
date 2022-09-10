import { Pagination, useTheme } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import { Fade } from "react-reveal";

import { AppContext } from "../../Context/AppContext";
import useSearch from "../../hooks/useSearch";
import { CharacterCard } from "./CharacterCard/CharacterCard";

import './CharactersList.scss';

export const CharactersList: React.FC = () => {
    const { state } = React.useContext(AppContext);
    const theme = useTheme();
    const { loadPage } = useSearch();

    const characterCards = useMemo(() => {
        if (!state.searchData.results) {
            return;
        }

        return state.searchData.results.map(
            character => <CharacterCard character={character} key={character.name} />
        );
    }, [state.searchData.results]);

    const showPagination = useMemo(() => characterCards && (state.searchData.count > characterCards.length), [characterCards, state.searchData.count]);
    const pageCount = useMemo(() => Math.ceil(state.searchData.count / 10), [state.searchData.count]);

    const onPageChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        loadPage(value);
    }, [loadPage]);


    return <Fade up when={characterCards && characterCards.length > 0}>

        <div className="characters-list" style={{ boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}` }}>

            <div className="characters-scroll-container">
                {showPagination && <Pagination count={pageCount} onChange={onPageChange} />}
                {characterCards}
            </div>
        </div>
    </Fade>;
};
