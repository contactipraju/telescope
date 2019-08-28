import { ActionReducerMap } from '@ngrx/store';
import { routerReducer }    from '@ngrx/router-store';

import { IAppState }        from '../state/app.state';

import { eventReducers }    from './event.reducers';
import { postReducers }     from './post.reducers';
import { userReducers }     from './user.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  events: eventReducers,
  posts: postReducers,
  users: userReducers
};