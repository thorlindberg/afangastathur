// Types
interface spacingType {
  borderRadius: number;
  layoutPaddingH: number;
  containerPaddingV: number;
  cardMarginB: number;
}

interface typeSizesType {
  FONT_SIZE_SMALL: number;
  FONT_SIZE_MEDIUM: number;
  FONT_SIZE_LARGE: number;
  FONT_WEIGHT_LIGHT: number;
  FONT_WEIGHT_MEDIUM: number;
  FONT_WEIGHT_HEAVY: number;
}

export interface themeType {
  name: string;
  color: string;
  primaryColor: string;
  backgroundColor: string;
  cardBg: string;
  accentColor: string;
  error: string;
}

interface themesType {
  light: themeType;
  dark: themeType;
}

// Spacing:- Common margins and paddings
const spacing: spacingType = {
  borderRadius: 8,
  layoutPaddingH: 16,
  containerPaddingV: 10,
  cardMarginB: 16,
};

// Type Sizes:- Font sizes and weights
const typeSizes: typeSizesType = {
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
};

// Themes:- Can alter values here. Can only be consumed through Context (see useTheme.js file)
const themes: themesType = {
  light: {
    name: 'light',
    color: '#3D5A76',
    primaryColor: '#000000',
    backgroundColor: '#ffffff',
    cardBg: '#e0eeec',
    accentColor: '#02529C',
    error: '#DC1E35',
  },
  dark: {
    name: 'dark',
    color: '#ffffff',
    primaryColor: '#ffffff',
    backgroundColor: '#000000',
    cardBg: '#1e1e1e',
    accentColor: '#02529C',
    error: '#DC1E35',
  },
};

export {spacing, typeSizes, themes};
