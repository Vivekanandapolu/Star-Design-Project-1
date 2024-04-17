import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { UIUXDesignComponent } from './ui-ux-design/ui-ux-design.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    redirectTo: 'UI/UX Design',
    children: [{
      path: 'UI/UX Design',
      component: UIUXDesignComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
