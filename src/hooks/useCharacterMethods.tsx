import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import RouterPaths from "../components/router/RoutePath";
import { AppContext } from "../Context/AppContext";
import { ActionType } from "../models/Actions";
import { Character } from "../models/Character";

const useCharacterMethods = (character: Character) => {
    const navigate = useNavigate();
    const { changeState } = React.useContext(AppContext);

    const getId = useCallback(() => character && character.url.split("/")[5], [character]);

    const addToViewed = useCallback(() => character && changeState({ type: ActionType.ADD_VIEWED_CHARACTER, payload: character }), [changeState, character]);

    const openCharacterDetails = useCallback(() => {
        if (!character) {
            return;
        }
        addToViewed();
        navigate(RouterPaths.Character.replace(":id", getId()));
    }, [addToViewed, character, getId, navigate]);

    return { getId, openCharacterDetails, addToViewed };
};

export default useCharacterMethods;
