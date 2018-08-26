import { Observable,  } from 'rxjs'
import { ajax } from 'rxjs/ajax'

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: number
      lng: number
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
  comments: Comment[]
}

export interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export default {
  fetchUsers(): Observable<User[]> {
    return ajax.getJSON<User[]>('https://jsonplaceholder.typicode.com/users')
  },
  fetchPosts(): Observable<Post[]> {
    return ajax.getJSON<Post[]>('https://jsonplaceholder.typicode.com/posts')
  },
  fetchCommentsOfPost(postId: number): Observable<Comment[]> {
    return ajax.getJSON<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  },
}
