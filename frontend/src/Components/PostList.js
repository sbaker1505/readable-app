import React, { Component } from 'react';
// import PostMin from './PostMin';
// import * as ReadableAPI from '../Util/api';

export default class PostList extends Component {
  render () {

    return (
      <div className="post-list">
        Hello world
        {/* {this.props.category === 'All'
        ?
        this.state.posts
          .map((post) =>
            <PostMin
              key={post.id}
              post={post}
            />
          )
        :
        this.state.posts
          .filter((post) => (post.category === this.props.category))
          .map((post) =>
            <PostMin
              post={post}
            />
          )
        } */}
      </div>
    )
  }
}
