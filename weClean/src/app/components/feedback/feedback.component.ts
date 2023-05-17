import { Component } from '@angular/core';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  user: User = {
    id: '123123',
    firstName: 'Rawad',
    lastName: 'Abusaleh',
    email: 'rawad@gmail.com',
    description: 'Best financial decision ever!!',
    profilePicture:
      'https://images.squarespace-cdn.com/content/v1/5e6ece70bd2f8a6de8472818/714f685e-d0ba-40f9-8bb2-38722c1fd29c/Tiny+Avatar.png?format=1000w',
  };
}
