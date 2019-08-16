import { Injectable }              from '@angular/core';
import { Store, select }           from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { of }              from 'rxjs';
import { switchMap, map }  from 'rxjs/operators';

import { IAppState }       from '../state/app.state';
import { IEvent }          from '../../models/event.interface';
import { EventService }    from '../../services/event.service';

import {
  GetEvents,
  GetEventsSuccess,
  CreateEvent,
  CreateEventSuccess,
  UpdateEvent,
  UpdateEventSuccess,
  DeleteEvent,
  DeleteEventSuccess,
  EEventActions }          from '../actions/event.actions';

@Injectable()
export class EventEffects {

  @Effect()
  getEvents$ = this._actions$.pipe(
    ofType<GetEvents>(EEventActions.GetEvents),
    switchMap(() => this._eventService.getEvents()),
    switchMap((events: IEvent[]) => of(new GetEventsSuccess(events)))
  );

  @Effect()
  createEvent$ = this._actions$.pipe(
    ofType<CreateEvent>(EEventActions.CreateEvent),
    map(action => action.payload),
    switchMap((b: IEvent) => this._eventService.createEvent(b)),
    switchMap((event: IEvent) => {
      return of(new CreateEventSuccess(event));
    })
  );

  @Effect()
  updateEvent$ = this._actions$.pipe(
    ofType<UpdateEvent>(EEventActions.UpdateEvent),
    map(action => action.payload),
    switchMap((b: IEvent) => this._eventService.updateEvent(b)),
    switchMap((event: IEvent) => {
      return of(new UpdateEventSuccess(event));
    })
  );

  @Effect()
  deleteEvent$ = this._actions$.pipe(
    ofType<DeleteEvent>(EEventActions.DeleteEvent),
    map(action => action.payload),
    switchMap((e: IEvent) => this._eventService.deleteEvent(e)),
    switchMap((event: IEvent) => {
      return of(new DeleteEventSuccess(event));
    })
  );

  constructor(
    private _eventService: EventService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
