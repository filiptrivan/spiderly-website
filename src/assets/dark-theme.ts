import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

export const DarkThemePreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      dark: {
        surface: {
          0: '#e5e7eb',
          // 50: '',
          // 100: '',
          // 200: '',
          // 300: '',
          // 400: '',
          // 500: '',
          // 600: '',
          // 700: '',
          // 800: '',
          // 900: '',
          // 950: '',
        },
        primary: {
          50: '{pink.50}',
          100: '{pink.100}',
          200: '{pink.200}',
          300: '{pink.300}',
          400: '{pink.400}',
          500: '{pink.500}',
          600: '{pink.600}',
          700: '{pink.700}',
          800: '{pink.800}',
          900: '{pink.900}',
          950: '{pink.950}',
          color: '{pink.600}',
          contrastColor: '{surface.0}',
          hoverColor: '{pink.500}',
          activeColor: '{pink.400}',
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        dark: {
          root: {
            // paddingX: '40px'
          },
        },
      },
    },
    panel: {
      colorScheme: {
        dark: {
          root: {
            background: '{surface.800}',
            header: {
              background: '{surface.900}',
            },
          },
        },
      },
    },
  },
});
