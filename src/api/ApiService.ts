import axios, { AxiosInstance, AxiosResponse } from "axios";

import { Character } from "../models/Character";
import { SearchCharacterResult } from "../models/SearchCharacterResult";

export interface IApiService {
    search(query: string): Promise<AxiosResponse<SearchCharacterResult>>;
    getCharcter(characterId: number | string): Promise<AxiosResponse<Character>>;
}

export class ApiService implements IApiService {
    private _axiosInstance: AxiosInstance;

    constructor() {
        const config = {
            baseURL: "https://swapi.dev/api/"
        };
        this._axiosInstance = axios.create(config);
    }

    search(query: string): Promise<AxiosResponse<SearchCharacterResult>> {
        return this._axiosInstance.get(`people/?search=${query}`);
    }

    getCharcter(characterId: string | number): Promise<AxiosResponse<Character>> {
        return this._axiosInstance.get(`people/${characterId}`);
    }

}
