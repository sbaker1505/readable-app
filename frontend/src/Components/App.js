import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/App.css';
import PostMin from './PostMin';
import { getAllPosts, getAllCategories, getAllPostsFromCategory, sortPostOption } from '../Actions'

class App extends Component {
  componentDidMount(){
    this.props.callAllCategories()
    this.props.callAllPosts()
  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          <h1
            onClick={() => {
              this.props.callAllPosts()
              this.props.path ? this.props.path.push('/') : null
            }}
            className="control header">Readable Forum</h1>
          <ul className="controls">
            <li className="dropdown-menu">
              {this.props.category
                ? <label className="control">Category: {this.props.category}</label>
                : <label className="control">Category</label>}
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
              <label className="control">Sort By</label>
              <ul className="dropdown-list sort-by">
                <li
                  onClick={() => this.props.onSortPost('highVote', this.props.category)}
                  className='control dropdown-link'>Best Rated</li>
                <li
                  onClick={() => this.props.onSortPost('lowVote', this.props.category)}
                  className='control dropdown-link'>Lowest Rated</li>
                <li
                  onClick={() => this.props.onSortPost('recent', this.props.category)}
                  className='control dropdown-link'>Most Recent</li>
                <li
                  onClick={() => this.props.onSortPost('oldest', this.props.category)}
                  className='control dropdown-link'>Oldest</li>
                <li
                  onClick={() => this.props.onSortPost('authorAZ', this.props.category)}
                  className='control dropdown-link'>Author A-Z</li>
                <li
                  onClick={() => this.props.onSortPost('titleAZ', this.props.category)}
                  className='control dropdown-link'>Title A-Z</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="post-list">
          <div className="add-post">
            <Link to='/new'
              className="entypo-plus"/>
          </div>
          {this.props.post
            ? Object.keys(this.props.post)
                    .filter(key => this.props.post[key] !== null)
                    .map(key =>
                      <PostMin
                        key={key}
                        post={this.props.post[key]}
                      />)
            : <p className="no-post">No posts found</p>}
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
    callAllPostsFromCategory: (category) => { dispatch(getAllPostsFromCategory(category)) },
    onSortPost: (option, category) => { dispatch(sortPostOption(option, category)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
