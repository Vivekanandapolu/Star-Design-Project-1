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
    path: 'services',
    component: ServicesComponent,
    data: { title: 'ervices' }
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    data: { title: 'about us' }
  },
  {
    path: 'placements',
    component: PlacementsComponent,
    data: { title: 'placements' }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { title: 'contact us' }
  },
  {
    path: 'hire-talent',
    component: HireTalentComponent,
    data: { title: 'hire talent' }
  },
  {
    path: 'courses',
    loadChildren: () => import("./components/courses/courses.module").then(m => m.CoursesModule),
    data: { title: 'courses' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: CustomPreloadingStrategy
    })
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
