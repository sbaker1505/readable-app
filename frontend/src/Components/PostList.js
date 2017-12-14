import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../Actions'
import PostMin from './PostMin';

class PostList extends Component {

  componentDidMount(){
    this.props.callAllPosts()
  }

  render () {
    return (
      <div className="post-list">
        {this.props.post.length > 0
          ? this.props.post.map(post =>
            <PostMin
              key={post.id}
              post={post}
            />)
          : <p>Loading...</p>}
      </div>
    )
  }
}

function mapStateToProps({post}) {
  return {
    post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callAllPosts: () => {
      dispatch(getAllPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
