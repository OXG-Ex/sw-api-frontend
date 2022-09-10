import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import useCharacterMethods from "../../../hooks/useCharacterMethods";
import { Character } from "../../../models/Character";

export type ViewedCharacterItemProps = {
    character: Character;
};

export const ViewedCharacterItem: React.FC<ViewedCharacterItemProps> = ({ character }) => {
    const { openCharacterDetails } = useCharacterMethods(character);

    return <ListItem disablePadding>
        <ListItemButton onClick={openCharacterDetails}>
            <ListItemText primary={character.name} />
        </ListItemButton>
    </ListItem>;
};
