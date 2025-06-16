import { InMemoryScrollingOptions, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'playground', loadComponent: () => import('./pages/playground/playground.component').then(m => m.PlaygroundComponent) },
  { path: 'faq', loadComponent: () => import('./pages/faq/faq.component').then(m => m.FAQComponent) },
  { path: 'docs/getting-started', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/add-new-entity', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/entity-authorization', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/ui-customization', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/attributes', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
  { path: '**', redirectTo: '404' }
];

export const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
