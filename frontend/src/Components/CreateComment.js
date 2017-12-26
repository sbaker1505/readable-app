import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize'
import { createNewComment } from '../Actions'
import '../css/App.css';

class CreateComment extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true})
    this.setState({
      ...values,
      parentId: this.props.parentId,
      timestamp: Date.now(),
      id: Math.random().toString(36).substr(-8)
    })
  }

  render(){

    if (this.state
        && this.state.author
        && this.state.body
        && this.state.id
        && this.state.timestamp
          !== undefined) {
      console.log(this.state);
      this.props.addComment(this.props.parentId, this.state)
      this.props.path.push(`/post/${this.props.parentId}`)
    }

    return (
      <div className="form create-comment">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="author" placeholder="Name"/>
            <textarea className='form-body' type="text" name="body" placeholder="Comment here"/>
            <button>Comment</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (parentId, comment) => { dispatch(createNewComment(parentId, comment)) },
  }
}

export default connect(null, mapDispatchToProps)(CreateComment)
