import { UserActions, EUserActions }    from './../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export function userReducers(state = initialUserState, action: UserActions): IUserState {
  switch(action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        userList: action.payload
      };
    }

    case EUserActions.SetSelectedUser: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }

    default:
      return state;
  }
};