import React, { useCallback, useMemo } from "react";
import { ApiServiceInstance } from "../api/ApiServiceInstance";
import { AppContext } from "../Context/AppContext";
import { ActionType } from "../models/Actions";

const useCharacterAPI = (id: string) => {
    const { state, changeState } = React.useContext(AppContext);
    const cachedCharacter = useMemo(() => state.searchData.results.find(x => x.url.split("/")[5] === id), [id, state.searchData.results]);

    const updateCharacter = useCallback(() => {
        if (cachedCharacter) {
            changeState({ type: ActionType.SET_CURRENT_CHARACTER, payload: cachedCharacter });
            return;
        }
        changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: true });
        ApiServiceInstance.getCharacter(id)
            .then(x => {
                changeState({ type: ActionType.SET_CURRENT_CHARACTER, payload: x.data });
            })
            .catch(e =>
                console.error(e)
            )
            .finally(() => {
                changeState({ type: ActionType.SET_IS_DATA_LOADING, payload: false });
            });
    }, [cachedCharacter, changeState, id]);

    return { updateCharacter };
};

export default useCharacterAPI;
