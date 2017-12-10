import React, { Component } from 'react';
import PostList from './PostList';
import '../css/App.css';
import * as ReadableAPI from '../Util/api';

class App extends Component {
  state = {
    category: 'All',
  }

  // Lifecycle Request
  // componentDidMount() {
  //   ReadableAPI.fetchPosts().then((posts) => this.setState({posts}))
  // }



  render() {
    return (
      <div className="container">
        <div className="nav">
          <h1 className="header">Readable Forum</h1>
          <ul className="controls">
            <li>
              <label>
                <input list="category" placeholder="Category"/>
              </label>
              <datalist id="category">
                <option value="All">All</option>
                <option value="Lorem ipsum">Lorem ipsum</option>
                <option value="Coffee ipsum">Coffee ipsum</option>
                <option value="Cats">Cats</option>
              </datalist>
            </li>
            <li>
              <label>Sort By</label>
              <select>
                <option>Title</option>
                <option>Date</option>
                <option>Time</option>
              </select>
            </li>
            <li>Add Post</li>
          </ul>
        </div>
        <PostList
          category={this.state.category}
          endpoint='/posts'
        />
      </div>
    );
  }
}

export default App;
