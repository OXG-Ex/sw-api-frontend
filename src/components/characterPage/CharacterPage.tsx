import React, { useCallback, useEffect, useMemo } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Fab } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-reveal";

import { AppContext } from "../../Context/AppContext";
import { CharacterTable } from "./characterTable/CharacterTable";
import useCharacterAPI from "../../hooks/useCharacterAPI";
import RouterPaths from "../router/RoutePath";
import { ActionType } from "../../models/Actions";


export const CharacterPage: React.FC = () => {
    const { state, changeState } = React.useContext(AppContext);
    const { id } = useParams();
    const { updateCharacter } = useCharacterAPI(id);
    const navigate = useNavigate();
    const character = useMemo(() => state.currentCharacter, [state.currentCharacter]);

    const toHome = useCallback(() => {
        changeState({ type: ActionType.ADD_VIEWED_CHARACTER, payload: character });
        navigate(RouterPaths.Root);
    }, [changeState, character, navigate]);

    useEffect(() => {
        updateCharacter();
    }, [updateCharacter]);

    return <div style={{ position: "relative" }}>
        <Fade left >
            <Fab size="small" color="info" aria-label="search" onClick={toHome}>
                <HomeIcon />
            </Fab>
        </Fade>
        <CharacterTable character={character} />
    </div>;
};
