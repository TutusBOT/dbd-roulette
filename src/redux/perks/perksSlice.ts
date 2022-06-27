import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

export type Role = "survivor" | "killer";

export type PerksState = {
	id: number;
	name: string;
	role: Role;
	enabled: boolean;
};

const initialState: PerksState[] = [
	{
		id: 1,
		name: "A Nurse's Calling",
		role: "killer",
		enabled: true,
	},
	{
		id: 2,
		name: "Agitation",
		role: "killer",
		enabled: true,
	},
	{
		id: 3,
		name: "Bamboozle",
		role: "killer",
		enabled: true,
	},
	{
		id: 4,
		name: "Barbecue and Chili",
		role: "killer",
		enabled: true,
	},
	{
		id: 5,
		name: "Beast of Prey",
		role: "killer",
		enabled: true,
	},
	{
		id: 6,
		name: "Bitter Murmur",
		role: "killer",
		enabled: true,
	},
	{
		id: 7,
		name: "Blood Warden",
		role: "killer",
		enabled: true,
	},
	{
		id: 8,
		name: "Bloodhound",
		role: "killer",
		enabled: true,
	},
	{
		id: 9,
		name: "Brutal Strength",
		role: "killer",
		enabled: true,
	},
	{
		id: 10,
		name: "Corrupt Intervention",
		role: "killer",
		enabled: true,
	},
	{
		id: 11,
		name: "Coulrophobia",
		role: "killer",
		enabled: true,
	},
	{
		id: 12,
		name: "Dark Devotion",
		role: "killer",
		enabled: true,
	},
	{
		id: 13,
		name: "Deerstalker",
		role: "killer",
		enabled: true,
	},
	{
		id: 14,
		name: "Discordance",
		role: "killer",
		enabled: true,
	},
	{
		id: 15,
		name: "Distressing",
		role: "killer",
		enabled: true,
	},
	{
		id: 16,
		name: "Dying Light",
		role: "killer",
		enabled: true,
	},
	{
		id: 17,
		name: "Enduring",
		role: "killer",
		enabled: true,
	},
	{
		id: 18,
		name: "Fire Up",
		role: "killer",
		enabled: true,
	},
	{
		id: 19,
		name: "Franklin's Demise",
		role: "killer",
		enabled: true,
	},
	{
		id: 20,
		name: "Hangman's Trick",
		role: "killer",
		enabled: true,
	},
	{
		id: 21,
		name: "Devour Hope",
		role: "killer",
		enabled: true,
	},
	{
		id: 22,
		name: "Haunted Ground",
		role: "killer",
		enabled: true,
	},
	{
		id: 23,
		name: "Huntress Lullaby",
		role: "killer",
		enabled: true,
	},
	{
		id: 24,
		name: "No One Escapes Death",
		role: "killer",
		enabled: true,
	},
	{
		id: 25,
		name: "Ruin",
		role: "killer",
		enabled: true,
	},
	{
		id: 26,
		name: "The Third Seal",
		role: "killer",
		enabled: true,
	},
	{
		id: 27,
		name: "Thrill of the hunt",
		role: "killer",
		enabled: true,
	},
	{
		id: 28,
		name: "Infectious Fright",
		role: "killer",
		enabled: true,
	},
	{
		id: 29,
		name: "Insidious",
		role: "killer",
		enabled: true,
	},
	{
		id: 30,
		name: "Iron Grasp",
		role: "killer",
		enabled: true,
	},
	{
		id: 31,
		name: "Iron Maiden",
		role: "killer",
		enabled: true,
	},
	{
		id: 32,
		name: "Knock Out",
		role: "killer",
		enabled: true,
	},
	{
		id: 33,
		name: "Lightborn",
		role: "killer",
		enabled: true,
	},
	{
		id: 34,
		name: "Mad Grit",
		role: "killer",
		enabled: true,
	},
	{
		id: 35,
		name: "Make your Choice",
		role: "killer",
		enabled: true,
	},
	{
		id: 36,
		name: "Monitor and Abuse",
		role: "killer",
		enabled: true,
	},
	{
		id: 37,
		name: "Monstrous Shrine",
		role: "killer",
		enabled: true,
	},
	{
		id: 38,
		name: "Overcharge",
		role: "killer",
		enabled: true,
	},
	{
		id: 39,
		name: "Overwhelming Presence",
		role: "killer",
		enabled: true,
	},
	{
		id: 40,
		name: "Play with your food",
		role: "killer",
		enabled: true,
	},
	{
		id: 41,
		name: "Pop Goes the Weasel",
		role: "killer",
		enabled: true,
	},
	{
		id: 42,
		name: "Predator",
		role: "killer",
		enabled: true,
	},
	{
		id: 43,
		name: "Rancor",
		role: "killer",
		enabled: true,
	},
	{
		id: 44,
		name: "Remember me",
		role: "killer",
		enabled: true,
	},
	{
		id: 45,
		name: "Save the best for last",
		role: "killer",
		enabled: true,
	},
	{
		id: 46,
		name: "Shadowborn",
		role: "killer",
		enabled: true,
	},
	{
		id: 47,
		name: "Sloppy Butcher",
		role: "killer",
		enabled: true,
	},
	{
		id: 48,
		name: "Spies From the Shadows",
		role: "killer",
		enabled: true,
	},
	{
		id: 49,
		name: "Spirit Fury",
		role: "killer",
		enabled: true,
	},
	{
		id: 50,
		name: "Stridor",
		role: "killer",
		enabled: true,
	},
	{
		id: 51,
		name: "Surveillance",
		role: "killer",
		enabled: true,
	},
	{
		id: 52,
		name: "Territorial Imperative",
		role: "killer",
		enabled: true,
	},
	{
		id: 53,
		name: "Thanatophobia",
		role: "killer",
		enabled: true,
	},
	{
		id: 54,
		name: "Tinkerer",
		role: "killer",
		enabled: true,
	},
	{
		id: 55,
		name: "Unnerving Presence",
		role: "killer",
		enabled: true,
	},
	{
		id: 56,
		name: "Unrelenting",
		role: "killer",
		enabled: true,
	},
	{
		id: 57,
		name: "Whispers",
		role: "killer",
		enabled: true,
	},
	{
		id: 58,
		name: "I'm All Ears",
		role: "killer",
		enabled: true,
	},
	{
		id: 59,
		name: "Thrilling Tremors",
		role: "killer",
		enabled: true,
	},
	{
		id: 60,
		name: "Furtive Chase",
		role: "killer",
		enabled: true,
	},
	{
		id: 61,
		name: "Claustrophobia",
		role: "killer",
		enabled: true,
	},
	{
		id: 62,
		name: "Fearmonger",
		role: "killer",
		enabled: true,
	},
	{
		id: 63,
		name: "Jolt",
		role: "killer",
		enabled: true,
	},
	{
		id: 64,
		name: "Blood echo",
		role: "killer",
		enabled: true,
	},
	{
		id: 65,
		name: "Nemesis",
		role: "killer",
		enabled: true,
	},
	{
		id: 66,
		name: "Zanshin tactics",
		role: "killer",
		enabled: true,
	},
	{
		id: 67,
		name: "Gearhead",
		role: "killer",
		enabled: true,
	},
	{
		id: 68,
		name: "Dead Man's Switch",
		role: "killer",
		enabled: true,
	},
	{
		id: 69,
		name: "Retribution",
		role: "killer",
		enabled: true,
	},
	{
		id: 70,
		name: "Forced Penance",
		role: "killer",
		enabled: true,
	},
	{
		id: 71,
		name: "Trail of Torment",
		role: "killer",
		enabled: true,
	},
	{
		id: 72,
		name: "Deathbound",
		role: "killer",
		enabled: true,
	},
	{
		id: 73,
		name: "Blood Favour",
		role: "killer",
		enabled: true,
	},
	{
		id: 74,
		name: "Undying",
		role: "killer",
		enabled: true,
	},
	{
		id: 75,
		name: "Dragon's Grip",
		role: "killer",
		enabled: true,
	},
	{
		id: 76,
		name: "Hoarder",
		role: "killer",
		enabled: true,
	},
	{
		id: 77,
		name: "Oppression",
		role: "killer",
		enabled: true,
	},
	{
		id: 78,
		name: "Coup De Grâce",
		role: "killer",
		enabled: true,
	},
	{
		id: 79,
		name: "Starstruck",
		role: "killer",
		enabled: true,
	},
	{
		id: 80,
		name: "Crowd Control",
		role: "killer",
		enabled: true,
	},
	{
		id: 81,
		name: "No way out",
		role: "killer",
		enabled: true,
	},
	{
		id: 82,
		name: "Eruption",
		role: "killer",
		enabled: true,
	},
	{
		id: 83,
		name: "Hysteria",
		role: "killer",
		enabled: true,
	},
	{
		id: 84,
		name: "Lethal Pursuer",
		role: "killer",
		enabled: true,
	},
	{
		id: 85,
		name: "Deadlock",
		role: "killer",
		enabled: true,
	},
	{
		id: 86,
		name: "Plaything",
		role: "killer",
		enabled: true,
	},
	{
		id: 87,
		name: "Gift of Pain",
		role: "killer",
		enabled: true,
	},
	{
		id: 88,
		name: "Grim embrace",
		role: "killer",
		enabled: true,
	},
	{
		id: 89,
		name: "Pentimento",
		role: "killer",
		enabled: true,
	},
	{
		id: 90,
		name: "Pain resonance",
		role: "killer",
		enabled: true,
	},
	{
		id: 91,
		name: "Call of brine",
		role: "killer",
		enabled: true,
	},
	{
		id: 92,
		name: "Floods of rage",
		role: "killer",
		enabled: true,
	},
	{
		id: 93,
		name: "Merciless Storm",
		role: "killer",
		enabled: true,
	},
	{
		id: 94,
		name: "Dissolution",
		role: "killer",
		enabled: true,
	},
	{
		id: 95,
		name: "Darkness revealed",
		role: "killer",
		enabled: true,
	},
	{
		id: 96,
		name: "Septic Touch",
		role: "killer",
		enabled: true,
	},
	{
		id: 97,
		name: "Shattered hope",
		role: "killer",
		enabled: true,
	},
];

const slice = createSlice({
	name: "perks",
	initialState,
	reducers: {
		disable: (state, { payload }: PayloadAction<string>) => {
			return state.map((perk) => {
				if (perk.name === payload) {
					return { ...perk, enabled: false };
				}
				return perk;
			});
		},
		enable: (state, { payload }: PayloadAction<string>) => {
			return state.map((perk) => {
				if (perk.name === payload) {
					return { ...perk, enabled: true };
				}
				return perk;
			});
		},
		disableAll: (state) => {
			return state.map((perk) => {
				return { ...perk, enabled: false };
			});
		},
		enableAll: (state) => {
			return state.map((perk) => {
				return { ...perk, enabled: true };
			});
		},
		set: (state, { payload }: PayloadAction<PerksState[]>) => {
			return payload;
		},
		toggle: (state, { payload }: PayloadAction<number>) => {
			return state.map((perk) => {
				if (perk.id === payload) {
					const enabled = perk.enabled ? false : true;
					return { ...perk, enabled: enabled };
				}
				return { ...perk };
			});
		},
	},
});

export const perksActions = {
	disable: createAction<string>("perks/disable"),
	enable: createAction<string>("perks/enable"),
	disableAll: createAction("perks/disableAll"),
	enableAll: createAction("perks/enableAll"),
	set: createAction<PerksState[]>("perks/set"),
	toggle: createAction<number>("perks/toggle"),
};

export default slice.reducer;
