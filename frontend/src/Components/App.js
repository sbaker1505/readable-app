import React, { Component } from 'react';
import PostMin from './PostMin';
import '../css/App.css';
import { connect } from 'react-redux';
import { getAllPosts, getAllCategories } from '../Actions'

class App extends Component {

  componentDidMount(){
    this.props.callAllCategories()
    this.props.callAllPosts()
  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          <h1 className="header">Readable Forum</h1>
          <ul className="controls">
            <li>
              <label>Category </label>
              <select id="category">
                <option value="All">All</option>
                {this.props.categories.length > 0
                  ? this.props.categories.map(category =>
                    <option
                      key={category.path}
                      value={category.path}>
                      {category.name}
                    </option>)
                  : null}
              </select>
            </li>
            <li>
              <label>Sort By </label>
              <select>
                <option>Title</option>
                <option>Date</option>
                <option>Time</option>
              </select>
            </li>
            <li>Add Post</li>
          </ul>
        </div>
        <div className="post-list">
          {this.props.post.length > 0
            ? this.props.post.map(post =>
              <PostMin
                key={post.id}
                post={post}
              />)
            : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

function mapStateToProps({categories, post}) {
  return {
    categories,
    post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callAllCategories: () => { dispatch(getAllCategories()) },
    callAllPosts: () => { dispatch(getAllPosts()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
