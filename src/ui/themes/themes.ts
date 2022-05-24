import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#333",
      main: "#3f51b5",
      dark: "#222",
    },
    text: {
      primary: "#fff",
      secondary: "#eee",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      main: "#FCA600",
    },
    success: {
      main: "#00D34D",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#3f51b5",
      dark: "#eee",
    },
    text: {
      primary: "#41414d",
      secondary: "#737380",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      main: "#FCA600",
    },
    success: {
      main: "#00D34D",
    },
  },
});

export { lightTheme, darkTheme };
