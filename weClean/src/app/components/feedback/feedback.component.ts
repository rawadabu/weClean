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
  };
}
