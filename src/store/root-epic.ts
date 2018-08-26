import { combineEpics } from 'redux-observable'

import { usersEpics } from './modules/users'

export default combineEpics(
  usersEpics.fetchUsersFlow,
)
