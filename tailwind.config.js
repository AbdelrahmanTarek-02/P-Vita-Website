const designTokens = require('./design-tokens.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/(pages)/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        secondary: designTokens.colors.secondary,
        accent: designTokens.colors.accent,
        surface: designTokens.colors.surface,
        'text-primary': designTokens.colors.text.primary,
        'text-secondary': designTokens.colors.text.secondary,
        'text-tertiary': designTokens.colors.text.tertiary,
      },
      spacing: designTokens.spacing,
      borderRadius: designTokens.radii,
      boxShadow: designTokens.shadows,
      fontSize: designTokens.typography.fontSize,
      lineHeight: designTokens.typography.lineHeight,
      fontWeight: designTokens.typography.fontWeight,
      transitionDuration: {
        micro: designTokens.durations.micro,
        short: designTokens.durations.short,
        medium: designTokens.durations.medium,
        long: designTokens.durations.long,
        'extra-long': designTokens.durations.extraLong,
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 280ms ease-out',
        'slide-up': 'slideUp 280ms ease-out',
      },
    },
    fontFamily: {
      sans: designTokens.typography.fontFamily.sans,
      mono: designTokens.typography.fontFamily.mono,
    },
    screens: {
      xs: designTokens.breakpoints.xs,
      sm: designTokens.breakpoints.sm,
      md: designTokens.breakpoints.md,
      lg: designTokens.breakpoints.lg,
      xl: designTokens.breakpoints.xl,
      '2xl': designTokens.breakpoints['2xl'],
    },
  },
  plugins: [],
};
