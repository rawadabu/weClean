import { Injectable, OnInit } from '@angular/core';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../enviroments/enviroment';
import { User } from '../models/user.model';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService implements OnInit {
  feedbacks!: Feedback[];

  constructor() {}

  async getFeedbacks() {
    this.feedbacks = [];

    // get feedbacks data
    const feedbacksCol = collection(db, 'feedbacks');
    const feedbackSnapshot = await getDocs(feedbacksCol);
    const feedbackList = feedbackSnapshot.docs.map((doc) => doc.data());

    feedbackList.map((element) => {
      let feedback: Feedback = {
        id: element['firstname'],
        userId: element['lastname'],
        description: element['description'],
        // user: <User>userSnapshot.data(),
      };
      this.feedbacks.push(feedback);
    });
    return this.feedbacks;
  }

  ngOnInit(): void {}
}
