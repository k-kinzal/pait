import { ThemeOptions } from "@mui/system";

export type Color =
	| "primary"
	| "secondary"
	| "grey"
	| "error"
	| "warning"
	| "info"
	| "success";
export type Variation =
	| "50"
	| "100"
	| "200"
	| "300"
	| "400"
	| "500"
	| "600"
	| "700"
	| "800"
	| "900";

export const themeLightPalette: ThemeOptions["palette"] = {
	mode: "light",
	contrastThreshold: 3,
	tonalOffset: 0.2,
	primary: {
		main: "#9945ff",
	},
	secondary: {
		main: "#14f195",
	},
	grey: {
		"50": "#fafafa",
		"100": "#f5f5f5",
		"200": "#eeeeee",
		"300": "#e0e0e0",
		"400": "#bdbdbd",
		"500": "#9e9e9e",
		"600": "#757575",
		"700": "#616161",
		"800": "#424242",
		"900": "#212121",
	},
	info: {
		main: "#16D2fc",
	},
	success: {
		main: "#8ded21",
	},
	warning: {
		main: "#ffe716",
	},
	error: {
		main: "#ff7530",
	},
	background: {
		default: "#fafafa",
	},
	text: {
		primary: "#212121",
		secondary: "#616161",
		disabled: "#9e9e9e",
	},
};

export const themeDarkPalette: ThemeOptions["palette"] = {
	mode: "dark",
	contrastThreshold: 3,
	tonalOffset: 0.2,
	primary: {
		main: "#9945ff",
	},
	secondary: {
		main: "#14f195",
	},
	grey: {
		"50": "#fafafa",
		"100": "#f5f5f5",
		"200": "#eeeeee",
		"300": "#e0e0e0",
		"400": "#bdbdbd",
		"500": "#9e9e9e",
		"600": "#757575",
		"700": "#616161",
		"800": "#424242",
		"900": "#212121",
	},
	info: {
		main: "#16D2fc",
	},
	success: {
		main: "#8ded21",
	},
	warning: {
		main: "#ffe716",
	},
	error: {
		main: "#ff7530",
	},
	background: {
		default: "#212121",
	},
	text: {
		primary: "#fafafa",
		secondary: "#eeeeee",
		disabled: "#bdbdbd",
	},
};
