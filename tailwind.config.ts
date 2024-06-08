/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cabinet-grotesk": ["Cabinet Grotesk", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        "ibm-mono": ['"IBM Plex Mono"', "monospace"],
      },
      colors: {
        brand: "#1866FF",
        brand_black: "#171717",
        gray: "#949494",
      },
      boxShadow: {
        "inner-custom-1": "inset 0px -4.2px 14px 0px rgba(199, 199, 199, 0.24)",
        "inner-custom-2": "inset 0px -4.2px 7px 0px #0656CE",
      },
    },
  },
  plugins: [],
};
