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
export const GET_POST_DETAIL = 'GET_POST_DETAIL'
export const CREATE_POST = 'CREATE_POST'
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

export const getPostDetails = (post) => ({
  type: GET_POST_DETAIL,
  post
})

export const createPost = post => ({
  type: CREATE_POST,
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

export const getFullPost = (id) => dispatch => (
  Api.fetchFullPost(id)
    .then((post) => dispatch(getPostDetails(post)))
)

export const createNewPost = (newPost) => dispatch => (
  Api.fetchCreatePost(newPost)
    .then(post => dispatch(createPost(post)))
)


// ------ COMMENT Actions -------
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'

// ------ COMMENT Action Creators -------
export const getComment = comment => ({
  type: GET_POST_COMMENTS,
  comment
})

// ------ COMMENT Action API Dispatch -------
export const getPostComments = (parentId) => dispatch => (
  Api.fetchPostComments(parentId)
    .then(comment => dispatch(getComment(comment)))
)
