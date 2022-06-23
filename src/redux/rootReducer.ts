import { combineReducers } from "@reduxjs/toolkit";
import realmsReducer from "./realms/realmsSlice";
import killersReducer from "./killers/killersSlice";

export const rootReducer = combineReducers({
	realms: realmsReducer,
	killers: killersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
