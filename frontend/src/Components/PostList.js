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

const urlAPI = endpoint => `http://localhost:3001${endpoint}`

const headers = {
  'Accept': 'application/json',
  'Authorization': 'sbaker1505',
  'Content-Type': 'application/json'
}

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch(urlAPI(this.props.endpoint), {headers})
    .then(res => {
      if (!res.ok) {
        throw Error("Network request failed")
      }
      return res
    })
    .then(d => d.json())
    .then(d => {
      this.setState({
        posts: d
      })
    })
  }

  render () {
    if (!this.state.posts) return <p>Loading...</p>

    return (
      <div className="post-list">
        {this.props.category === 'All'
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
        }
      </div>
    )
  }
}
