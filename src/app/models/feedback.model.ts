import { User } from './user.model';

export interface Feedback {
  id?: string; // this is the ID of the feedback, not the user
  user: User; // new property: ID of the user who left the feedback
  description?: string; // allow undefined values
}
