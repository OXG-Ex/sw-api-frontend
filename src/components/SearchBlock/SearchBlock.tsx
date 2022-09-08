import { Fab, Paper } from "@mui/material";
import React, { useCallback, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { SearchField } from "./searchField/SearchField";
import { ApiServiceInstance } from "../../api/ApiServiceInstance";
import { AppContext } from "../../Context/AppContext";

import './SearchBlock.scss';
import { ActionType } from "../../models/Actions";


export const SearchBlock: React.FC = () => {
    const { changeState } = React.useContext(AppContext);
    const [searchValue, setSearchValue] = useState("");

    const searchCallback = useCallback(() => {
        changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: true });
        ApiServiceInstance.search(searchValue)
            .then(x => {
                changeState({ type: ActionType.UPDATE_FIND_LIST, payload: x.data.results });
            })
            .finally(() => changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: false }));
    }, [changeState, searchValue]);

    return <Paper className="search-block-container" elevation={10}>
        <SearchField onChangeCallback={setSearchValue} />
        <Fab size="small" color="info" aria-label="search" onClick={searchCallback}>
            <SearchIcon />
        </Fab>
    </Paper>;
};
