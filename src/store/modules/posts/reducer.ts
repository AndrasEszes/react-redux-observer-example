import { Reducer } from 'redux'
import { ActionType, getType } from 'typesafe-actions'

import * as actions from './actions'
import { Post } from './models'

export type PostsAction = ActionType<typeof actions>

export interface PostsState {
  isLoading: boolean,
  error?: Error,
  posts: Post[],
}

const initialState: PostsState = {
  isLoading: false,
  posts: [],
}

const reducer: Reducer<PostsState, PostsAction> = (state = initialState, action) => {
  switch(action.type) {
    case getType(actions.fetchPosts.success):
      return { ...state, isLoading: false, error: undefined, posts: action.payload }
    case getType(actions.fetchPosts.failure):
      return { ...state, isLoading: false, error: action.payload }
    case getType(actions.fetchPosts.request):
      return { ...state, isLoading: true }
    default:
      return state
  }
}

export default reducer
