import { TextField, useTheme } from "@mui/material";

export const SearchField: React.FC = () => {
    const theme = useTheme();

    return <TextField id="search-character-field"
        label="Поиск персонажа"
        variant="filled"
        size="medium"
        sx={{ color: theme.palette.primary.main, boxShadow: `0px 0px 7px 4px ${theme.palette.primary.main}`, borderRadius: "4px" }}
        InputLabelProps={{ color: "info" }}
    />;
};
