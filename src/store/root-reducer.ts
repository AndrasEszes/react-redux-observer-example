import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import { postsReducer } from './modules/posts'
import { usersReducer } from './modules/users'

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
})

export type RootState = StateType<typeof rootReducer>

export default rootReducer
