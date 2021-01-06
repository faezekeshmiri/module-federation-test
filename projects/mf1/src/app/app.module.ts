import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AboutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
