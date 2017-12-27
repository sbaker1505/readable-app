import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories, getFullPost, editPostById } from '../Actions'
import '../css/App.css';

class EditPost extends Component {
  state = {
    title: this.props.post.title,
    body: this.props.post.body,
    category: this.props.post.category
  }
  componentDidMount(){
    this.props.callAllCategories()
    this.props.callPostDetails(this.props.id)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.editPost(this.props.id, this.state)
    this.props.path.push(`/${this.props.category}/${this.props.id}`)
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render(){
    return (
      <div className="form edit-post">
        {this.props.post.id === this.props.id
          ? <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={this.state.title
                    || this.state.title === ''
                    ? this.state.title
                    : this.props.post.title}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="author"
                  placeholder="Name"
                  value={this.props.post.author}
                  readOnly
                />
                <textarea
                  className='form-body'
                  type="text"
                  name="body"
                  placeholder="Post content"
                  value={this.state.body
                    || this.state.body === ''
                    ? this.state.body
                    : this.props.post.body}
                  onChange={this.handleChange}
                />
                <select
                  name="category"
                  value={this.state.category || this.props.post.category}
                  onChange={this.handleChange}
                  >
                  {this.props.categories.length > 0
                    ? this.props.categories.map(category =>
                      <option key={category.path}>
                          {category.name}
                      </option>)
                    : null
                  }
                </select>
                <button>Edit Post</button>
              </div>
            </form>
          : null}
      </div>
    )
  }
}

function mapStateToProps({categories, currentPost}) {
  return {
    categories,
    post: currentPost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callAllCategories: () => { dispatch(getAllCategories()) },
    callPostDetails: (id) => { dispatch(getFullPost(id)) },
    editPost: (id, post) => { dispatch(editPostById(id, post)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
