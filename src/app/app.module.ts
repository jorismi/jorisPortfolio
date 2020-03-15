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
import { ProjectModule } from './project/project.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { experienceFilter } from './experiences/experiencesFilter.pipe';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    experienceFilter
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
    ProjectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
