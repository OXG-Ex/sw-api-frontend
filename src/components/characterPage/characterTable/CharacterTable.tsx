import { Card, Typography, useTheme } from "@mui/material";
import React from "react";

import { Character } from "../../../models/Character";
import { CharacterField } from './CharacterField';

import "./CharacterTable.scss";

export type CharacterTableProps = {
    character: Character;
};

export const CharacterTable: React.FC<CharacterTableProps> = ({ character }: CharacterTableProps) => {
    const theme = useTheme();
    if (!character) {
        return <React.Fragment key={"NoCharacters"}></React.Fragment>;
    }

    const fieldset = Object.entries(character).map((entry) => {
        const [key, value] = entry;
        if (key === "name") {
            return <React.Fragment key={"NameField"}></React.Fragment>;;
        }
        return <CharacterField keyName={key} value={value} />;
    });

    return <div className="character-data" style={{ boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}` }}>
        <Typography variant="h5" component="div">
            {character.name}
        </Typography>
        <Card variant="elevation" >
            <div className="fields-scroll-container">
                {fieldset}
            </div>
        </Card>
    </div>;
};
