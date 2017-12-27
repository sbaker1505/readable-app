import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFullComment, editCommentById } from '../Actions'
import '../css/App.css';

class EditComment extends Component {
  state = {
    body: this.props.comment.body
  }

  componentDidMount(){
    this.props.callCommentDetails(this.props.id)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.editComment(this.props.id, this.state)
    this.props.path.push(`/${this.props.category}/${this.props.parentId}`)
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render(){
    return (
      <div className="form edit-comment">
        {this.props.comment.id === this.props.id
          ? <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="author"
                  placeholder="Name"
                  value={this.props.comment.author}
                  readOnly
                />
                <textarea
                  className='form-body'
                  type="text"
                  name="body"
                  placeholder="Comment here"
                  value={this.state.body
                    || this.state.body === ''
                    ? this.state.body
                    : this.props.comment.body}
                  onChange={this.handleChange}
                />
                <button>Edit Comment</button>
              </div>
            </form>
          : null}
      </div>
    )
  }
}

function mapStateToProps({currentComment}) {
  return {
    comment: currentComment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callCommentDetails: (id) => { dispatch(getFullComment(id)) },
    editComment: (id, comment) => { dispatch(editCommentById(id, comment)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)
