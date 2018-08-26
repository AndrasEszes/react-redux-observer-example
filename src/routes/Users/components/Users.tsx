import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { usersActions, UsersState } from 'store/modules/users'
import { RootState } from 'store/root-reducer'


interface StateProps {
  users: UsersState
}

interface DispatchProps {
  fetchUsers: () => void
}

type Props = StateProps & DispatchProps

class Users extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchUsers()
  }

  public render() {
    const { users: { isLoading, users } } = this.props

    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <span>{user.name}</span>
            </li>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ users }: RootState): StateProps => ({
  users,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchUsers: () => { dispatch(usersActions.fetchUsers.request()) },
})

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Users)
