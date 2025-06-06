import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes, scrollConfig } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DarkThemePreset } from '../assets/dark-theme';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    providePrimeNG({
      theme: {
        preset: DarkThemePreset,
        options: {
          darkModeSelector: '.dark'
        }
      }
    }),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        csharp: () => import('highlight.js/lib/languages/csharp'),
        ts: () => import('highlight.js/lib/languages/typescript'),
        sql: () => import('highlight.js/lib/languages/sql'),
      },
    }),
    provideRouter(
      routes,
      withInMemoryScrolling(scrollConfig),
    ), 
    provideClientHydration(withEventReplay()),
    MessageService,
    ConfirmationService
  ]
};

