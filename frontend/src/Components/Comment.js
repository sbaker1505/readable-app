import React, { Component } from 'react';
import '../css/Comment.css';

export default class Comment extends Component {
  render () {
    return (
      <div className="comment">
        <div className="comment-top">
          <h3>{this.props.comment.author}</h3>
          <h4>{this.props.comment.timestamp}</h4>
          <h3>(X)</h3>
        </div>
        <div className="comment-body">
          <p>{this.props.comment.body}</p>
        </div>
        <div className="comment-bottom">
          <h3>Reply</h3>
          <h3>{this.props.comment.voteScore}</h3>
        </div>
      </div>
    )
  }
}
