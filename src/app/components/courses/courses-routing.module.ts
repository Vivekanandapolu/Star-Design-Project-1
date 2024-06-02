import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { UIUXDesignComponent } from './ui-ux-design/ui-ux-design.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { BachelorDesignComponent } from './bachelor-design/bachelor-design.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ArVrUxDesignComponent } from './ar-vr-ux-design/ar-vr-ux-design.component';
import { UiViDesignComponent } from './ui-vi-design/ui-vi-design.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'UI-UX-Design',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'UI-UX-Design',
        component: UIUXDesignComponent,
        data: { title: 'UI/UX Design' }
      },
      {
        path: 'UI-VI-Design',
        component: UiViDesignComponent,
        data: { title: 'UI/VI Design' }
      },
      {
        path: 'AR-VR-UX-Design',
        component: ArVrUxDesignComponent,
        data: { title: 'AR/VR UX Design' }
      },
      {
        path: 'Product-Management',
        component: ProductManagementComponent,
        data: { title: 'Product Management' }
      },
      {
        path: 'Bachelor-of-Design',
        component: BachelorDesignComponent,
        data: { title: 'Bachelor of Design' }
      },
      {
        path: 'Graphic-Design',
        component: GraphicDesignComponent,
        data: { title: 'Graphic Design' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
