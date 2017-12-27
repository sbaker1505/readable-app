import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment'
import Comment from './Comment';
import '../css/Post.css';
import { getFullPost, getPostComments, deletePostById, postVoteScore } from '../Actions'

class Post extends Component  {

  componentDidMount(){
    this.props.callPostDetails(this.props.id)
    this.props.callPostComments(this.props.id)
  }

  render () {
    const commentList = this.props.post.comments
    ? Object.keys(this.props.post.comments)
            .filter(key => this.props.post.comments[key] !== null)
            .map(key =>
              <Comment
                key={key}
                comment={this.props.post.comments[key]}
              />)
    : null

    return (
      this.props.post.error
        ? <div>
            <h1>ERROR 404:</h1>
            <h1>The post with id: {this.props.id} does not exist.</h1>
            <button onClick={() => this.props.path.push('/')}>Go back to Home Page</button>
          </div>
        : <div className="post">
            <div className='post-top'>
              <div className="vote-container">
                <div
                  className="vote-arrow control entypo-up-dir"
                  onClick={() => this.props.callPostVote(this.props.post.id, 'upVote')}
                />
                <h2 className="vote">{this.props.post.voteScore}</h2>
                <div
                  className="vote-arrow control entypo-down-dir"
                  onClick={() => this.props.callPostVote(this.props.post.id, 'downVote')}
                />
              </div>
              <div>
                <h1>{this.props.post.title}</h1>
                <h4>{moment(this.props.post.timestamp).format('lll')}</h4>
              </div>
              <div className="post-menu">
                <label className="entypo-dot-3"></label>
                <ul className="post-controls">
                  <li className="control dropdown-link"
                    onClick={() => this.props.path.push('/')}>Close</li>
                  <li
                    className="control dropdown-link delete-button"
                    onClick={() => {
                    this.props.removePost(this.props.post.id)
                    this.props.path.push('/')
                  }}>Delete</li>
                  <li className="control dropdown-link edit-button">
                    <Link
                      to={`/post/${this.props.post.id}/edit`}>
                        Edit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="post-body">
              <p>{this.props.post.body}</p>
              <h2>-- {this.props.post.author}</h2>
            </div>
            <div className="post-bottom">
              <h3 className="post-icons entypo-comment">{`  ${this.props.post.commentCount}`}</h3>
              <h3>
                <Link
                  to={`/${this.props.post.category}/${this.props.post.id}/comment/new`}>
                  + Comment
                </Link>
              </h3>
              <h3>Category: {this.props.post.category}</h3>
            </div>
            {commentList}
          </div>
    )
  }
}

function mapStateToProps({currentPost}) {
  return {
    post: currentPost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callPostDetails: (id) => { dispatch(getFullPost(id)) },
    callPostComments: (parentId) => { dispatch(getPostComments(parentId)) },
    removePost: (id) => { dispatch(deletePostById(id)) },
    callPostVote: (id, vote) => { dispatch(postVoteScore(id, vote)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
