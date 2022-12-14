export enum ActionType {
    ADD_VIEWED_CHARACTER = 'ADD_VIEWED_CHARACTER',
    CHANGE_THEME = 'CHANGE_THEME',
    UPDATE_SEARCH_DATA = 'UPDATE_SEARCH_DATA',
    CLEAR_SEARCH_DATA = 'CLEAR_SEARCH_DATA',
    SET_IS_DATA_LOADING = 'SET_IS_DATA_LOADING',
    SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER',
    SET_CURRENT_SEARCH_VALUE = 'SET_CURRENT_SEARCH_VALUE',
    SET_CURRENT_NOTIFICATION = 'SET_CURRENT_NOTIFICATION',
    SET_NOTIFICATION_VISIBILITY = 'SET_NOTIFICATION_VISIBILITY'
}

export type Action<T = any> = {
    type: ActionType,
    payload: T;
};

