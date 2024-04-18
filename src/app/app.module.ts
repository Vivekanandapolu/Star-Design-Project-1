import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { CoursesModule } from './components/courses/courses.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PlacementsComponent } from './components/placements/placements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    AboutusComponent,
    PlacementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
