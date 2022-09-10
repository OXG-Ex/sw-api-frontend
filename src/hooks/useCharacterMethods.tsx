import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import RouterPaths from "../components/router/RoutePath";
import { Character } from "../models/Character";

const useCharacterMethods = (character: Character) => {
    const navigate = useNavigate();

    const getId = useCallback(() => character.url.split("/")[5], [character.url]);

    const openCharacterDetails = useCallback(() => navigate(RouterPaths.Character.replace(":id", getId())), [getId, navigate]);

    return { getId, openCharacterDetails };
};

export default useCharacterMethods;
