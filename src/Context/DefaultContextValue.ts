import { Character } from "../models/Character";
import { emptySearchData } from "../models/SearchCharacterResult";
import { Theme } from "../models/Theme";

export const DefaultContextValue = {
    theme: Theme.Dark,
    viewedCharacters: [] as Character[],
    searchData: emptySearchData,
    isDataLoading: false,
    currentSearchValue: "",
    currentCharacter: null as Character
};

export type AppContextType = typeof DefaultContextValue;
