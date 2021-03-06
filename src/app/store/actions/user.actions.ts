import { Action } from '@ngrx/store';

import { IUser }  from '../../models/user.interface';

export enum EUserActions {
  GetUsers        = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser         = '[User] Get User',
  GetUserSuccess  = '[User] Get User Success',
  SetSelectedUser = '[User] Set Selected User'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
  constructor() {}
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class SetSelectedUser implements Action {
  public readonly type = EUserActions.SetSelectedUser;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess | SetSelectedUser;