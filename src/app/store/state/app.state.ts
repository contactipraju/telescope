import { RouterReducerState } from '@ngrx/router-store';

import { IUserState,  initialUserState }  from './user.state';
import { IEventState, initialEventState } from './event.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  events: IEventState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  events: initialEventState
}

export function getInitialState(): IAppState {
  return initialAppState;
}