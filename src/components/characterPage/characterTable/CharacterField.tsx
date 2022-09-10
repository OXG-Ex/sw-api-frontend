import { CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export type FieldProps = {
    keyName: string;
    value: string | string[];
};

export const CharacterField: React.FC<FieldProps> = ({ keyName, value }) => {
    const parsedValue = Array.isArray(value) ? value.toString().replaceAll(",", ", ") : value;

    return <CardContent>
        <Stack direction={"row"} gap={"10px"}>
            <Typography variant="body2" >
                {`${keyName}: `}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {parsedValue || "N/A"}
            </Typography>
        </Stack>
    </CardContent>;
};
