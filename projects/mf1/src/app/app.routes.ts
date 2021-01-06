import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: AboutComponent, pathMatch: 'full'}
];