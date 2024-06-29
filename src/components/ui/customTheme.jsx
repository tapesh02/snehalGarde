import { createTheme } from "@mui/material/styles";

export const customTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#ef476f",
      },
      secondary: {
        main: "#e4c1cf",
        contrastText: "#a73262",
      },
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          outlinedSecondary: {
            borderColor: "#0D0D0D",
            color: "inherit",
          },
        },
      },
    },
  });
};

export default customTheme;
