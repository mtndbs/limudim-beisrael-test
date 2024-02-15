const defaultTheme = require("tailwindcss/defaultTheme");

function rem2px(input, fontSize = 16) {
	if (input == null) {
		return input;
	}
	switch (typeof input) {
		case "object":
			if (Array.isArray(input)) {
				return input.map((val) => rem2px(val, fontSize));
			}
			const ret = {};
			for (const key in input) {
				ret[key] = rem2px(input[key], fontSize);
			}
			return ret;
		case "string":
			return input.replace(
				/(\d*\.?\d+)rem$/,
				(_, val) => `${parseFloat(val) * fontSize}px`
			);
		case "function":
			return eval(
				input
					.toString()
					.replace(
						/(\d*\.?\d+)rem/g,
						(_, val) => `${parseFloat(val) * fontSize}px`
					)
			);
		default:
			return input;
	}
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["../course.html", "../home-page.html"],
	theme: {
		...rem2px(defaultTheme),
		extend: {
			colors: { appBlue: { 500: "rgb(33, 99, 150)", 800: "#122F47" } },
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
