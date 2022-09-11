import React, { useCallback, useMemo } from "react";

import { Notification, NotificationType } from "../models/Notification";
import { ApiServiceInstance } from "../api/ApiServiceInstance";
import { AppContext } from "../Context/AppContext";
import { ActionType } from "../models/Actions";

const useCharacterAPI = (id: string) => {
    const { state, dispatch } = React.useContext(AppContext);
    const cachedCharacter = useMemo(() => state.searchData.results.find(x => x.url.split("/")[5] === id), [id, state.searchData.results]);

    const updateCharacter = useCallback(() => {
        if (cachedCharacter) {
            dispatch({ type: ActionType.SET_CURRENT_CHARACTER, payload: cachedCharacter });
            return;
        }
        dispatch({ type: ActionType.SET_IS_DATA_LOADING, payload: true });
        ApiServiceInstance.getCharacter(id)
            .then(x => {
                dispatch({ type: ActionType.SET_CURRENT_CHARACTER, payload: x.data });
            })
            .catch(e => {
                dispatch({ type: ActionType.SET_CURRENT_NOTIFICATION, payload: { messageText: "Something went wrong :(", messageColor: NotificationType.Error, visible: true } as Notification });
            }
            )
            .finally(() => {
                dispatch({ type: ActionType.SET_IS_DATA_LOADING, payload: false });
            });
    }, [cachedCharacter, dispatch, id]);

    return { updateCharacter };
};

export default useCharacterAPI;
