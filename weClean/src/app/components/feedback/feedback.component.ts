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
  user: User = {
    firstName: 'Rawad',
    lastName: 'Abusaleh',
    email: 'rawad@gmail.com',
    password: 'Hello',
    description: 'Best financial decision ever!!',
    profilePicture:
      'https://images.squarespace-cdn.com/content/v1/5e6ece70bd2f8a6de8472818/714f685e-d0ba-40f9-8bb2-38722c1fd29c/Tiny+Avatar.png?format=1000w',
  };
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  async loadFeedbacks(): Promise<void> {
    this.feedbacks = await this.feedbackService.getFeedbacks();
  }
}
