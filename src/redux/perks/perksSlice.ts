import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

export type PerksState = {
	id: number;
	name: string;
	role: "survivor" | "killer";
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
	//   "45_shadowborn": "Shadowborn",
	//   "46_sloppyButcher": "Sloppy Butcher",
	//   "47_spiesFromTheShadows": "Spies From the Shadows",
	//   "48_spiritFury": "Spirit Fury",
	//   "49_stridor": "Stridor",
	//   "50_surveillance": "Surveillance",
	//   "51_territorialImperative": "Territorial Imperative",
	//   "52_thanatophobia": "Thanatophobia",
	//   "53_tinkerer": "Tinkerer",
	//   "54_unnervingPresence": "Unnerving Presence",
	//   "55_unrelenting": "Unrelenting",
	//   "56_whispers": "Whispers",
	//   "57_imAllEars": "I'm All Ears",
	//   "58_thrillingTremors": "Thrilling Tremors",
	//   "59_furtiveChase": "Furtive Chase",
	//   "60_cruelLimits": "Claustrophobia",
	//   "61_mindbreaker": "Fearmonger",
	//   "62_surge": "Jolt",
	//   "63_bloodEcho": "Blood echo",
	//   "64_nemesis": "Nemesis",
	//   "65_zanshinTactics": "Zanshin tactics",
	//   "66_gearhead": "Gearhead",
	//   "67_deadMansSwitch": "Dead Mans Switch",
	//   "68_hexRetribution": "Retribution",
	//   "69_forcedPenance": "Forced Penance",
	//   "70_trailOfTorment": "Trail of Torment",
	//   "71_deathbound": "Deathbound",
	//   "72_hexBloodFavour": "Blood Favour",
	//   "73_hexUndying": "Undying",
	//   "74_dragonsGrip": "Dragon's Grip",
	//   "75_hoarder": "Hoarder",
	//   "76_oppression": "Oppression",
	//   "77_coupDeGrace": "Coup De Grâce",
	//   "78_starstruck": "Starstruck",
	//   "79_hexCrowdControl": "Crowd Control",
	//   "80_noWayOut": "No way out",
	//   "81_eruption": "Eruption",
	//   "82_hysteria": "Hysteria",
	//   "83_lethalPursuer": "Lethal Pursuer",
	//   "84_deadlock": "Deadlock",
	//   "85_hexPlaything": "Plaything",
	//   "86_scourgeHookGiftOfPain": "Scourge Hook Gift Of Pain",
	//   "87_grimEmbrace": "Grim embrace",
	//   "88_pentimento": "Pentimento",
	//   "89_painResonance": "Pain resonance",
	//   "90_callOfBrine": "Call of brine",
	//   "91_floodOfRage": "Flood of rage",
	//   "92_mercilessStorm": "Merciless storm",
	//   "93_dissolution": "Dissolution",
	//   "94_darknessRevelated": "Darkness revealed",
	//   "95_septicTouch": "Septic touch",
	//   "96_boonDestroyer": "Shattered hope",
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

export const killersActions = {
	disable: createAction<string>("killers/disable"),
	enable: createAction<string>("killers/enable"),
	disableAll: createAction("killers/disableAll"),
	enableAll: createAction("killers/enableAll"),
	set: createAction<PerksState[]>("killers/set"),
	toggle: createAction<number>("killers/toggle"),
};

export default slice.reducer;
