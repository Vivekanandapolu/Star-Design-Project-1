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
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomPreloadingStrategy } from './shared/services-comp/custom-preloading-strategy';


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
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
    // HeaderModule
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
