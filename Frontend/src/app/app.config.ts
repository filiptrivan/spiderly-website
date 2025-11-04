import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, PLATFORM_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes, scrollConfig } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DarkThemePreset } from '../assets/dark-theme';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { environment } from '../environments/environment';
import { AuthBaseService, authInitializer, ConfigBaseService, httpLoadingInterceptor, jsonHttpInterceptor, jwtInterceptor, LayoutBaseService, SpiderlyErrorHandler, SpiderlyTranslocoLoader, TranslateLabelsAbstractService, unauthorizedInterceptor, ValidatorAbstractService } from 'spiderly';
import { DialogService } from "primeng/dynamicdialog";
import { provideTransloco } from '@jsverse/transloco';
import { AuthService } from './business/services/auth/auth.service';
import { LayoutService } from './business/services/layout/layout.service';
import { ConfigService } from './business/services/config.service';
import { ValidatorService } from './business/services/validators/validators';
import { TranslateLabelsService } from './business/services/translates/merge-labels';

export const appConfig: ApplicationConfig = {
  providers: [
    provideTransloco({
      config: {
        availableLangs: [
          'en', 'en.generated',
        ],
        defaultLang: 'en',
        fallbackLang: 'en.generated',
        failedRetries: 0,
        missingHandler: {
          useFallbackTranslation: true,
          logMissingKey: false,
        },
        reRenderOnLangChange: true,
      },
      loader: SpiderlyTranslocoLoader
    }),
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
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GoogleClientId,
              {
                scopes: 'email',
                oneTapEnabled: false,
                prompt: 'none',
              },
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    },
    MessageService,
    ConfirmationService,
    DialogService,
    {
      provide: ErrorHandler,
      useClass: SpiderlyErrorHandler,
    },
    {
      provide: ValidatorAbstractService,
      useClass: ValidatorService,
    },
    {
      provide: TranslateLabelsAbstractService,
      useClass: TranslateLabelsService,
    },
    
    {
      provide: AuthBaseService,
      useExisting: AuthService
    },
    {
      provide: LayoutBaseService,
      useExisting: LayoutService
    },
    {
      provide: ConfigBaseService,
      useExisting: ConfigService
    },
    {
      provide: APP_INITIALIZER,
      useFactory: authInitializer,
      multi: true,
      deps: [AuthService, PLATFORM_ID],
    },
    provideHttpClient(withInterceptors([
      httpLoadingInterceptor,
      jsonHttpInterceptor,
      jwtInterceptor,
      unauthorizedInterceptor,
    ]))
  ]
};