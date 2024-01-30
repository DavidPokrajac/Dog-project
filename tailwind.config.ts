import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            gridTemplateColumns: {
                "1": "repeat(auto-fit, minmax(250px, 1fr))",
                "2": "repeat(auto-fit, minmax(350px, 1fr))",
            },
            boxShadow: {
                md: "0 5px 7px 0 rgba(0 0 0 / 0.5)",
            },
            animation: {
                wiggle: "wiggle 0.25s ease-in-out 1 normal forwards",
                wiggleBack: "wiggleBack 0.25s ease-in-out 1 normal forwards",
            },
            keyframes: {
                wiggle: {
                    "0%": { bottom: "0", color: "transparent" },
                    "100%": { bottom: "-32px", color: "rgb(154 52 18)" },
                },
                wiggleBack: {
                    "0%": {
                        bottom: "-32px",
                        color: "rgb(154 52 18)",
                        visibility: "hidden",
                    },
                    "100%": {
                        bottom: "0",
                        color: "transparent",
                        visibility: "visible",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
