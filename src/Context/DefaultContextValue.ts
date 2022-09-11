import { Character } from "../models/Character";
import { Notification, NotificationType } from "../models/Notification";
import { emptySearchData } from "../models/SearchCharacterResult";
import { Theme } from "../models/Theme";

export const DefaultContextValue = {
    theme: Theme.Dark,
    viewedCharacters: [] as Character[],
    searchData: emptySearchData,
    isDataLoading: false,
    currentSearchValue: "",
    currentCharacter: null as Character,
    currentNotification: { messageText: "", messageColor: NotificationType.Success } as Notification
};

export type AppContextType = typeof DefaultContextValue;
