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
        },
    },
    plugins: [],
};
export default config;
