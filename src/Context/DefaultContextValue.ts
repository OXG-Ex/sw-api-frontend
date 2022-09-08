import { Character } from "../models/Character";
import { Theme } from "../models/Theme";

export const DefaultContextValue = {
    theme: Theme.Dark,
    viewedCharacters: new Set() as Set<Character>,
    findList: null as Character[],
    isDataLoading: false
};

export type AppContextType = typeof DefaultContextValue;
