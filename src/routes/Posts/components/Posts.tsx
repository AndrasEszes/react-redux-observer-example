import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { postsActions, PostsState } from 'store/modules/posts'
import { RootState } from 'store/root-reducer'

interface StateProps {
  posts: PostsState
}

interface DispatchProps {
  fetchPosts: () => void
}

type Props = StateProps & DispatchProps

class Posts extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchPosts()
  }

  public render() {
    const { posts: { posts, isLoading } } = this.props

    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    return posts.map((post) => (
      <div key={post.id} style={{ margin: 16, padding: 16, backgroundColor: '#F1F1F1' }}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <hr />
        <div>
          {
            post.comments.map((comment) => (
              <div key={comment.id} style={{ margin: 8, padding: 8, backgroundColor: '#EEE' }}>
                <span>{comment.name}: {comment.body}</span>
              </div>
            ))
          }
        </div>
      </div>
    ))
  }
}

const mapStateToProps = ({ posts }: RootState): StateProps => ({
  posts,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchPosts: () => { dispatch(postsActions.fetchPosts.request()) },
})

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Posts)
