import { Component, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weClean';
  @Input() isVisible = false;
  @Input() isLoggedIn = false;
  isSignupVisible = false;
  isSigninVisible = false;
  isFeedbackVisible = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        this.isLoggedIn = true;
      } else {
        // User is signed out
        this.isLoggedIn = false;
      }
    });
  }

  scrollToTop(): void {
    // scroll to the top of the body
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  toggleModal(isModalVisible: boolean): void {
    if (isModalVisible) {
      // Choose the modal to be opened, for example:
      this.showSignUp();
    } else {
      this.isSignupVisible = false;
      this.isSigninVisible = false;
      this.isFeedbackVisible = false;
    }
  }

  showSignIn() {
    this.isSignupVisible = false;
    this.isSigninVisible = true;
    this.isFeedbackVisible = false;
  }

  showSignUp() {
    this.isSigninVisible = false;
    this.isFeedbackVisible = false;
    this.isSignupVisible = true;
  }

  showFeedback() {
    this.isSigninVisible = false;
    this.isSignupVisible = false;
    this.isFeedbackVisible = true;
  }

  handleSwitchModal(modal: string) {
    if (modal === 'signup') {
      this.showSignUp();
    }
    if (modal === 'signin') {
      this.showSignIn();
    }
    if (modal === 'feedback') {
      this.showFeedback();
    }
  }
}
