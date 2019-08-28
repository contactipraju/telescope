import { IPost } from '../../models/post.interface';

export interface IPostState {
  postList: IPost[];
}

export const initialPostState: IPostState = {
  postList: null
}
