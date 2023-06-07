import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() featureSelected = new EventEmitter<string>();
  @Output() openModal: EventEmitter<void> = new EventEmitter();
  public isLoggedIn = false;

  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed. User:', user);
      this.isLoggedIn = !!user;
    });
  }

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

  public isModalVisible = false;
  toggleModal(): void {
    this.openModal.emit();
  }

  logOff() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out.');
        this.isLoggedIn = false;
      })
      .catch((error) => {
        // An error happened.
        console.log('Error signing out:', error);
      });
  }
}
