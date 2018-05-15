import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleFormComponent } from './title-form/title-form.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TitleFormComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
