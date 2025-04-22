import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import Aura from '@primeng/themes/aura';

import { providePrimeNG } from 'primeng/config';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DarkThemePreset } from '../assets/dark-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: DarkThemePreset,
        options: {
          darkModeSelector: '.dark'
        }
      }
    }),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    MessageService,
    ConfirmationService
  ]
};

