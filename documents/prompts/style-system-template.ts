// Template for creating the style system
// Copy this structure to /assets/styles/

// colors.ts
export const colors = {
  primary: {
    50: '#f0f9f4',
    100: '#dcf2e4',
    200: '#bce5cd',
    300: '#8dd1a8',
    400: '#5bb57d',
    500: '#51946c', // Main brand color
    600: '#3f7a56',
    700: '#346147',
    800: '#2c4e3a',
    900: '#254131',
  },
  secondary: {
    50: '#f8fbfa',
    100: '#f1f4f2',
    200: '#e8f2ec',
    300: '#d1e6d9',
    400: '#94e0b2', // Accent color
    500: '#6B8E23', // OliveDrab
    600: '#5a7a1e',
    700: '#4a651a',
    800: '#3d5316',
    900: '#334515',
  },
  // ... continue with neutral, success, warning, error, background, text, border
};

// typography.ts
export const typography = {
  fonts: {
    regular: 'Inter-Regular',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },
  sizes: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  // ... continue with lineHeights, weights, letterSpacing
};

// spacing.ts
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
  '7xl': 80,
  '8xl': 96,
};

// Usage example in components:
import { createStyles, theme, combineStyles } from '@/assets/styles';

const styles = createStyles({
  container: theme.components.container,
  title: {
    ...theme.textStyles.h1,
    color: theme.colors.text.primary,
  },
  button: combineStyles(
    theme.components.buttonPrimary,
    theme.layout.buttonPadding
  ),
});