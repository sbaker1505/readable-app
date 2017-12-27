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
export const EDIT_POST = 'EDIT_POST'
export const POST_VOTE = 'POST_VOTE'

// ------ POSTS Action Creators -------
export const getPost = post => ({
  type: GET_POST,
  post
})

export const getPostDetails = (post, id) => ({
  type: GET_POST_DETAIL,
  post,
  id
})

export const createPost = post => ({
  type: CREATE_POST,
  post
})

export const editPost = post => ({
  type: EDIT_POST,
  post
})

export const deletePost = (post, id) => ({
  type: DELETE_POST,
  post,
  id
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
    .then((post) => dispatch(getPostDetails(post, id)))
)

export const createNewPost = (newPost) => dispatch => (
  Api.fetchCreatePost(newPost)
    .then(post => dispatch(createPost(post)))
)

export const editPostById = (id, post) => dispatch => (
  Api.fetchEditPost(id, post)
    .then(post => dispatch(editPost(post)))
)

export const deletePostById = (id) => dispatch => (
  Api.fetchDeletePost(id)
    .then(post => dispatch(deletePost(post, id)))
)

export const postVoteScore = (id, vote) => dispatch => (
  Api.fetchVoteScore(id, vote)
    .then(result => dispatch(postVote(result, id)))
)


// ------ COMMENT Actions -------
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const GET_COMMENT_DETAIL = 'GET_COMMENT_DETAIL'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const COMMENT_VOTE = 'COMMENT_VOTE'

// ------ COMMENT Action Creators -------
export const getComment = comment => ({
  type: GET_POST_COMMENTS,
  comment
})

export const getCommentDetails = (comment, id) => ({
  type: GET_COMMENT_DETAIL,
  comment,
  id
})

export const createComment = (parentId, comment) => ({
  type: CREATE_COMMENT,
  parentId,
  comment
})

export const editComment = (id, comment) => ({
  type: EDIT_COMMENT,
  id,
  comment
})

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
})

export const postVoteComment = (result, id) => ({
  type: COMMENT_VOTE,
  result,
  id
})

// ------ COMMENT Action API Dispatch -------
export const getPostComments = (parentId) => dispatch => (
  Api.fetchPostComments(parentId)
    .then(comment => dispatch(getComment(comment)))
)

export const getFullComment = (id) => dispatch => (
  Api.fetchFullComment(id)
    .then((comment) => dispatch(getCommentDetails(comment, id)))
)

export const createNewComment = (parentId, newComment) => dispatch => (
  Api.fetchCreateComment(newComment)
    .then(comment => dispatch(createComment(parentId, comment)))
)

export const editCommentById = (id, comment) => dispatch => (
  Api.fetchEditComment(id, comment)
    .then(comment => dispatch(editComment(id, comment)))
)

export const deleteCommentById = (id) => dispatch => (
  Api.fetchDeleteComment(id)
    .then(() => dispatch(deleteComment(id)))
)

export const postVoteScoreComment = (id, vote) => dispatch => (
  Api.fetchVoteScoreComment(id, vote)
    .then(result => dispatch(postVoteComment(result, id)))
)

// ------ SORTING Actions -------
export const SORT_POST = 'SORT_POST'

// ------ SORTING Action Creators -------
export const sortPost = (post, option) => ({
  type: SORT_POST,
  post,
  option
})

export const sortPostOption = (option, category) => dispatch => {
  const apiRequest = category ? Api.fetchPostFromCategory(category) : Api.fetchPosts()
  apiRequest.then(post => dispatch(sortPost(post, option)))
}
