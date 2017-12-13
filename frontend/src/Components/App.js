import React, { Component } from 'react';
import PostList from './PostList';
import '../css/App.css';
import { connect } from 'react-redux';
import { getAllPosts } from '../Actions'

// const p = [
//   {
//     id: '1234567890',
//     timestamp: '12/08/2017',
//     title: 'Lorem ipsum dolor sit amet',
//     author: 'Katie Robinson',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam massa nec odio commodo, eget varius nulla semper. Ut id purus cursus, laoreet sem ut, auctor nibh. Cras maximus, quam nec finibus faucibus, massa lectus porta orci, vel varius nisi quam in est. Aenean at pharetra nisl. Vestibulum sit amet ornare ligula. Nam gravida nibh sapien, et pharetra dui ornare vel. Suspendisse tincidunt iaculis libero, nec rutrum mauris varius vitae. Praesent ac ligula sed tortor imperdiet convallis. Nullam vulputate ipsum nulla, quis congue turpis venenatis in.',
//     category: 'Lorem ipsum',
//     voteScore: 23,
//     deleted: false
//   },
//   {
//     id: '0987654321',
//     timestamp: '12/08/2017',
//     title: 'Spoon bar at galão',
//     author: 'Coffee Sue',
//     body: 'Variety, sit, affogato, white milk shop spoon mazagran. Spoon bar at galão a grounds sugar. Aroma, irish turkish mocha, cinnamon percolator viennese body con panna.',
//     category: 'Coffee ipsum',
//     voteScore: 87,
//     deleted: false
//   }
// ]

class App extends Component {

  componentDidMount(){
    this.props.callAllPosts()
  }

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
        <PostList />
      </div>
    );
  }
}

function mapStateToProps({post}) {
  return {
    post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callAllPosts: () => {
      dispatch(getAllPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
