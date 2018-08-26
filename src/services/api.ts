import { Observable,  } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { pluck } from 'rxjs/operators'

export interface Name {
  title: string
  first: string
  last: string
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface User {
  name: Name
  picture: Picture
}

export interface Result {
  results: User[]
}

export default {
  fetchUsers(): Observable<User[]> {
    return ajax.getJSON<Result>('https://randomuser.me/api/?results=10').pipe(
      pluck('results')
    )
  }
}
