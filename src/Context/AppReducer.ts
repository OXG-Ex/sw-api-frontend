
import { Action, ActionType } from "../models/Actions";
import { AppContextType } from "./DefaultContextValue";


export const AppReducer = (state: AppContextType, action: Action): AppContextType => {
    switch (action.type) {
        case ActionType.ADD_VIEWED_CHARACTER: {
            return { ...state, viewedCharacters: new Set([...state.viewedCharacters, action.payload]) };
        }
        case ActionType.ADD_CACHED_CHARACTER: {
            return { ...state, cachedCharacters: new Set([...state.viewedCharacters, action.payload]) };
        }
        case ActionType.CHANGE_THEME: {
            return { ...state, theme: action.payload };
        }
        default: throw new Error('Unexpected action');
    }
};
