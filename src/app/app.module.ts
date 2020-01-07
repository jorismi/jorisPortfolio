import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WelcomeModule } from './welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import { PhotoModule } from './photo/photo.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,               
    WelcomeModule,
    SharedModule,
    PhotoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
