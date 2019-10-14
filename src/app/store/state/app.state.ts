import { RouterReducerState } from '@ngrx/router-store';

import { IConfigState, initialConfigState } from './config.state';
import { IEventState,  initialEventState }  from './event.state';
import { IPostState,   initialPostState }   from './post.state';
import { IUserState,   initialUserState }   from './user.state';

export interface IAppState {
  router?: RouterReducerState;
  config:  IConfigState;
  events:  IEventState;
  posts:   IPostState;
  users:   IUserState;
}

export const initialAppState: IAppState = {
  config: initialConfigState,
  events: initialEventState,
  posts:  initialPostState,
  users:  initialUserState
}

export function getInitialState(): IAppState {
  return initialAppState;
}