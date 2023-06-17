import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css'],
})
export class FeedbackModalComponent implements OnInit {
  feedbacks: Feedback[] = [];
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {}

  @Input() isVisible = false;
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
    if (this.user.description) {
      // Check if the user has already left feedback
      this.feedbackService
        .userHasLeftFeedback(this.user)
        .then((hasLeftFeedback) => {
          if (hasLeftFeedback) {
            // User has already left feedback
            alert('You have already left feedback.');
          } else {
            // User has not left feedback, proceed to add feedback
            const feedback: Feedback = {
              user: this.user,
              description: this.user.description,
            };

            this.feedbackService
              .addFeedback(feedback)
              .then(() => {
                // Feedback added successfully
                alert('Feedback added successfully.');
                this.closeModal();
              })
              .catch((error) => {
                // An error occurred while adding the feedback
                alert('Failed to add feedback.');
                console.error(error);
              });
          }
        })
        .catch((error) => {
          // An error occurred while checking feedback
          alert('Failed to check feedback.');
          console.error(error);
        });
    }
  }
}
