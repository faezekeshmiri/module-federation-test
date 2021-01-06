import { AboutModule } from './../../../mf1/src/app/about/about.module';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'contact',
      loadChildren: () => import('mf2/Module').then(m => m.ContactModule)
    },
    {
      path: 'about',
      loadChildren: () => import('mf1/Module').then(m => m.AboutModule)
    },
];