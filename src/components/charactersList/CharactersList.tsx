import { useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { Fade } from "react-reveal";

import { AppContext } from "../../Context/AppContext";
import { CharacterCard } from "./CharacterCard/CharacterCard";

import './CharactersList.scss';

export const CharactersList: React.FC = () => {
    const { state } = React.useContext(AppContext);
    const theme = useTheme();

    const characterCards = useMemo(() => {
        if (!state.findList) {
            return;
        }

        return state.findList.map(
            character => <CharacterCard character={character} key={character.name} />
        );
    }, [state.findList]);

    return <Fade up when={characterCards && characterCards.length > 0}>
        <div className="characters-list" style={{ boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}` }}>
            <div className="characters-scroll-container">
                {characterCards}
            </div>
        </div>

    </Fade>;
};
