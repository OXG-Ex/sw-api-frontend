import { Paper } from "@mui/material";
import { SearchField } from "./searchField/SearchField";

import './SearchBlock.scss';

export const SearchBlock: React.FC = () => {

    return <Paper className="search-block-container" elevation={10}>
        <SearchField />
    </Paper>;
};
