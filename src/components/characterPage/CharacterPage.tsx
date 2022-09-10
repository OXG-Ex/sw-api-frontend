import React, { useCallback, useEffect, useMemo } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Fab } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-reveal";

import { AppContext } from "../../Context/AppContext";
import { CharacterTable } from "./characterTable/CharacterTable";
import useCharacterAPI from "../../hooks/useCharacterAPI";
import RouterPaths from "../router/RoutePath";
import useCharacterMethods from "../../hooks/useCharacterMethods";


export const CharacterPage: React.FC = () => {
    const { state } = React.useContext(AppContext);
    const { id } = useParams();
    const { updateCharacter } = useCharacterAPI(id);
    const navigate = useNavigate();
    const character = useMemo(() => state.currentCharacter, [state.currentCharacter]);
    const { addToViewed } = useCharacterMethods(character);

    const toHome = useCallback(() => {
        addToViewed();
        navigate(RouterPaths.Root);
    }, [addToViewed, navigate]);

    useEffect(() => {
        updateCharacter();
    }, [updateCharacter]);

    return <div className="character-page-container">
        <Fade left appear>
            <Fab size="small" color="info" aria-label="search" onClick={toHome} className="left-button first">
                <HomeIcon />
            </Fab>
        </Fade>
        <CharacterTable character={character} />
    </div>;
};
