import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

export type RealmsState = {
	id: number;
	name: string;
	enabled: boolean;
	type: string;
};
const initialState: RealmsState[] = [
	{ id: 1, name: "Coal Tower", enabled: true, type: "The MacMillan Estate" },
	{
		id: 2,
		name: "Groaning Storehouse",
		enabled: true,
		type: "The MacMillan Estate",
	},
	{
		id: 3,
		name: "Ironworks of Misery",
		enabled: true,
		type: "The MacMillan Estate",
	},
	{
		id: 4,
		name: "Shelter Woods",
		enabled: true,
		type: "The MacMillan Estate",
	},
	{
		id: 5,
		name: "Suffocation Pit",
		enabled: true,
		type: "The MacMillan Estate",
	},
	{
		id: 6,
		name: "Azarov's Resting Place",
		enabled: true,
		type: "Autohaven Wreckers",
	},
	{ id: 7, name: "Blood Lodge", enabled: true, type: "Autohaven Wreckers" },
	{ id: 8, name: "Gas Heaven", enabled: true, type: "Autohaven Wreckers" },
	{
		id: 9,
		name: "Wreckers' Yard",
		enabled: true,
		type: "Autohaven Wreckers",
	},
	{
		id: 10,
		name: "Wretched Shop",
		enabled: true,
		type: "Autohaven Wreckers",
	},
	{ id: 11, name: "Fractured Cowshed", enabled: true, type: "Coldwind Farm" },
	{ id: 12, name: "Rancid Abattoir", enabled: true, type: "Coldwind Farm" },
	{ id: 13, name: "Rotten Fields", enabled: true, type: "Coldwind Farm" },
	{
		id: 14,
		name: "The Thompson House",
		enabled: true,
		type: "Coldwind Farm",
	},
	{ id: 15, name: "Torment Creek", enabled: true, type: "Coldwind Farm" },
	{
		id: 16,
		name: "Disturbed Ward",
		enabled: true,
		type: "Crotus Prenn Asylum",
	},
	{
		id: 17,
		name: "Father Campbell's Chapel",
		enabled: true,
		type: "Crotus Prenn Asylum",
	},
	{ id: 18, name: "Lampkin Lane", enabled: true, type: "Haddonfield" },
	{ id: 19, name: "The Pale Rose", enabled: true, type: "Backwater Swamp" },
	{ id: 20, name: "Grim Pantry", enabled: true, type: "Backwater Swamp" },
	{
		id: 21,
		name: "Treatment Theatre",
		enabled: true,
		type: "Léry's Memorial Institute",
	},
	{ id: 22, name: "Mother's Dwelling", enabled: true, type: "Red Forest" },
	{
		id: 23,
		name: "The Temple of Purgation",
		enabled: true,
		type: "Red Forest",
	},
	{ id: 24, name: "Badham Preschool I", enabled: true, type: "Springwood" },
	{ id: 25, name: "Badham Preschool II", enabled: true, type: "Springwood" },
	{ id: 26, name: "Badham Preschool III", enabled: true, type: "Springwood" },
	{ id: 27, name: "Badham Preschool IV", enabled: true, type: "Springwood" },
	{ id: 28, name: "Badham Preschool V", enabled: true, type: "Springwood" },
	{ id: 29, name: "The Game", enabled: true, type: "Gideon Meat Plant" },
	{ id: 30, name: "Family Residence", enabled: true, type: "Yamaoka Estate" },
	{ id: 31, name: "Sanctum of Wrath", enabled: true, type: "Yamaoka Estate" },
	{ id: 32, name: "Mount Ormond Resort", enabled: true, type: "Ormond" },
	{
		id: 33,
		name: "Dead Dawg Saloon",
		enabled: true,
		type: "Grave of Glenvale",
	},
	{
		id: 34,
		name: "Midwich Elementary School",
		enabled: true,
		type: "Silent Hill",
	},
	{
		id: 35,
		name: "Raccoon City Police Station",
		enabled: true,
		type: "Raccoon City",
	},
	{
		id: 36,
		name: "Eyrie of Crows",
		enabled: true,
		type: "Forsaken Boneyard",
	},
	{ id: 37, name: "Garden of Joy", enabled: true, type: "Withered Isle" },
];

const slice = createSlice({
	name: "realms",
	initialState,
	reducers: {
		disable: (state, { payload }: PayloadAction<string>) => {
			return state.map((realm) => {
				if (realm.name === payload) {
					return { ...realm, enabled: false };
				}
				return realm;
			});
		},
		enable: (state, { payload }: PayloadAction<string>) => {
			return state.map((realm) => {
				if (realm.name === payload) {
					return { ...realm, enabled: true };
				}
				return realm;
			});
		},
		disableAll: (state) => {
			return state.map((realm) => {
				return { ...realm, enabled: false };
			});
		},
		enableAll: (state) => {
			return state.map((realm) => {
				return { ...realm, enabled: true };
			});
		},
		set: (state, { payload }: PayloadAction<RealmsState[]>) => {
			return payload;
		},
		disableByType: (state, { payload }: PayloadAction<string>) => {
			return state.map((realm) => {
				if (realm.name === payload) {
					return { ...realm, enabled: false };
				}
				return { ...realm };
			});
		},
		enableByType: (state, { payload }: PayloadAction<string>) => {
			return state.map((realm) => {
				if (realm.name === payload) {
					return { ...realm, enabled: true };
				}
				return { ...realm };
			});
		},
		toggle: (state, { payload }: PayloadAction<number>) => {
			return state.map((realm) => {
				if (realm.id === payload) {
					const enabled = realm.enabled ? false : true;
					return { ...realm, enabled: enabled };
				}
				return { ...realm };
			});
		},
	},
});

export const realmsActions = {
	disable: createAction<string>("realms/disable"),
	enable: createAction<string>("realms/enable"),
	disableAll: createAction("realms/disableAll"),
	enableAll: createAction("realms/enableAll"),
	disableByType: createAction<string>("realms/disableByType"),
	enableByType: createAction<string>("realms/enableByType"),
	set: createAction<RealmsState[]>("realms/set"),
	toggle: createAction<number>("realms/toggle"),
};

export default slice.reducer;
