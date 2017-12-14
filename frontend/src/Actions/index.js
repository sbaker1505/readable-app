import * as Api from '../Util/api'

// ------ CATEGORIES Actions -------
export const GET_CATEGORY = 'GET_CATEGORY'

// ------ CATEGORIES Action Creators -------
export const getCategory = categories => ({
  type: GET_CATEGORY,
  categories
})

// ------ CATEGORIES Action API Dispatch -------
export const getAllCategories = () => dispatch => (
  Api.fetchCategories()
    .then(categories => dispatch(getCategory(categories)))
)


// ------ POSTS Actions -------
export const GET_POST = 'GET_POST'
export const GET_POST_FROM_CATEGORY = 'GET_POST_FROM_CATEGORY'
export const DELETE_POST = 'DELETE_POST'

// ------ POSTS Action Creators -------
export const getPost = post => ({
  type: GET_POST,
  post
})

export const getPostFromCategory = post => ({
  type: GET_POST_FROM_CATEGORY,
  post
})

export const deletePost = post => ({
  type: DELETE_POST,
  post
})

// ------ POSTS Action API Dispatch -------
export const getAllPosts = () => dispatch => (
  Api.fetchPosts()
    .then(post => dispatch(getPost(post)))
)

export const getAllPostsFromCategory = (category) => dispatch => (
  Api.fetchPostFromCategory(category)
    .then(post => dispatch(getPost(post)))
)
