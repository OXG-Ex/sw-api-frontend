import { Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

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

    return <Fade up mountOnEnter appear>
        <div className="character-data" style={{ boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}` }}>
            <Typography variant="h5" component="div">
                {character.name}
            </Typography>
            <Card variant="elevation" >
                <div className="fields-scroll-container">
                    <CardContent className="fields-scroll-content">
                        <Stack direction={"column"} gap={"20px"} className="character-fields">
                            {fieldset}
                        </Stack>
                    </CardContent>
                </div>
            </Card>
        </div>
    </Fade>;
};
