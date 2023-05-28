import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './components/description/description.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { contactusComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/enviroments/enviroment';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    AboutComponent,
    ServicesComponent,
    FeedbackComponent,
    contactusComponent,
    NavbarComponent,
    FooterComponent,
    SignupModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
