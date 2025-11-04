import { InMemoryScrollingOptions, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthGuard } from 'spiderly';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'faq', loadComponent: () => import('./pages/faq/faq.component').then(m => m.FAQComponent) },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent) },
  {
    path: 'users',
    loadComponent: () => import('./pages/user/user-list.component').then(c => c.UserListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'users/:id',
    loadComponent: () => import('./pages/user/user-details.component').then(c => c.UserDetailsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'transactions',
    loadComponent: () => import('./pages/transaction/transaction-list.component').then(c => c.TransactionListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'subscriptions',
    loadComponent: () => import('./pages/user-subscription/user-subscription-list.component').then(c => c.UserSubscriptionListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'subscriptions/:id',
    loadComponent: () => import('./pages/user-subscription/user-subscription-details.component').then(c => c.UserSubscriptionDetailsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'successful-payment',
    loadComponent: () => import('./pages/successful-payment/successful-payment.component').then(c => c.SuccessfulPaymentComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'administration/roles',
    loadComponent: () => import('./pages/role/role-list.component').then(c => c.RoleListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'administration/roles/:id',
    loadComponent: () => import('./pages/role/role-details.component').then(c => c.RoleDetailsComponent),
    canActivate: [AuthGuard],
  },
  { path: 'docs/getting-started', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/add-new-entity', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/entity-validation', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/entity-authorization', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/ui-customization', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/translate-spiderly-app', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: 'docs/attributes', loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent) },
  { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
  { path: '**', redirectTo: '404' }
];

export const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
