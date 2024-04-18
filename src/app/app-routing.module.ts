import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PlacementsComponent } from './components/placements/placements.component';
// import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Services',
    component: ServicesComponent
  },
  {
    path: 'Aboutus',
    component: AboutusComponent
  },
  {
    path: 'Placements',
    component: PlacementsComponent
  },
  {
    path: 'Courses',
    loadChildren: () => import("./components/courses/courses.module").then(m => m.CoursesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
