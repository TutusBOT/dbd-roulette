import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

type RealmsState = {
	realms: { name: string; enabled: boolean }[];
};

const initialState: RealmsState = {
	realms: [
		{ name: "Coal Tower", enabled: true },
		{ name: "Groaning Storehouse", enabled: true },
		{ name: "Ironworks of Misery", enabled: true },
		{ name: "Shelter Woods", enabled: true },
		{ name: "Suffocation Pit", enabled: true },
		{ name: "Mother's Dwelling", enabled: true },
		{ name: "The Temple of Purgation", enabled: true },
	],
};

const slice = createSlice({
	name: "realms",
	initialState,
	reducers: {
		disable: (state, { payload }: PayloadAction<string>) => {
			state.realms = state.realms.map((realm) => {
				if (realm.name === payload) {
					return { ...realm, enabled: false };
				}
				return realm;
			});
		},
		enable: (state, { payload }: PayloadAction<string>) => {
			state.realms = state.realms.map((realm) => {
				if (realm.name === payload) {
					return { ...realm, enabled: true };
				}
				return realm;
			});
		},
		disableAll: (state) => {
			state.realms = state.realms.map((realm) => {
				return { ...realm, enabled: false };
			});
		},
		enableAll: (state) => {
			state.realms = state.realms.map((realm) => {
				return { ...realm, enabled: true };
			});
		},
		set: (state, { payload }: PayloadAction<RealmsState>) => {
			return payload;
		},
	},
});

export const realmsActions = {
	disable: createAction<string>("realms/disable"),
	enable: createAction("realms/enable"),
	disableAll: createAction("realms/disableAll"),
	enableAll: createAction("realms/enableAll"),
	set: createAction<RealmsState>("realms/set"),
};

export default slice.reducer;
