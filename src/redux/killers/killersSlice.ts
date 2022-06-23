import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

export type KillersState = {
	id: number;
	alias: string;
	name: string;
	enabled: boolean;
};

const initialState: KillersState[] = [
	{ id: 1, alias: "Trapper", name: "Evan MacMillan", enabled: true },
	{ id: 2, alias: "Wraith", name: "Philip Ojomo", enabled: true },
	{ id: 3, alias: "Hillbilly", name: "Max Thompson Jr.", enabled: true },
	{ id: 4, alias: "Nurse", name: "Sally Smithson", enabled: true },
	{ id: 5, alias: "Huntress", name: "Anna", enabled: true },
	{ id: 6, alias: "Shape", name: "Michael Myers", enabled: true },
	{ id: 7, alias: "Hag", name: "Lisa Sherwood", enabled: true },
	{ id: 8, alias: "Doctor", name: "Herman Carter", enabled: true },
	{ id: 9, alias: "Cannibal", name: "Bubba Sawyer", enabled: true },
	{ id: 10, alias: "Nightmare", name: "Freddy Krueger", enabled: true },
	{ id: 11, alias: "Pig", name: "Amanda Young", enabled: true },
	{ id: 12, alias: "Clown", name: "Jeffrey Hawk", enabled: true },
	{ id: 13, alias: "Spirit", name: "Rin Yamaoka", enabled: true },
	{ id: 14, alias: "Legion", name: "Frank, Julie, Susie, Joey", enabled: true },
	{ id: 15, alias: "Plague", name: "Adiris", enabled: true },
	{ id: 16, alias: "Ghost Face", name: "Danny Johnson", enabled: true },
	{ id: 17, alias: "Demogorgon", name: "", enabled: true },
	{ id: 18, alias: "Oni", name: "Kazan Yamaoka", enabled: true },
	{ id: 19, alias: "Deathslinger", name: "Caleb Quinn", enabled: true },
	{ id: 20, alias: "Executioner", name: "Pyramid Head", enabled: true },
	{ id: 21, alias: "Blight", name: "Talbot Grimes", enabled: true },
	{
		id: 22,
		alias: "Twins",
		name: "Charlotte & Victor Deshayes",
		enabled: true,
	},
	{ id: 23, alias: "Trickster", name: "Ji-Woon Hak", enabled: true },
	{ id: 24, alias: "Nemesis", name: "Nemesis T-Type", enabled: true },
	{ id: 25, alias: "Cenobite", name: "Elliot Spencer", enabled: true },
	{ id: 26, alias: "Artist", name: "Carmina Mora", enabled: true },
	{ id: 27, alias: "Onryō", name: "Sadako Yamamura", enabled: true },
	{ id: 28, alias: "Dredge", name: "", enabled: true },
];

const slice = createSlice({
	name: "killers",
	initialState,
	reducers: {
		disable: (state, { payload }: PayloadAction<string>) => {
			return state.map((killer) => {
				if (killer.alias === payload) {
					return { ...killer, enabled: false };
				}
				return killer;
			});
		},
		enable: (state, { payload }: PayloadAction<string>) => {
			return state.map((killer) => {
				if (killer.alias === payload) {
					return { ...killer, enabled: true };
				}
				return killer;
			});
		},
		disableAll: (state) => {
			return state.map((killer) => {
				return { ...killer, enabled: false };
			});
		},
		enableAll: (state) => {
			return state.map((killer) => {
				return { ...killer, enabled: true };
			});
		},
		set: (state, { payload }: PayloadAction<KillersState[]>) => {
			return payload;
		},
		toggle: (state, { payload }: PayloadAction<number>) => {
			return state.map((killer) => {
				if (killer.id === payload) {
					const enabled = killer.enabled ? false : true;
					return { ...killer, enabled: enabled };
				}
				return { ...killer };
			});
		},
	},
});

export const killersActions = {
	disable: createAction<string>("killers/disable"),
	enable: createAction<string>("killers/enable"),
	disableAll: createAction("killers/disableAll"),
	enableAll: createAction("killers/enableAll"),
	set: createAction<KillersState[]>("killers/set"),
	toggle: createAction<number>("killers/toggle"),
};

export default slice.reducer;
