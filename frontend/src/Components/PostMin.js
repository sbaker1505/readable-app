import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostMin extends Component {
  render() {
    return (
      <Link
        to={`/post/${this.props.post.id}`}
        className="post-min-link">
        <div className="post-min">
          <h1>{this.props.post.title}</h1>
          <div className="post-info">
            <h2>{this.props.post.timestamp}</h2>
            <h2>by {this.props.post.author}</h2>
          </div>
        </div>
      </Link>
    )
  }
}
