import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlaygroundComponent } from './components/homepage/playground/playground.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'playground', component: PlaygroundComponent },
    { path: '**',    redirectTo: '' }
];
