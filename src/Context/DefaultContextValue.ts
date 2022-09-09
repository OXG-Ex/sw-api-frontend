import { Character } from "../models/Character";
import { Theme } from "../models/Theme";

export const DefaultContextValue = {
    theme: Theme.Dark,
    viewedCharacters: new Set() as Set<Character>,
    findList: [] as Character[],
    isDataLoading: false,
    currentCharacter: null as Character
};

export type AppContextType = typeof DefaultContextValue;
