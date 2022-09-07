import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";


export const Root: React.FC = () => {
    const { state } = useContext(AppContext);

    return <div >
        {state.theme}
    </div>;
};
