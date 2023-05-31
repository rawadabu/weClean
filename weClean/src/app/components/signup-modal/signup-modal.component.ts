import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
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
export class SignupModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() switchModal: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    // Add any initialization logic here
  }
  @ViewChild('modal', { static: false }) modal!: ElementRef<any>;
  @ViewChild('overlay', { static: false }) overlay!: ElementRef<any>;

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

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

    createUserWithEmailAndPassword(auth, this.user.email, 'password')
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
