import React, { Component } from 'react';
import PostMin from './PostMin';
import '../css/App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts, getAllCategories, getAllPostsFromCategory } from '../Actions'

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
              <ul className="categories">
                <li>
                  <Link
                    to='/'
                    onClick={() => (
                      this.props.callAllPosts()
                    )}
                    className='category-link'>
                    All
                  </Link>
                </li>
                {this.props.categories.length > 0
                  ? this.props.categories.map(category =>
                    <li key={category.path}>
                      <Link
                        to={`/category/${category.path}`}
                        onClick={() => (
                          this.props.callAllPostsFromCategory(category.path)
                        )}
                        className='category-link'>
                        {category.name}
                      </Link>
                    </li>)
                  : null
                }
              </ul>
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
            : <p>No posts found</p>}
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
    callAllPosts: () => { dispatch(getAllPosts()) },
    callAllPostsFromCategory: (category) => { dispatch(getAllPostsFromCategory(category)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
