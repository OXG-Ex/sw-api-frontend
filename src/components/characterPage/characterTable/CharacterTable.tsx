import { Card, Typography } from "@mui/material";
import React from "react";

import { Character } from "../../../models/Character";
import { CharacterField } from './CharacterField';


export type CharacterTableProps = {
    character: Character;
};

export const CharacterTable: React.FC<CharacterTableProps> = ({ character }: CharacterTableProps) => {

    if (!character) {
        return <></>;
    }

    const fieldset = Object.entries(character).map((entry, index) => {
        const [key, value] = entry;
        if (key === "name") {
            return <></>;
        }
        return <CharacterField keyName={key} value={value} />;
    });

    return <Card variant="outlined" sx={{ maxWidth: "550px" }}>
        <Typography variant="h5" component="div">
            {character.name}
        </Typography>
        {fieldset}

    </Card>;
};
