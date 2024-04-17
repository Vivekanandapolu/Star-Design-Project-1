import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { UIUXDesignComponent } from './ui-ux-design/ui-ux-design.component';


@NgModule({
  declarations: [CoursesComponent, UIUXDesignComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
