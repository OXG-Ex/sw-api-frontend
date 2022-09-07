import { createContext } from "react";
import { AppContextState } from "../models/AppContextState";

export const AppContext = createContext<Partial<AppContextState>>(null);
