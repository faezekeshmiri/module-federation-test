import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
export const APP_ROUTES: Routes = [
    { path: '', component: ContactComponent, pathMatch: 'full'}
];