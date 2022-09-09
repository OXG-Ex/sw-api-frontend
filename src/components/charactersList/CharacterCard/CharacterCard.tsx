import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Character } from "../../../models/Character";
import RouterPaths from "../../router/RoutePath";


export type CharacterCardProps = {
    character: Character;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }: CharacterCardProps) => {
    const navigate = useNavigate();

    const openCharacterDetails = useCallback(() => {
        navigate(RouterPaths.Character.replace(":id", character.url.split("/")[5]));
    }, [character.url, navigate]);

    return <Card sx={{ maxWidth: "550px" }} key={character.url} className="character-card">
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {character.name}
            </Typography>
            <Stack direction={"column"}>
                <Typography variant="body2" color="text.secondary">
                    Birth year: {character.birth_year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Gender: {character.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Skin color: {character.skin_color}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Mass: {character.mass}
                </Typography>
            </Stack>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={openCharacterDetails}>Open details</Button>
        </CardActions>
    </Card>;
};
