import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postVoteScore, deletePostById } from '../Actions'
import * as moment from 'moment'

class PostMin extends Component {
  render() {
    return (
      <div className="post-min-container">
        <div className="vote-container">
          <div className="vote-arrow control entypo-up-dir" onClick={() => this.props.callPostVote(this.props.post.id, 'upVote')}></div>
          <h2 className="vote">{this.props.post.voteScore}</h2>
          <div className="vote-arrow control entypo-down-dir" onClick={() => this.props.callPostVote(this.props.post.id, 'downVote')}></div>
        </div>
          <div className="post-min">
            <div>
              <Link
                to={`/${this.props.post.category}/${this.props.post.id}`}
                className="post-min-link">
                  <h1>{this.props.post.title}</h1>
              </Link>
              <div className="post-min-icons">
                <div className="post-icons entypo-comment">{`  ${this.props.post.commentCount}`}</div>
                <Link
                  to={`/${this.props.post.category}/${this.props.post.id}/edit`}
                  className="control post-icons entypo-pencil"
                />
                <div
                  className="control post-icons entypo-trash"
                  onClick={() => {
                  this.props.removePost(this.props.post.id)
                  }}
                />
              </div>
            </div>
            <div className="post-info">
              <h2>{moment(this.props.post.timestamp).format('lll')}</h2>
              <h2>by {this.props.post.author}</h2>
            </div>
          </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callPostVote: (id, vote) => { dispatch(postVoteScore(id, vote)) },
    removePost: (id) => { dispatch(deletePostById(id)) }
  }
}

export default connect(null, mapDispatchToProps)(PostMin)
