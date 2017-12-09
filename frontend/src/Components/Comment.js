import React, { Component } from 'react';
import '../css/Comment.css';

export default class Comment extends Component {
  render () {
    return (
      <div className="comment">
        <div className="comment-top">
          <h3>Author Name</h3>
          <h4>12/10/2017</h4>
          <h3>(X)</h3>
        </div>
        <div className="comment-body">
          <p>Variety, sit, affogato, white milk shop spoon mazagran. Spoon bar at galão a grounds sugar. Aroma, irish turkish mocha, cinnamon percolator viennese body con panna.</p>
        </div>
        <div className="comment-bottom">
          <h3>Reply</h3>
          <h3>★★★☆☆</h3>
        </div>
      </div>
    )
  }
}
