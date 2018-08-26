import { Reducer } from 'redux'
import { ActionType, getType } from 'typesafe-actions'

import * as actions from './actions'
import { User } from './models'

export type UsersAction = ActionType<typeof actions>

export interface UsersState {
  isLoading: boolean,
  error?: Error,
  users: User[],
}

const initialState: UsersState = {
  isLoading: false,
  users: [],
}

const reducer: Reducer<UsersState, UsersAction> = (state = initialState, action) => {
  switch(action.type) {
    case getType(actions.fetchUsers.success):
      return { ...state, isLoading: false, error: undefined, users: action.payload }
    case getType(actions.fetchUsers.failure):
      return { ...state, isLoading: false, error: action.payload }
    case getType(actions.fetchUsers.request):
      return { ...state, isLoading: true }
    default:
      return state
  }
}

export default reducer
