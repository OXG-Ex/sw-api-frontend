import { Fab, Paper } from "@mui/material";
import React, { useCallback, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { SearchField } from "./searchField/SearchField";
import useSearch from "../../hooks/useSearch";

import './SearchBlock.scss';

export const SearchBlock: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const { search } = useSearch();

    const searchCallback = useCallback(() => {
        search(searchValue);
    }, [search, searchValue]);

    return <Paper className="search-block-container" elevation={10}>
        <SearchField onChangeCallback={setSearchValue} />
        <Fab size="small" color="info" aria-label="search" onClick={searchCallback}>
            <SearchIcon />
        </Fab>
    </Paper>;
};
