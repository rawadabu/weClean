import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css'],
})
export class SignupModalComponent implements OnInit {
  @Input() isVisible = false;

  ngOnInit(): void {
    // Add any initialization logic here
  }
  @ViewChild('modal', { static: false }) modal!: ElementRef<any>;
  @ViewChild('overlay', { static: false }) overlay!: ElementRef<any>;

  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
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
    console.log('User:', this.user);

    // Add your logic here to handle the form submission, e.g., save the data to Firebase.

    // Close the modal after handling the form submission.
    this.closeModal();
  }
}
