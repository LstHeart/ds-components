import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ds-comps/alert';
import { ButtonModule } from 'ds-comps/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AlertModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
