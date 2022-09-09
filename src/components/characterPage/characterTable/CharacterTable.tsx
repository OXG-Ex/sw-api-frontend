import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from "react";

import { Character } from "../../../models/Character";


export type CharacterTableProps = {
    character: Character;
};

export const CharacterTable: React.FC<CharacterTableProps> = ({ character }: CharacterTableProps) => {

    if (!character) {
        return <></>;
    }
    const columns: GridColDef[] = Object.keys(character).map(characterKey => {
        return {
            field: characterKey,
            headerName: characterKey,
            valueGetter: () => `${character[characterKey]}`,
        };
    });

    const rows = [{ id: 444, ...character }];

    return <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>;
};
