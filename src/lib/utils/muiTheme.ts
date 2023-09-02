"use client";

import { red } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module '@mui/material/styles' {


  interface Palette {
    Primary: Palette['primary'];
    Secondary: Palette['secondary'];
    Gray: Palette['grey'];
    Error: Palette['error'];
  }

  interface PaletteOptions {
    Primary: PaletteOptions['primary'];
    Secondary: PaletteOptions['secondary'];
    Gray: PaletteOptions['grey'];
    Error: PaletteOptions['error'];
  }


  interface Theme {
    typography?: {
      inter?: React.CSSProperties;
      lora?: React.CSSProperties;
    };
  }

  interface ThemeOptions {
    typography?:
    | TypographyOptions
    | ((palette: Palette) => TypographyOptions)
    | (undefined & {
      inter?: React.CSSProperties;
      lora?: React.CSSProperties;
    });
  }

  interface TypographyPropsVariantOverrides {
    inter: true;
    lora: true;
  }

  interface TypographyClasses {
    inter: string;
    lora: string;
  }

  interface TypographyVariantsOptions {
    inter: React.CSSProperties;
    lora: React.CSSProperties;
  }

  interface TypographyVariants {
    inter: React.CSSProperties;
    lora: React.CSSProperties;
  }
}

export const muiTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true
      },
    },
  },
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
    Primary: {
      "100": "#0d0c22",
      "200": "#050500",
      light: "#ffff",
    },
    Secondary: {
      "100": "#ffda7980",
    },
    Gray: {
      "300": "#6e6d7a"
    },
    Error: {
      "100": red[100]
    }
  },
  typography: {
    inter: {
      fontFamily: ['Inter', 'sans-serif'].join(' , '),
    },
    lora: {
      fontFamily: ['Lora', 'sans-serif'].join(' , '),
    },
  },
});
