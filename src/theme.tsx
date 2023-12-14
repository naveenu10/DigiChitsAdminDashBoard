// theme.ts
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#007977",
          color: "white",
          alignItems: "center",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#007977",
          },
        },
      },
    },
  },
});

export default Theme;
