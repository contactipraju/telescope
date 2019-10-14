import { Injectable }              from '@angular/core';
import { Store, select }           from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { of, config }     from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { withLatestFrom } from 'rxjs/operators';

import { IConfig }        from '../../models/config.interface';
import { IAppState }      from '../state/app.state';
import { ConfigService }  from '../../services/config.service';
import { selectConfigObject } from '../selectors/config.selectors';

import {
  GetConfig,
  GetConfigSuccess,
  SetConfig,
  SetConfigSuccess,
  EConfigActions
} from '../actions/config.actions';

@Injectable()
export class ConfigEffects {

  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this._configService.getConfig()),
    switchMap((config: IConfig) => of(new GetConfigSuccess(config)))
  );

  @Effect()
  setConfig$ = this._actions$.pipe(
    ofType<SetConfig>(EConfigActions.SetConfig),
    map(action => action.payload),
    switchMap((config: IConfig) => this._configService.setConfig(config)),
    switchMap((config: IConfig) => of(new SetConfigSuccess(config)))
  );

  constructor(
    private _configService: ConfigService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
