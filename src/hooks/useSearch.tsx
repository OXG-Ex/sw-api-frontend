import { useCallback } from "react";
import { AppContext } from "../Context/AppContext";
import React from "react";
import { ActionType } from "../models/Actions";
import { ApiServiceInstance } from "../api/ApiServiceInstance";

const useSearch = () => {
    const { changeState } = React.useContext(AppContext);

    const search = useCallback((searchValue: string) => {
        changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: true });
        ApiServiceInstance.search(searchValue)
            .then(x => {
                changeState({ type: ActionType.UPDATE_FIND_LIST, payload: x.data.results });
                console.log(x.data);
            })
            .catch(e =>
                console.error(e)
            )
            .finally(() => {
                changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: false });
            });
    }, [changeState]);

    return { search };
};
export default useSearch;
