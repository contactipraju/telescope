import { EventActions, EEventActions }    from './../actions/event.actions';
import { initialEventState, IEventState } from '../state/event.state';

import { DateFormats } from '../../utils/date';
import { IEvent }      from 'src/app/models/event.interface';
import { ISeries }     from 'src/app/models/series.interface';

const processEvents = (events: ISeries[]) => {
  for(let i=0; i<events.length; i++) {
    events[i].startDate = new Date(events[i].startDate);
    events[i].endDate   = new Date(events[i].endDate);

    events[i].startDateFormatted = DateFormats.formattedDate(events[i].startDate);
    events[i].endDateFormatted   = DateFormats.formattedDate(events[i].endDate);

    for(let j=0; j<events[i].episodes.length; j++) {
      events[i].episodes[j].color     = events[i].color;

      events[i].episodes[j].startDate = new Date(events[i].episodes[j].startDate);
      events[i].episodes[j].endDate   = new Date(events[i].episodes[j].endDate);
  
      events[i].episodes[j].startDateFormatted = DateFormats.formattedDate(events[i].episodes[j].startDate);
      events[i].episodes[j].endDateFormatted   = DateFormats.formattedDate(events[i].episodes[j].endDate);
    }
  }

  return events;
}

const deleteEvent = (events: IEvent[], id:any) => {
  let newB:IEvent[] = [];

  for(let i=0; i<events.length; i++) {
    // TODO: no Backend Service available now, Delete first event..
    if(i) {
      newB.push(events[i]);
    }
  }

  return newB;
}

export function eventReducers(state = initialEventState, action: EventActions): IEventState {
  switch(action.type) {
    case EEventActions.GetEventsSuccess: {
      return {
        ...state,
        eventList: processEvents(action.payload)
      };
    }

    case EEventActions.DeleteEventSuccess: {
      return Object.assign({}, state, { events: deleteEvent(state.eventList, action.payload)});
    }

    default:
      return state;
  }
};