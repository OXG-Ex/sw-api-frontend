import React, { useCallback } from "react";
import { AxiosResponse } from "axios";

import { AppContext } from "../Context/AppContext";
import { ActionType } from "../models/Actions";
import { ApiServiceInstance } from "../api/ApiServiceInstance";
import { SearchCharacterResult } from "../models/SearchCharacterResult";


const useSearch = () => {
    const { state, changeState } = React.useContext(AppContext);

    const processSearchPromise = useCallback((promise: Promise<AxiosResponse<SearchCharacterResult>>) => {
        promise.then(x => {
            changeState({ type: ActionType.UPDATE_SEARCH_DATA, payload: x.data });
            console.log(x.data);
        })
            .catch(e =>
                console.error(e)
            )
            .finally(() => {
                changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: false });
            });
    }, [changeState]);

    const prepareSearch = useCallback((searchValue?: string) => {
        searchValue && changeState({ type: ActionType.SET_CURRENT_SEARCH_VALUE, payload: searchValue });
        changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: true });
    }, [changeState]);

    const search = useCallback((searchValue: string) => {
        prepareSearch(searchValue);
        processSearchPromise(ApiServiceInstance.search(searchValue, 1));
    }, [prepareSearch, processSearchPromise]);

    const loadPage = useCallback((pageNumber: number) => {
        prepareSearch();
        processSearchPromise(ApiServiceInstance.search(state.currentSearchValue, pageNumber));
    }, [prepareSearch, processSearchPromise, state.currentSearchValue]);

    return { search, loadPage };
};

export default useSearch;
