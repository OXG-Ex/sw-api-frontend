import { TextField, useTheme } from "@mui/material";
import React, { useCallback } from "react";


export type SearchFieldProps = {
    onChangeCallback: (newValue: string) => void;
};

export const SearchField: React.FC<SearchFieldProps> = ({ onChangeCallback }) => {
    const theme = useTheme();

    const onValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeCallback(e.target.value);
    }, [onChangeCallback]);

    return <TextField id="search-character-field"
        label="Поиск персонажа"
        variant="filled"
        size="medium"
        sx={{ color: theme.palette.primary.main, boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}`, borderRadius: "4px" }}
        InputLabelProps={{ color: "info" }}
        onChange={onValueChange}
    />;
};
