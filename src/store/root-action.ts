import { PostsAction } from './modules/posts'
import { UsersAction } from './modules/users'

export type RootAction = UsersAction | PostsAction
