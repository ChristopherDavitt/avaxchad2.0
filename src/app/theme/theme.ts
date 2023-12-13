import { extendTheme } from '@mui/joy/styles';
import { inputClasses } from '@mui/joy/Input';

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#E84142',
          100: '#E84142',
          200: '#E84142',
          300: '#E84142',
          400: '#E84142',
          500: '#E84142',
          600: '#E84142',
          700: '#E84142',
          800: '#E84142',
          900: '#E84142',
          solidBg: 'var(--joy-palette-primary-600)',
          solidHoverBg: 'var(--joy-palette-primary-500)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#1D223F',
          100: '#0A318C',
          200: '#1347CC',
          300: '#1055EA',
          400: '#357AEA',
          500: '#2E88F6',
          600: '#50A1FF',
          700: '#7AB7FF',
          800: '#DCEBFE',
          900: '#F0F6FF',
          solidBg: 'var(--joy-palette-primary-700)',
          solidColor: 'var(--joy-palette-common-black)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
        background: {
          body: 'var(--joy-palette-common-black)',
          surface: 'var(--joy-palette-neutral-900)',
        },
      },
    },
  },
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' && {
            [`&:not(.${inputClasses.focused}):hover::before`]: {
              boxShadow: `inset 0 0 0 2px ${
                theme.vars.palette?.[ownerState.color!]?.outlinedBorder
              }`,
            },
          }),
        }),
        input: {
          caretColor: 'var(--Input-focusedHighlight)',
        },
      },
    },
  },
});
