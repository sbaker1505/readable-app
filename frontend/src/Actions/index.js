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
export const GET_POST_DETAIL = 'GET_POST_DETAIL'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const POST_VOTE = 'POST_VOTE'

// ------ POSTS Action Creators -------
export const getPost = post => ({
  type: GET_POST,
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

export const postVote = (result, id) => ({
  type: POST_VOTE,
  result,
  id
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

export const deletePostById = (id) => dispatch => (
  Api.fetchDeletePost(id)
    .then(post => dispatch(deletePost(post)))
)

export const postVoteScore = (id, vote) => dispatch => (
  Api.fetchVoteScore(id, vote)
    .then(result => dispatch(postVote(result, id)))
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
