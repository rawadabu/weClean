import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css'],
})
export class SignupModalComponent implements OnInit, AfterViewInit {
  @Input() isVisible = false;

  @Output() switchModal: EventEmitter<string> = new EventEmitter();

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  @ViewChild('modal') modal!: ElementRef<any>;
  @ViewChild('overlay') overlay!: ElementRef<any>;

  ngOnInit(): void {
    // Add any initialization logic here
  }

  ngAfterViewInit(): void {
    this.openModal();
  }

  openModal() {
    if (this.modal && this.overlay) {
      this.modal.nativeElement.classList.remove('hidden');
      this.overlay.nativeElement.classList.remove('hidden');
    }
  }

  closeModal() {
    if (this.modal && this.overlay) {
      this.modal.nativeElement.classList.add('fade-out');
      this.overlay.nativeElement.classList.add('fade-out');

      setTimeout(() => {
        this.modal.nativeElement.classList.add('hidden');
        this.overlay.nativeElement.classList.add('hidden');

        // Reset the fade-out classes for future use
        this.modal.nativeElement.classList.remove('fade-out');
        this.overlay.nativeElement.classList.remove('fade-out');
      }, 600); // Adjust the timeout value to match your CSS transition duration
    }
  }

  onSubmit() {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then(async (userCredential) => {
        // The user account was created successfully
        const user = userCredential.user;

        console.log('User:', user);

        // Save the user data to Firestore
        const usersCollection = collection(db, 'users');
        const docRef = await addDoc(usersCollection, {
          id: user.uid, // use the uid from the auth user as the document ID
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
        });

        console.log('User saved to Firestore with ID:', docRef.id);
        // Reset the form
        this.user = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        };

        // Close the modal
        this.isVisible = false; // Set isVisible to false
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
