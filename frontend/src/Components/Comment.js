import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment'
import '../css/Comment.css';
import { getFullComment, postVoteScoreComment } from '../Actions'

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
              className="control comment-info-link entypo-info"></div>
            <div className="control comment-info-link entypo-pencil"></div>
            <div className="control comment-info-link entypo-trash"></div>
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
    callPostVote: (id, vote) => { dispatch(postVoteScoreComment(id, vote)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
