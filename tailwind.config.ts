import type { Config } from 'tailwindcss';
import { colors, textColors, backgroundColors } from './src/styles/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base color scales
        accent: colors.accent,
        gray: colors.gray,
        white: colors.white,
        
        // Semantic text colors
        text: {
          primary: textColors.primary,
          secondary: textColors.secondary,
          tertiary: textColors.tertiary,
          disabled: textColors.disabled,
          accent: textColors.accent,
          'accent-hover': textColors['accent-hover'],
          link: textColors.link,
          'link-hover': textColors['link-hover'],
          'link-visited': textColors['link-visited'],
          success: textColors.success,
          error: textColors.error,
          warning: textColors.warning,
          info: textColors.info,
          'nav-primary': textColors['nav-primary'],
          'nav-secondary': textColors['nav-secondary'],
          'nav-active': textColors['nav-active'],
          'nav-hover': textColors['nav-hover'],
          'heading-primary': textColors['heading-primary'],
          'heading-secondary': textColors['heading-secondary'],
          body: textColors.body,
          caption: textColors.caption,
          placeholder: textColors.placeholder,
        },
        
        // Semantic background colors
        bg: {
          primary: backgroundColors.primary,
          secondary: backgroundColors.secondary,
          tertiary: backgroundColors.tertiary,
          hover: backgroundColors.hover,
          pressed: backgroundColors.pressed,
          selected: backgroundColors.selected,
        },
        
        // Border colors
        border: {
          DEFAULT: backgroundColors.border,
          hover: backgroundColors['border-hover'],
          focus: backgroundColors['border-focus'],
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;