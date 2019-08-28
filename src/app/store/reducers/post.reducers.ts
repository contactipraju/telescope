import { PostActions, EPostActions }    from './../actions/post.actions';
import { initialPostState, IPostState } from '../state/post.state';

import { DateFormats } from '../../utils/date';
import { IPost }       from 'src/app/models/post.interface';

const processPosts = (posts: IPost[]) => {
  for(let i=0; i<posts.length; i++) {
    posts[i].datePosted  = new Date(posts[i].datePosted);
    posts[i].dateWritten = new Date(posts[i].dateWritten);

    posts[i].datePostedFormatted  = DateFormats.formattedDate(posts[i].datePosted);
    posts[i].dateWrittenFormatted = DateFormats.formattedDate(posts[i].dateWritten);
  }

  return posts;
}

const deletePost = (posts: IPost[], id:any) => {
  let newP: IPost[] = [];

  for(let i=0; i<posts.length; i++) {
    // TODO: no Backend Service available now, Delete first post..
    if(i) {
      newP.push(posts[i]);
    }
  }

  return newP;
}

export function postReducers(state = initialPostState, action: PostActions): IPostState {
  switch(action.type) {
    case EPostActions.GetPostsSuccess: {
      return {
        ...state,
        postList: processPosts(action.payload)
      };
    }

    case EPostActions.DeletePostSuccess: {
      return Object.assign({}, state, { posts: deletePost(state.postList, action.payload)});
    }

    default:
      return state;
  }
};