import { RouterReducerState } from '@ngrx/router-store';

import { IUserState,  initialUserState }  from './user.state';
import { IEventState, initialEventState } from './event.state';
import { IPostState,  initialPostState }  from './post.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  events: IEventState;
  posts: IPostState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  events: initialEventState,
  posts: initialPostState
}

export function getInitialState(): IAppState {
  return initialAppState;
}