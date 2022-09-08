import { Character } from "./Character";

export type SearchCharacterResult = {
    count: number,
    next: string, //url
    previous: string, //url
    results: Character[];
};
