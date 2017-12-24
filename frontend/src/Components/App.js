import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/App.css';
import PostMin from './PostMin';
import { getAllPosts, getAllCategories, getAllPostsFromCategory } from '../Actions'

class App extends Component {

  componentDidMount(){
    this.props.callAllCategories()
    this.props.callAllPosts()
  }

  render() {
    const postShort = this.props.post ? Object.keys(this.props.post).map(key =>
      <PostMin
      key={key}
      post={this.props.post[key]}
    />) : <p className="no-post">No posts found</p>

    return (
      <div className="container">
        <div className="nav">
          <h1 className="header">Readable Forum</h1>
          <ul className="controls">
            <li className="dropdown-menu">
              {this.props.category
                ? <label>Category: {this.props.category}</label>
                : <label>Category</label>}
              <ul className="dropdown-list categories">
                <li className='dropdown-link'>
                  <Link
                    to='/'
                    onClick={() => (
                      this.props.callAllPosts()
                    )}>
                    All
                  </Link>
                </li>
                {this.props.categories.length > 0
                  ? this.props.categories.map(category =>
                    <li key={category.path} className='dropdown-link'>
                      <Link
                        to={`/category/${category.path}`}
                        onClick={() => (
                          this.props.callAllPostsFromCategory(category.path)
                        )}>
                        {category.name}
                      </Link>
                    </li>)
                  : null
                }
              </ul>
            </li>
            <li className="dropdown-menu">
              <label>Sort By</label>
              <ul className="dropdown-list sort-by">
                <li className='dropdown-link'>Title</li>
                <li className='dropdown-link'>Votes</li>
                <li className='dropdown-link'>Date</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="post-list">
          <div className="add-post">
            <Link to='/new'
              className="entypo-plus"/>
          </div>
          {postShort}
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
