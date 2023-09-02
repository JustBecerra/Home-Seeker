"use client";

import createTheme from "@mui/material/styles/createTheme";

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 744,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: "#0d0c22",
      200: '#6e6d7a',
    },
  },
});
