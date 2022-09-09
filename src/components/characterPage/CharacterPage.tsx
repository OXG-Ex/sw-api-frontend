import React, { useEffect, useMemo } from "react";

import { AppContext } from "../../Context/AppContext";
import { CharacterTable } from "./characterTable/CharacterTable";
import { useParams } from "react-router-dom";
import useCharacterAPI from "../../hooks/useCharacterAPI";


export const CharacterPage: React.FC = () => {
    const { state } = React.useContext(AppContext);
    const { id } = useParams();
    const { updateCharacter } = useCharacterAPI(id);
    const character = useMemo(() => state.currentCharacter, [state.currentCharacter]);

    useEffect(() => {
        updateCharacter();
    }, [updateCharacter]);


    return <div style={{ position: "relative" }}>
        <CharacterTable character={character} />
    </div>;
};
