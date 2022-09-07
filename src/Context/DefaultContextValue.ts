import { Character } from "../models/Character";
import { Theme } from "../models/Theme";

export const DefaultContextValue = {
    theme: Theme.Dark,
    cachedCharacters: new Set() as Set<Character>,
    viewedCharacters: new Set() as Set<Character>,
    findList: [] as Character[]
};

export type AppContextType = typeof DefaultContextValue;
