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
    redirectTo: 'ui-ux-design',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'ui-ux-design',
        component: UIUXDesignComponent,
        data: { title: 'ui-ux-design' }
      },
      {
        path: 'ui-vi-design',
        component: UiViDesignComponent,
        data: { title: 'ui-vi-design' }
      },
      {
        path: 'ar-vr-ux-design',
        component: ArVrUxDesignComponent,
        data: { title: 'ar-vr-ux-design' }
      },
      {
        path: 'product-management',
        component: ProductManagementComponent,
        data: { title: 'product-management' }
      },
      {
        path: 'bachelor-of-design',
        component: BachelorDesignComponent,
        data: { title: 'bachelor-of-design' }
      },
      {
        path: 'graphic-design',
        component: GraphicDesignComponent,
        data: { title: 'graphic-design' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
