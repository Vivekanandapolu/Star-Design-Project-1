import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component'; import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PlacementsComponent } from './components/placements/placements.component';
// import { HeaderModule } from './shared/header/header.module';
import { HeaderComponent } from './shared/header/header.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HireTalentComponent } from './components/hire-talent/hire-talent.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    AboutusComponent,
    PlacementsComponent,
    ContactUsComponent,
    HireTalentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HeaderModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
