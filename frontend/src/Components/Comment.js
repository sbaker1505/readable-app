import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment'
import '../css/Comment.css';
import { getFullComment, postVoteScoreComment, deleteCommentById } from '../Actions'

class Comment extends Component {
  commentInfoEvent = () => {
    this.props.callCommentDetails(this.props.comment.id)
    this.setState(this.props.info)
  }

  render () {
    return (
      <div className="comment">
        <div className="comment-top">
          <div className="vote-container vote-linear">
            <div className="vote-arrow control entypo-up-dir" onClick={() => this.props.callPostVote(this.props.comment.id, 'upVote')}></div>
            <h2 className="vote">{this.props.comment.voteScore}</h2>
            <div className="vote-arrow control entypo-down-dir" onClick={() => this.props.callPostVote(this.props.comment.id, 'downVote')}></div>
          </div>
          <h3>{this.props.comment.author}</h3>
          <h4>{moment(this.props.comment.timestamp).format('lll')}</h4>
          <div className="comment-icons">
            <div
              onClick={this.commentInfoEvent}
              className="control comment-info-link entypo-info"/>
            <Link to={`/post/${this.props.comment.parentId}/comment/${this.props.comment.id}/edit`}>
              <div className="control comment-info-link entypo-pencil"/>
            </Link>
            <div
              className="control comment-info-link entypo-trash"
              onClick={() => {
              this.props.removeComment(this.props.comment.id)
              }}/>
          </div>
        </div>
        {this.state
          ? <div>
          <div className="comment-body">
            <p>{this.props.comment.body}</p>
          </div>
          <div className="comment-bottom">
            <h3>Vote Score: {this.props.comment.voteScore}</h3>
          </div>
        </div>
        : null}
      </div>
    )
  }
}

function mapStateToProps({currentComment}) {
  return {
    info: currentComment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callCommentDetails: (id) => { dispatch(getFullComment(id)) },
    callPostVote: (id, vote) => { dispatch(postVoteScoreComment(id, vote)) },
    removeComment: (id) => { dispatch(deleteCommentById(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
