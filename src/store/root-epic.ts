import { combineEpics } from 'redux-observable'

import { postsEpics } from './modules/posts'
import { usersEpics } from './modules/users'

export default combineEpics(
  usersEpics.fetchUsersFlow,
  postsEpics.fetchPostsFlow,
)
