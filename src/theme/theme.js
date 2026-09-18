import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#101114"
    },

    secondary: {
      main: "#e9ff3b"
    },

    background: {
      default: "#f6f7f9",
      paper: "#ffffff"
    },

    text: {
      primary: "#101114",
      secondary: "#686c75"
    }
  },

  typography: {
    fontFamily: [
      "IBM Plex Sans",
      "Inter",
      "Arial",
      "sans-serif"
    ].join(",")
  },

  shape: {
    borderRadius: 3
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 2
        }
      }
    }
  }
});

export default theme;