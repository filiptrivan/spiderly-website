import { InMemoryScrollingOptions, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { FAQComponent } from './pages/faq/faq.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'faq', component: FAQComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

export const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
