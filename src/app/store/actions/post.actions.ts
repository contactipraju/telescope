import { Action }  from '@ngrx/store';

import { IPost }   from '../../models/post.interface';

export enum EPostActions {
  GetPosts            = '[Post] Get Posts',
  GetPostsSuccess     = '[Post] Get Posts Success',
  CreatePost          = '[Post] Create Post',
  CreatePostSuccess   = '[Post] Create Post Success',
  UpdatePost          = '[Post] Update Post',
  UpdatePostSuccess   = '[Post] Update Post Success',
  DeletePost          = '[Post] Delete Post',
  DeletePostSuccess   = '[Post] Delete Post Success'
}

export class GetPosts implements Action {
  public readonly type = EPostActions.GetPosts;
  constructor() {}
}

export class GetPostsSuccess implements Action {
  public readonly type = EPostActions.GetPostsSuccess;
  constructor(public payload: IPost[]) {}
}

export class CreatePost implements Action {
  public readonly type = EPostActions.CreatePost;
  constructor(public payload: IPost) {}
}

export class CreatePostSuccess implements Action {
  public readonly type = EPostActions.CreatePostSuccess;
  constructor(public payload: IPost) {}
}

export class UpdatePost implements Action {
  public readonly type = EPostActions.UpdatePost;
  constructor(public payload: IPost) {}
}

export class UpdatePostSuccess implements Action {
  public readonly type = EPostActions.UpdatePostSuccess;
  constructor(public payload: IPost) {}
}

export class DeletePost implements Action {
  public readonly type = EPostActions.DeletePost;
  constructor(public payload: IPost) {}
}

export class DeletePostSuccess implements Action {
  public readonly type = EPostActions.DeletePostSuccess;
  constructor(public payload: IPost) {}
}

export type PostActions = GetPosts | GetPostsSuccess  | UpdatePost | UpdatePostSuccess | CreatePost | CreatePostSuccess | DeletePost | DeletePostSuccess;