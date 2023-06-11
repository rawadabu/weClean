import { Injectable, OnInit } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
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

  async addFeedback(feedback: Feedback): Promise<void> {
    const feedbacksCol = collection(db, 'feedbacks');
    await addDoc(feedbacksCol, feedback);
  }

  async userHasLeftFeedback(userId: string): Promise<boolean> {
    const feedbacksCol = collection(db, 'feedbacks');
    const q = query(feedbacksCol, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }

  ngOnInit(): void {}
}
