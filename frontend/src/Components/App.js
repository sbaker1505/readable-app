import React, { Component } from 'react';
import PostList from './PostList';
import '../css/App.css';
import { connect } from 'react-redux';
import { getAllCategories } from '../Actions'

class App extends Component {

  componentDidMount(){
    this.props.callAllCategories()
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
        <PostList />
      </div>
    );
  }
}

function mapStateToProps({categories}) {
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callAllCategories: () => {
      dispatch(getAllCategories())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
