import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import { usersReducer } from './modules/users'

const rootReducer = combineReducers({
  users: usersReducer,
})

export type RootState = StateType<typeof rootReducer>

export default rootReducer
