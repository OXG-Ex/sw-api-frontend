export enum ActionType {
    ADD_VIEWED_CHARACTER = 'ADD_VIEWED_CHARACTER',
    CHANGE_THEME = 'CHANGE_THEME',
    UPDATE_FIND_LIST = 'UPDATE_FIND_LIST',
    CLEAR_FIND_LIST = 'CLEAR_FIND_LIST',
    SET_IS_DATA_LOADING = 'SET_IS_DATA_LOADING'
}

export type Action<T = any> = {
    type: ActionType,
    payload: T;
};

