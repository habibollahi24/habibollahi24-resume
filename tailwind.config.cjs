/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            dark: {
               300: "#203346",
               500: "#1b344d",
               900: "#0e2338",
            },
         },
      },
   },
   plugins: [],
};
