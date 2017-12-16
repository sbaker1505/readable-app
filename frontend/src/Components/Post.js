import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import '../css/Post.css';
import { getFullPost } from '../Actions'


// const date = () => {
//   let today = new Date();
//   let dd = today.getDate();
//   let mm = today.getMonth()+1; //January is 0!
//   const yyyy = today.getFullYear();
//
//   if(dd<10) {
//       dd = '0'+dd
//   }
//
//   if(mm<10) {
//       mm = '0'+mm
//   }
//
//   return today = mm + '/' + dd + '/' + yyyy;
// }


class Post extends Component  {

  componentDidMount(){
    this.props.callPostDetails(this.props.id)
  }

  render () {
    return (
      <div className="post">
        <div className='post-top'>
          <h1>{this.props.post.title}</h1>
          <h4>{this.props.post.timestamp}</h4>
        </div>
        <div className="post-body">
          <p>{this.props.post.body}</p>
          <h2>-- {this.props.post.author}</h2>
        </div>
        <div className="post-bottom">
          <h3>{this.props.post.category}</h3>
          <h3>{this.props.post.voteScore}</h3>
        </div>
        {/* <Comment />
        <Comment /> */}
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
    callPostDetails: (id) => { dispatch(getFullPost(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
