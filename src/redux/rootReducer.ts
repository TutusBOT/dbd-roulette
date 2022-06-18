import { combineReducers } from "@reduxjs/toolkit";
import realmsReducer from "./realms/realmsSlice";

export const rootReducer = combineReducers({
	realms: realmsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
