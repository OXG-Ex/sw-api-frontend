import { Fade } from "react-awesome-reveal";

import { SearchBlock } from "../SearchBlock/SearchBlock";


export const Root: React.FC = () => {

    return <Fade direction="left">
        <SearchBlock />
    </Fade>;
};
