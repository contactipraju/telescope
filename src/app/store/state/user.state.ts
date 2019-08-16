import { IUser } from '../../models/user.interface';

export interface IUserState {
  userList: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  userList: null,
  selectedUser: null
}
