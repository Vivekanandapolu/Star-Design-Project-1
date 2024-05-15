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
    path: 'Contact-Us',
    component: ContactUsComponent
  },
  {
    path: 'Hire-Talent',
    component: HireTalentComponent
  },
  {
    path: 'Courses',
    loadChildren: () => import("./components/courses/courses.module").then(m => m.CoursesModule)
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
