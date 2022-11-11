/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontSize: {
				xxs: ".625rem",
			},
			fontFamily: {
				display: ["Inter", "Anton"],
			},
			colors: {
				champagne: {
					yellow: "#EFF943",
					pink: "#f646b2",
					"deep-blue": "#16B5BC",
					"light-blue": "#27eef7",
					"lighter-blue": "#0deef7",
					"deep-gray": "#7c7c7c",
					"light-gray": "#a09f9f",
					"lighter-gray": "#eaeaea",
					green: "#7FFF10",
				},
			},
			transitionDuration: {
				0: "0ms",
				5000: "5000ms",
			},
			animation: {
				"gradient-x": "gradient-x 5s ease infinite",
				"gradient-x-1000": "gradient-x 1000ms ease infinite",
				"gradient-x-2000": "gradient-x 2000ms ease infinite",
				"gradient-y": "gradient-y 5s ease infinite",
				"gradient-xy": "gradient-xy 5s ease infinite",
				blob: "blob 7s linear infinite",
				widen: "widen 7s linear infinite",
			},
			keyframes: {
				"gradient-y": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "center top",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "center center",
					},
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				"gradient-xy": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.2)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
				widen: {
					"0%": {
						transform: "scale(1)",
					},
					"33%": {
						transform: "scale(1.1)",
					},
					"66%": {
						transform: "scale(0.9)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
			},
		},
	},
	variants: {
		extend: {
			scale: ["group-hover"],
			translate: ["group-hover"],
			animation: ["hover"],
			display: ["group-hover"],
		},
	},
	plugins: [require("@plaiceholder/tailwindcss")],
};
