import React, { Component } from 'react';
import Comment from './Comment';
import '../css/Post.css';

const date = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  const yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  return today = mm + '/' + dd + '/' + yyyy;
}


export default class Post extends Component  {
  render () {
    return (
      <div className="post">
        <div className='post-top'>
          <h1>Lorem ipsum dolor sit amet</h1>
          <h4>{date()}</h4>
        </div>
        <div className="post-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam massa nec odio commodo, eget varius nulla semper. Ut id purus cursus, laoreet sem ut, auctor nibh. Cras maximus, quam nec finibus faucibus, massa lectus porta orci, vel varius nisi quam in est. Aenean at pharetra nisl. Vestibulum sit amet ornare ligula. Nam gravida nibh sapien, et pharetra dui ornare vel. Suspendisse tincidunt iaculis libero, nec rutrum mauris varius vitae. Praesent ac ligula sed tortor imperdiet convallis. Nullam vulputate ipsum nulla, quis congue turpis venenatis in.</p>
          <h2>-- Author Name</h2>
        </div>
        <div className="post-bottom">
          <h3>Category</h3>
          <h3>★★★★☆</h3>
        </div>
        <Comment />
        <Comment />
      </div>
    )
  }
}
