import { Injectable, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../enviroments/enviroment';
import { Feedback } from '../models/feedback.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  feedbacks!: Feedback[];
  constructor() {}

  async getFeedbacks() {
    this.feedbacks = [];

    // Get feedbacks data
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
        user: user,
        description: element['user']?.description || '',
      };
      this.feedbacks.push(feedback);
    });

    return this.feedbacks;
  }

  async addFeedback(user: User): Promise<void> {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      const obj = {
        email: currentUser.email || '',
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          description: user.description,
        },
      };

      const feedbackData = {
        user: obj.user,
        description: obj.user.description,
      };

      const feedbacksCol = collection(db, 'feedbacks');
      await addDoc(feedbacksCol, feedbackData);
    } else {
      throw new Error('User is not authenticated.');
    }
  }

  async userHasLeftFeedback(user: User): Promise<boolean> {
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
}
