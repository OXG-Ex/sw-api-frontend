import { Fade } from "react-reveal";
import { CharactersList } from "../Characters/CharactersList";

import { SearchBlock } from "../SearchBlock/SearchBlock";


export const Root: React.FC = () => {

    return <div>
        <Fade left >
            <SearchBlock />

        </Fade>
        <CharactersList />
    </div>;
};
