import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LocalStoreComponent } from './local-store/local-store.component';
import { SearchLocalComponent } from './search-local/search-local.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LocalStoreComponent,
    SearchLocalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
