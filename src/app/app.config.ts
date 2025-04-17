import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

const MyPreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{pink.100}',
          100: '{pink.200}',
          200: '{pink.300}',
          300: '{pink.400}',
          400: '{pink.500}',
          500: '{pink.600}',
          600: '{pink.700}',
          700: '{pink.800}',
          800: '{pink.900}',
          900: '{pink.950}',
          950: '{pink.950}'
      },
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
      }
    }),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
  ]
};

