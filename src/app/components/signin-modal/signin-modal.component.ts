import {
  Component,
  ElementRef,
  Input,
  NgModule,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from 'src/app/models/user.model';
import { db } from 'src/enviroments/enviroment';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css'],
})
export class SigninModalComponent implements OnInit {
  ngOnInit(): void {}
  @Input() isVisible = false;
  @Output() switchModal: EventEmitter<string> = new EventEmitter();

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  @ViewChild('modal', { static: false }) modal!: ElementRef<any>;
  @ViewChild('overlay', { static: false }) overlay!: ElementRef<any>;

  openModal() {
    this.modal.nativeElement.classList.remove('hidden');
    this.overlay.nativeElement.classList.remove('hidden');
  }

  closeModal() {
    this.modal.nativeElement.classList.add('hidden');
    this.overlay.nativeElement.classList.add('hidden');
  }

  onSubmit() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((userCredential) => {
        // The user was authenticated successfully
        const user = userCredential.user;

        console.log('User:', user);

        // Reset the form
        this.user = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        };

        // Close the modal
        this.closeModal();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Show the error message to the user
        alert(errorMessage);
      });
  }
  switchToSignIn() {
    this.isVisible = false;
    this.switchModal.emit('signin');
  }

  switchToSignUp() {
    this.isVisible = false;
    this.switchModal.emit('signup');
  }
}
