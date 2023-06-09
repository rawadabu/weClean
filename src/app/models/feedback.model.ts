import { User } from './user.model';

export interface Feedback {
  id: string;
  userId: string;
  description: string;
  user?: User;
}
