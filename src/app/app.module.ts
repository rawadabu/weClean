import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ServicesComponent } from './components/my-services/services.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { contactusComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/enviroments/enviroment';
import { SigninModalComponent } from './components/signin-modal/signin-modal.component';
import { FeedbackModalComponent } from './components/feedback-modal/feedback-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HowItWorksComponent,
    ServicesComponent,
    FeedbackComponent,
    contactusComponent,
    NavbarComponent,
    FooterComponent,
    SignupModalComponent,
    SigninModalComponent,
    FeedbackModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
