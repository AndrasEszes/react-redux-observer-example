import * as postsActions from './actions'
import * as postsEpics from './epics'
import * as postsModels from './models'
import postsReducer, { PostsAction, PostsState } from './reducer'

export {
  postsEpics,
  postsModels,
  postsActions,
  postsReducer,
  PostsAction,
  PostsState,
}
