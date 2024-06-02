import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PlacementsComponent } from './components/placements/placements.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HireTalentComponent } from './components/hire-talent/hire-talent.component';
import { CustomPreloadingStrategy } from './shared/services-comp/custom-preloading-strategy';
// import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'Services',
    component: ServicesComponent,
    data: { title: 'Services' }
  },
  {
    path: 'Aboutus',
    component: AboutusComponent,
    data: { title: 'About Us' }
  },
  {
    path: 'Placements',
    component: PlacementsComponent,
    data: { title: 'Placements' }
  },
  {
    path: 'Contact-Us',
    component: ContactUsComponent,
    data: { title: 'Contact Us' }
  },
  {
    path: 'Hire-Talent',
    component: HireTalentComponent,
    data: { title: 'Hire Talent' }
  },
  {
    path: 'Courses',
    loadChildren: () => import("./components/courses/courses.module").then(m => m.CoursesModule),
    data: { title: 'Courses' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: CustomPreloadingStrategy,
      useHash: true
    })
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
