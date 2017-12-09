import React, { Component } from 'react';
import PostMin from './PostMin';

const postInfo = [
  {
    id: '1234567890',
    timestamp: '12/08/2017',
    title: 'Lorem ipsum dolor sit amet',
    author: 'Katie Robinson',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam massa nec odio commodo, eget varius nulla semper. Ut id purus cursus, laoreet sem ut, auctor nibh. Cras maximus, quam nec finibus faucibus, massa lectus porta orci, vel varius nisi quam in est. Aenean at pharetra nisl. Vestibulum sit amet ornare ligula. Nam gravida nibh sapien, et pharetra dui ornare vel. Suspendisse tincidunt iaculis libero, nec rutrum mauris varius vitae. Praesent ac ligula sed tortor imperdiet convallis. Nullam vulputate ipsum nulla, quis congue turpis venenatis in.',
    category: 'Lorem ipsum',
    voteScore: 23,
    deleted: false
  },
  {
    id: '0987654321',
    timestamp: '12/08/2017',
    title: 'Spoon bar at galão',
    author: 'Coffee Sue',
    body: 'Variety, sit, affogato, white milk shop spoon mazagran. Spoon bar at galão a grounds sugar. Aroma, irish turkish mocha, cinnamon percolator viennese body con panna.',
    category: 'Coffee ipsum',
    voteScore: 87,
    deleted: false
  }
]

export default class PostList extends Component {
  render () {
    return (
      <div className="post-list">
        {this.props.category === 'All'
        ?
        postInfo
          .map((post) =>
            <PostMin
              post={post}
            />
          )
        :
        postInfo
          .filter((post) => (post.category === this.props.category))
          .map((post) =>
            <PostMin
              post={post}
            />
          )
        }
      </div>
    )
  }
}
