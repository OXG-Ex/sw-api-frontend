import React, { useCallback } from "react";
import { AxiosResponse } from "axios";

import { AppContext } from "../Context/AppContext";
import { ActionType } from "../models/Actions";
import { ApiServiceInstance } from "../api/ApiServiceInstance";
import { SearchCharacterResult } from "../models/SearchCharacterResult";
import { NotificationType, Notification } from "../models/Notification";


const useSearch = () => {
    const { state, dispatch } = React.useContext(AppContext);

    const processSearchPromise = useCallback((promise: Promise<AxiosResponse<SearchCharacterResult>>) => {
        promise.then(x => {
            if (x.data.count === 0) {
                dispatch({ type: ActionType.SET_CURRENT_NOTIFICATION, payload: { messageText: "We didn't found anything :(", messageColor: NotificationType.Warning, visible: true } as Notification });
            }
            dispatch({ type: ActionType.UPDATE_SEARCH_DATA, payload: x.data });
        })
            .catch(e => {
                dispatch({ type: ActionType.SET_CURRENT_NOTIFICATION, payload: { messageText: "Something went wrong :(", messageColor: NotificationType.Error, visible: true } as Notification });
            }
            )
            .finally(() => {
                dispatch({ type: ActionType.SET_IS_DATA_LOADING, payload: false });
            });
    }, [dispatch]);

    const prepareSearch = useCallback((searchValue?: string) => {
        searchValue && dispatch({ type: ActionType.SET_CURRENT_SEARCH_VALUE, payload: searchValue });
        dispatch({ type: ActionType.SET_IS_DATA_LOADING, payload: true });
    }, [dispatch]);

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
