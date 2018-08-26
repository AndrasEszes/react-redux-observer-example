import { Epic } from 'redux-observable'
import { forkJoin, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { getType } from 'typesafe-actions'

import api from 'services/api'

import * as actions from './actions'
import { PostsAction } from './reducer'

export const fetchPostsFlow: Epic<PostsAction> = (action$) => {
  return action$.ofType(getType(actions.fetchPosts.request)).pipe(
    mergeMap(() => api.fetchPosts().pipe(
      mergeMap((posts) => forkJoin(
        posts.map((post) => of(post).pipe(
          mergeMap(() => api.fetchCommentsOfPost(post.id).pipe(
            map((comments) => ({...post, comments})),
          )),
        )),
      ).pipe(
        map(actions.fetchPosts.success),
        catchError((error: Error) => of(actions.fetchPosts.failure(error))),
      )),
    )),
  )
}
