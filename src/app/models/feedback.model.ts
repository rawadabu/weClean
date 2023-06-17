import { User } from './user.model';

export interface Feedback {
  user: User; // new property: ID of the user who left the feedback
  description?: string; // allow undefined values
}
