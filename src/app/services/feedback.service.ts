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
import { getAuth } from 'firebase/auth';

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
      console.log('User email:', user.email);

      let feedback: Feedback = {
        user: user,
        description: element['description'],
      };
      this.feedbacks.push(feedback);
    });
    return this.feedbacks;
  }

  async addFeedback(feedback: Feedback): Promise<void> {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      const obj = {
        email: currentUser.email || '',
        user: {
          firstName: feedback.user.firstName,
          lastName: feedback.user.lastName,
          description: feedback.user.description,
          email: currentUser.email,
        },
      };

      const feedbackData = {
        user: obj.user,
        description: feedback.description,
      };

      const feedbacksCol = collection(db, 'feedbacks');
      await addDoc(feedbacksCol, feedbackData);
    } else {
      throw new Error('User is not authenticated.');
    }
  }

  async userHasLeftFeedback(): Promise<boolean> {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      const feedbacksCol = collection(db, 'feedbacks');
      const q = query(
        feedbacksCol,
        where('user.email', '==', currentUser.email)
      );
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } else {
      throw new Error('User is not authenticated.');
    }
  }
  ngOnInit(): void {}
}
