import { IImage } from './misc.interface';

export interface IUser {
  id: number;
  role?: string;
  email: string;
  profile?: IImage;
  country?: string;
  timezone?: string;
  firstname?: string;
  lastname?: string;
}
