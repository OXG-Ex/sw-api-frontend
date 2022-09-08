import React, { useMemo } from "react";
import { Fade } from "react-reveal";
import { AppContext } from "../../Context/AppContext";

import { CharacterCard } from "./CharacterCard/CharacterCard";


export const CharactersList: React.FC = () => {
    const { state } = React.useContext(AppContext);

    const characterCards = useMemo(() => {
        if (!state.findList) {
            return [<></>];
        }
        return state.findList.map(
            character => <CharacterCard character={character} />
        );
    }, [state.findList]);

    return <Fade up when={characterCards.length > 0}>
        <div>
            {characterCards}
        </div>

    </Fade>;
};
