import { IEvent } from '../../models/event.interface';

export interface IEventState {
  events: IEvent[];
}

export const initialEventState: IEventState = {
  events: null
}
