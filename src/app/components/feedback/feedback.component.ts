import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/enviroments/enviroment';
import { Feedback } from '../../models/feedback.model';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  async loadFeedbacks(): Promise<void> {
    this.feedbacks = await this.feedbackService.getFeedbacks();
  }

  // Implementing slider feature, moving over feedbacks array
  // Implemented cyclic slider
  currentSlide = 0;

  nextSlide(): void {
    if (this.currentSlide < this.feedbacks.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Back to start
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.feedbacks.length - 1; // Go to end
    }
  }
}
