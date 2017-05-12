import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SlimScrollModule } from 'ng2-slimscroll';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppHomeComponent, pathMatch: 'full' }
    ]),
    SlimScrollModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  declarations: [ AppComponent, AppHomeComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}
