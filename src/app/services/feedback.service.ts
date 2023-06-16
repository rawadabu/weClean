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
      let user: User = {
        firstName: element['user']?.firstName || '',
        lastName: element['user']?.lastName || '',
        email: element['user']?.email || '',
        password: element['user']?.password || '',
        description: element['user']?.description || '',
        profilePicture: element['user']?.profilePicture || '',
      };

      let feedback: Feedback = {
        id: element['id'],
        user: user,
        description: element['description'],
      };
      this.feedbacks.push(feedback);
    });
    return this.feedbacks;
  }

  async addFeedback(feedback: Feedback): Promise<void> {
    const feedbacksCol = collection(db, 'feedbacks');
    await addDoc(feedbacksCol, feedback);
  }

  async userHasLeftFeedback(user: User): Promise<boolean> {
    const feedbacksCol = collection(db, 'feedbacks');
    const q = query(
      feedbacksCol,
      where('user.email', '==', user.email) // Modify the check based on a unique identifier
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }
  ngOnInit(): void {}
}
