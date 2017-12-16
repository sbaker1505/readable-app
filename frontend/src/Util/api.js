const api = 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}
// ------ CATEGORIES -------
export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(d => d.json())
  .then(data => data)

// ------ POSTS -------
export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(d => d.json())
  .then(data => data)

export const fetchPostFromCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
  .then(d => d.json())
  .then(data => data)

export const fetchFullPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
  .then(d => d.json())
  .then(data => data)

// ------ COMMENTS -------
export const fetchPostComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
  .then(d => d.json())
  .then(data => data)
