import { Action } from '@ngrx/store';

import { IEvent, ISeries } from '../../models/event.interface';

export enum EEventActions {
  GetEvents            = '[Event] Get Events',
  GetEventsSuccess     = '[Event] Get Events Success',
  CreateEvent          = '[Event] Create Event',
  CreateEventSuccess   = '[Event] Create Event Success',
  UpdateEvent          = '[Event] Update Event',
  UpdateEventSuccess   = '[Event] Update Event Success',
  DeleteEvent          = '[Event] Delete Event',
  DeleteEventSuccess   = '[Event] Delete Event Success'
}

export class GetEvents implements Action {
  public readonly type = EEventActions.GetEvents;
  constructor() {}
}

export class GetEventsSuccess implements Action {
  public readonly type = EEventActions.GetEventsSuccess;
  constructor(public payload: ISeries[]) {}
}

export class CreateEvent implements Action {
  public readonly type = EEventActions.CreateEvent;
  constructor(public payload: IEvent) {}
}

export class CreateEventSuccess implements Action {
  public readonly type = EEventActions.CreateEventSuccess;
  constructor(public payload: IEvent) {}
}

export class UpdateEvent implements Action {
  public readonly type = EEventActions.UpdateEvent;
  constructor(public payload: IEvent) {}
}

export class UpdateEventSuccess implements Action {
  public readonly type = EEventActions.UpdateEventSuccess;
  constructor(public payload: IEvent) {}
}

export class DeleteEvent implements Action {
  public readonly type = EEventActions.DeleteEvent;
  constructor(public payload: IEvent) {}
}

export class DeleteEventSuccess implements Action {
  public readonly type = EEventActions.DeleteEventSuccess;
  constructor(public payload: IEvent) {}
}

export type EventActions = GetEvents | GetEventsSuccess  | UpdateEvent | UpdateEventSuccess | CreateEvent | CreateEventSuccess | DeleteEvent | DeleteEventSuccess;