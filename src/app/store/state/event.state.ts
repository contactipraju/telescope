import { IEvent } from '../../models/event.interface';

export interface IEventState {
  eventList: IEvent[];
}

export const initialEventState: IEventState = {
  eventList: null
}
