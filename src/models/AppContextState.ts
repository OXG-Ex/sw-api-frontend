import { Dispatch } from "react";
import { AppContextType } from "../Context/DefaultContextValue";
import { Action } from "./Actions";

export type AppContextState = {
    state: AppContextType;
    changeState: Dispatch<Action>;
};
