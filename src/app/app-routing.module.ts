import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PhotoComponent } from './photo/photo.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about/about.component';

const routes: Routes = [
  { path: 'photo', component: PhotoComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
