import { Injectable }              from '@angular/core';
import { Store, select }           from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { of }              from 'rxjs';
import { switchMap, map }  from 'rxjs/operators';

import { IAppState }       from '../state/app.state';
import { IPost }           from '../../models/post.interface';
import { PostService }     from '../../services/post.service';

import {
  GetPosts,
  GetPostsSuccess,
  CreatePost,
  CreatePostSuccess,
  UpdatePost,
  UpdatePostSuccess,
  DeletePost,
  DeletePostSuccess,
  EPostActions }           from '../actions/post.actions';

@Injectable()
export class PostEffects {

  @Effect()
  getPosts$ = this._actions$.pipe(
    ofType<GetPosts>(EPostActions.GetPosts),
    switchMap(() => this._postService.getPosts()),
    switchMap((posts: IPost[]) => of(new GetPostsSuccess(posts)))
  );

  @Effect()
  createPost$ = this._actions$.pipe(
    ofType<CreatePost>(EPostActions.CreatePost),
    map(action => action.payload),
    switchMap((b: IPost) => this._postService.createPost(b)),
    switchMap((post: IPost) => {
      return of(new CreatePostSuccess(post));
    })
  );

  @Effect()
  updatePost$ = this._actions$.pipe(
    ofType<UpdatePost>(EPostActions.UpdatePost),
    map(action => action.payload),
    switchMap((b: IPost) => this._postService.updatePost(b)),
    switchMap((post: IPost) => {
      return of(new UpdatePostSuccess(post));
    })
  );

  @Effect()
  deletePost$ = this._actions$.pipe(
    ofType<DeletePost>(EPostActions.DeletePost),
    map(action => action.payload),
    switchMap((e: IPost) => this._postService.deletePost(e)),
    switchMap((post: IPost) => {
      return of(new DeletePostSuccess(post));
    })
  );

  constructor(
    private _postService: PostService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
