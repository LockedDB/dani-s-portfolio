export const colors = {
  accent: {
    DEFAULT: '#1C7C54',
    50: '#E6F7F0',
    100: '#CCF0E1',
    200: '#99E0C3',
    300: '#66D1A5',
    400: '#33C187',
    500: '#1C7C54',
    600: '#166343',
    700: '#114A32',
    800: '#0B3121',
    900: '#051911',
  },
  gray: {
    50: '#F9F9F9',
    100: '#F0F0F0',
    200: '#E1E1E1',
    300: '#D2D2D2',
    400: '#B4B4B4',
    500: '#959595',
    600: '#767676',
    700: '#575757',
    800: '#383838',
    900: '#272727',
    950: '#1A1A1A',
  },
  white: {
    DEFAULT: '#F7F7F2',
    50: '#FCFCFA',
    100: '#F9F9F5',
    200: '#F7F7F2',
    300: '#F2F2EA',
    400: '#EDEDDD',
    500: '#E8E8D0',
    600: '#D9D9BA',
    700: '#CACAA4',
    800: '#A8A882',
    900: '#86865F',
  },
} as const;

export const textColors = {
  // Primary text tokens
  primary: '#272727',      // Main text, headers
  secondary: '#767676',    // Secondary text, descriptions
  tertiary: '#B4B4B4',    // Subtle text, captions
  disabled: '#D2D2D2',    // Disabled state
  
  // Accent text tokens
  accent: '#1C7C54',       // Accent text, brand elements
  'accent-hover': '#166343', // Accent hover state
  
  // Interactive text tokens
  link: '#1C7C54',         // Links
  'link-hover': '#166343', // Link hover
  'link-visited': '#114A32', // Visited links
  
  // Status text tokens
  success: '#1C7C54',      // Success messages
  error: '#DC2626',        // Error messages
  warning: '#F59E0B',      // Warning messages
  info: '#3B82F6',         // Info messages
  
  // UI element text tokens
  'nav-primary': '#575757',     // Primary navigation
  'nav-secondary': '#767676',   // Secondary navigation
  'nav-active': '#272727',      // Active navigation item
  'nav-hover': '#272727',       // Navigation hover
  
  // Content text tokens
  'heading-primary': '#272727',    // Main headings (h1)
  'heading-secondary': '#383838',  // Secondary headings (h2-h3)
  'body': '#767676',              // Body text
  'caption': '#B4B4B4',          // Captions, small text
  'placeholder': '#D2D2D2',      // Form placeholders
} as const;

export const backgroundColors = {
  // Primary backgrounds
  primary: '#F7F7F2',      // Main background
  secondary: '#F9F9F5',    // Secondary background, cards
  tertiary: '#FCFCFA',     // Elevated surfaces
  
  // Interactive backgrounds
  hover: '#F2F2EA',        // Hover states
  pressed: '#EDEDDD',      // Pressed states
  selected: '#E6F7F0',     // Selected states
  
  // Border colors
  border: '#E1E1E1',       // Default borders
  'border-hover': '#D2D2D2', // Border hover
  'border-focus': '#1C7C54', // Focus borders
} as const;

export type ColorName = keyof typeof colors;
export type ColorShade = keyof typeof colors.accent;
export type TextColorName = keyof typeof textColors;
export type BackgroundColorName = keyof typeof backgroundColors;