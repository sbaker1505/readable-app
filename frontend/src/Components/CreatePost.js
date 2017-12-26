import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize'
import { getAllCategories, createNewPost } from '../Actions'
import '../css/App.css';


class CreatePost extends Component {

  componentDidMount(){
    this.props.callAllCategories()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true})
    this.setState({
      ...values,
      timestamp: Date.now(),
      id: Math.random().toString(36).substr(-8)
    })
  }

  render(){

    if (this.state
        && this.state.title
        && this.state.author
        && this.state.body
        && this.state.category
        && this.state.id
        && this.state.timestamp
          !== undefined) {
      console.log(this.state);
      this.props.addPost(this.state)
      this.props.path.push('/')
    }

    return (
      <div className="form create-post">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="author" placeholder="Name"/>
            <textarea className='form-body' type="text" name="body" placeholder="Post content"/>
            <select name="category">
              {this.props.categories.length > 0
                ? this.props.categories.map(category =>
                  <option key={category.path}>
                      {category.name}
                  </option>)
                : null
              }
            </select>
            <button>Post</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({categories}) {
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callAllCategories: () => { dispatch(getAllCategories()) },
    addPost: (post) => { dispatch(createNewPost(post)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
