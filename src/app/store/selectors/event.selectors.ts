import { createSelector } from '@ngrx/store';

import { IAppState }      from '../state/app.state';
import { IEventState }    from '../state/event.state';

const selectEvents = (state: IAppState) => state.events;

export const selectEventList = createSelector(
  selectEvents,
  (state: IEventState) => state.events
);
