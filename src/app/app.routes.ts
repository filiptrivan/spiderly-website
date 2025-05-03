import { InMemoryScrollingOptions, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { FAQComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'faq', component: FAQComponent },
  { path: '**', redirectTo: '' },
];

export const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
