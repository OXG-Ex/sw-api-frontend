import { Character } from "./Character";
import { Theme } from "./Theme";

export enum ActionType {
    ADD_VIEWED_CHARACTER = 'ADD_VIEWED_CHARACTER',
    ADD_CACHED_CHARACTER = 'ADD_CACHED_CHARACTER',
    CHANGE_THEME = 'CHANGE_THEME',
    UPDATE_FIND_LIST = 'UPDATE_FIND_LIST',
    CLEAR_FIND_LIST = 'CLEAR_FIND_LIST'
}

type ActionCharacterPayload = {
    type: ActionType.ADD_VIEWED_CHARACTER | ActionType.ADD_CACHED_CHARACTER,
    payload: Character;
};

type ActionThemePayload = {
    type: ActionType.CHANGE_THEME,
    payload: Theme;
};

type ActionWithoutPayload = {
    type: ActionType.CLEAR_FIND_LIST;
};

export type Action = ActionCharacterPayload | ActionThemePayload | ActionWithoutPayload;
