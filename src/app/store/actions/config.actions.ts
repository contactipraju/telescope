import { Action }  from '@ngrx/store';

import { IConfig } from '../../models/config.interface';

export enum EConfigActions {
  GetConfig        = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
  SetConfig        = '[Config] Set Config',
  SetConfigSuccess = '[Config] Set Config Success'
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
  constructor() {}
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: IConfig) {}
}

export class SetConfig implements Action {
  public readonly type = EConfigActions.SetConfig;
  constructor(public payload: number) {}
}

export class SetConfigSuccess implements Action {
  public readonly type = EConfigActions.SetConfigSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess | SetConfig | SetConfigSuccess;