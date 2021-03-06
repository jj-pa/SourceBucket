import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
      height: "32px",
      "&:focus": {
        outline: "none",
      },
    },
  },
  palette: {
    primary: {
      main: "#008255",
      hover: "#00B576",
    },
    secondary: {
      main: green[500],
    },
    white: "white",
  },
});

export default theme;
