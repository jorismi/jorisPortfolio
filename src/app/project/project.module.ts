import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class ProjectModule { }
