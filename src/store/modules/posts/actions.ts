import { createAsyncAction } from 'typesafe-actions'
import { Post } from './models'

const FETCH_REQUEST = 'posts/FETCH_REQUEST'
const FETCH_SUCCESS = 'posts/FETCH_SUCCESS'
const FETCH_FAILURE = 'posts/FETCH_FAILURE'

export const fetchPosts = createAsyncAction(FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE)<void, Post[], Error>()
