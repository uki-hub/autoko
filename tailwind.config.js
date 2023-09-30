/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      asd: "display: none",
      colors: {
        primary: "#4c5885",
        primaryVariant: "#384061",
        secondary: "#5d6ba2",
        secondaryVariant: "#384061",
        surface: "#ffffff",
        background: "#bec4da",
        error: "#d32f2f",
        onPrimary: "#ffffff",
        onSecondary: "#ffffff",
        onSurface: "#000000",
        onBackground: "#ffffff",
        onError: "#ffffff",
        accentColor: "#5d6ba2",
        canvasColor: "#fafafa",
        scaffoldBackgroundColor: "#fafafa",
        bottomAppBarColor: "#ffffff",
        cardColor: "#ffffff",
        dividerColor: "#1f0000",
        highlightColor: "#66bcbc",
        splashColor: "#66c8c8",
        selectedRowColor: "#f5f5f5",
        unselectedWidgetColor: "#8a0000",
        disabledColor: "#610000",
        buttonColor: "#e0e0e0",
        toggleableActiveColor: "#4a5682",
        secondaryHeaderColor: "#eff0f6",
        textSelectionColor: "#bec4da",
        cursorColor: "#4285f4",
        textSelectionHandleColor: "#9ea6c7",
        backgroundColor: "#bec4da",
        dialogBackgroundColor: "#ffffff",
        indicatorColor: "#5d6ba2",
        hintColor: "#8a0000",
        textColorDisabled: "#a6a6a6",
      },
    },
    screens: {
      sm: { max: "1024px" },
      // sm: { max: "480px" },
      // md: { min: "480px", max: "1024px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
