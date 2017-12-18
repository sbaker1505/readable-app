import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import '../css/Post.css';
import { getFullPost, getPostComments, deletePostById } from '../Actions'

class Post extends Component  {

  componentDidMount(){
    this.props.callPostDetails(this.props.id)
    this.props.callPostComments(this.props.id)
  }

  render () {
    return (
      <div className="post">
        <div className='post-top'>
          <h1>{this.props.post.title}</h1>
          <h4>{this.props.post.timestamp}</h4>
          <button onClick={() => {
            this.props.removePost(this.props.post.id)
            this.props.path.push('/')
          }}>(X)</button>
        </div>
        <div className="post-body">
          <p>{this.props.post.body}</p>
          <h2>-- {this.props.post.author}</h2>
        </div>
        <div className="post-bottom">
          <h3>{this.props.post.category}</h3>
          <h3>{this.props.post.voteScore}</h3>
        </div>
        {this.props.post.comments !== undefined
          ? this.props.post.comments.map(comment =>
          <Comment
            key={comment.id}
            comment={comment}/>
        ) : null}
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
    callPostDetails: (id) => { dispatch(getFullPost(id)) },
    callPostComments: (parentId) => { dispatch(getPostComments(parentId))},
    removePost: (id) => { dispatch(deletePostById(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
