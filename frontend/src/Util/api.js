const api = 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}
// ------ CATEGORIES -------
export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(data => data.json())
  .then(data => data)

// ------ POSTS -------
export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(data => data.json())
  .then(data => data)

export const fetchPostFromCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
  .then(data => data.json())
  .then(data => data)

export const fetchFullPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
  .then(data => data.json())
  .then(data => data)

// ------ NEW POST -------
export const fetchCreatePost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())


// ------ EDIT POST -------
export const fetchEditPost = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())

// ------ DELETE POST -------
export const fetchDeletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  })

// ------ VOTE SCORE -------
export const fetchVoteScore = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  })
  .then(data => data.json())

export const fetchVoteScoreComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  })
  .then(data => data.json())

// ------ COMMENTS -------
export const fetchPostComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
  .then(data => data.json())
  .then(data => data)

export const fetchFullComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
  .then(data => data.json())
  .then(data => data)

// ------ NEW COMMENT -------
export const fetchCreateComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(data => data.json())


// ------ EDIT COMMENT -------
export const fetchEditComment = (id, comment) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(data => data.json())

// ------ DELETE COMMENT -------
export const fetchDeleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
