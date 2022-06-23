/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		backgroundImage: {
			macmillan: "url('../src/img/realms/macmillan.webp')",
			autohaven: "url('../src/img/realms/autohaven.webp')",
			coldwind: "url('../src/img/realms/coldwind.webp')",
		},
		extend: {
			colors: {
				red: "#CC0000",
			},
			transitionTimingFunction: {
				slot: "cubic-bezier(0.2, -0.1, 0.37, 1.1)",
			},
		},
	},
	plugins: [],
};
