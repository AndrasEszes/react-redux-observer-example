import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { getType } from 'typesafe-actions'

import api from 'services/api'

import * as actions from './actions'
import { UsersAction } from './reducer'

export const fetchUsersFlow: Epic<UsersAction> = (action$) => {
  return action$.ofType(getType(actions.fetchUsers.request)).pipe(
    mergeMap(() => api.fetchUsers().pipe(
      map(actions.fetchUsers.success),
      catchError((error: Error) => of(actions.fetchUsers.failure(error))),
    )),
  )
}

