import { createSelector } from '@ngrx/store';

import { IAppState }      from '../state/app.state';
import { IPostState }     from '../state/post.state';

const selectPosts = (state: IAppState) => state.posts;

export const selectPostList = createSelector(
  selectPosts,
  (state: IPostState) => state.postList
);
