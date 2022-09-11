import React, { useCallback, useEffect, useMemo } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate, useParams } from "react-router-dom";

import { AppContext } from "../../Context/AppContext";
import { CharacterTable } from "./characterTable/CharacterTable";
import useCharacterAPI from "../../hooks/useCharacterAPI";
import RouterPaths from "../router/RoutePath";
import useCharacterMethods from "../../hooks/useCharacterMethods";
import { FloatingButton } from "../floatingButton/FloatingButton";

import "./CharacterPage.scss";

export const CharacterPage: React.FC = () => {
    const { state } = React.useContext(AppContext);
    const { id } = useParams();
    const { updateCharacter } = useCharacterAPI(id);
    const navigate = useNavigate();
    const character = useMemo(() => state.currentCharacter, [state.currentCharacter]);
    const { addToViewed } = useCharacterMethods(character);

    const goHome = useCallback(() => {
        addToViewed();
        navigate(RouterPaths.Root);
    }, [addToViewed, navigate]);

    useEffect(() => {
        updateCharacter();
    }, [updateCharacter]);

    return <div className="character-page-container">
        <FloatingButton onClick={goHome} tooltipText="Go to the root page" className="first" show={true} >
            <HomeIcon />
        </FloatingButton>
        <CharacterTable character={character} />
    </div>;
};
