import { combineReducers } from "@reduxjs/toolkit";
import realmsReducer from "./realms/realmsSlice";
import killersReducer from "./killers/killersSlice";
import perksReducer from "./perks/perksSlice";

export const rootReducer = combineReducers({
	realms: realmsReducer,
	killers: killersReducer,
	perks: perksReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
