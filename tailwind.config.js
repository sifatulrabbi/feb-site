import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			animation: {
				gradient: "gradient 8s linear infinite",
				"text-gradient": "text-gradient 1.5s linear infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",

			},
			colors: {
				"color-1": "hsl(var(--color-1))",
				"color-2": "hsl(var(--color-2))",
				"color-3": "hsl(var(--color-3))",
				"color-4": "hsl(var(--color-4))",
				"color-5": "hsl(var(--color-5))",
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			keyframes: {
				"shine-pulse": {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				},
				gradient: {
					to: {
						"background-position": "200% center",
					},
				},
				"text-gradient": {
					to: {
						backgroundPosition: "200% center",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},

				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
				"aurora-border": {
					"0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
					"25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
					"50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
					"75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
				},
				"aurora-1": {
					"0%, 100%": { top: "0", right: "0" },
					"50%": { top: "50%", right: "25%" },
					"75%": { top: "25%", right: "50%" },
				},
				"aurora-2": {
					"0%, 100%": { top: "0", left: "0" },
					"60%": { top: "75%", left: "25%" },
					"85%": { top: "50%", left: "50%" },
				},
				"aurora-3": {
					"0%, 100%": { bottom: "0", left: "0" },
					"40%": { bottom: "50%", left: "25%" },
					"65%": { bottom: "25%", left: "50%" },
				},
				"aurora-4": {
					"0%, 100%": { bottom: "0", right: "0" },
					"50%": { bottom: "25%", right: "40%" },
					"90%": { bottom: "50%", right: "25%" },
				},
			},


			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},

		}
	},
};

export default config;
