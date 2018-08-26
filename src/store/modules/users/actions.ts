import { createAsyncAction } from 'typesafe-actions'
import { User } from './models'

const FETCH_REQUEST = 'users/FETCH_REQUEST'
const FETCH_SUCCESS = 'users/FETCH_SUCCESS'
const FETCH_FAILURE = 'users/FETCH_FAILURE'

export const fetchUsers = createAsyncAction(FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE)<void, User[], Error>()
