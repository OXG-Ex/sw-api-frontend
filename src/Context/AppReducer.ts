
import { Action, ActionType } from "../models/Actions";
import { emptySearchData } from "../models/SearchCharacterResult";
import { AppContextType } from "./DefaultContextValue";


export const AppReducer = (state: AppContextType, action: Action): AppContextType => {
    switch (action.type) {
        case ActionType.ADD_VIEWED_CHARACTER: {
            return { ...state, viewedCharacters: new Set([...state.viewedCharacters, ...action.payload]) };
        }
        case ActionType.UPDATE_SEARCH_DATA: {
            return { ...state, searchData: action.payload };
        }
        case ActionType.CHANGE_THEME: {
            return { ...state, theme: action.payload };
        }
        case ActionType.SET_IS_DATA_LOADING: {
            return { ...state, isDataLoading: action.payload };
        }
        case ActionType.CLEAR_SEARCH_DATA: {
            return { ...state, searchData: emptySearchData };
        }
        case ActionType.SET_CURRENT_CHARACTER: {
            return { ...state, currentCharacter: action.payload };
        }
        case ActionType.SET_CURRENT_SEARCH_VALUE: {
            return { ...state, currentSearchValue: action.payload };
        }
        default: throw new Error('Unexpected action');
    }
};

