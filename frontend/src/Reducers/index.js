import { combineReducers } from 'redux'
import sortBy from 'sort-by'
import {
  GET_POST,
  GET_CATEGORY,
  GET_POST_DETAIL,
  GET_POST_COMMENTS,
  GET_COMMENT_DETAIL,
  CREATE_POST,
  CREATE_COMMENT,
  EDIT_POST,
  DELETE_POST,
  EDIT_COMMENT,
  DELETE_COMMENT,
  POST_VOTE,
  COMMENT_VOTE,
  SORT_POST
 } from '../Actions'

// ------ CATEGORY Reducers -------
function categories (state = {}, action) {
  const { categories } = action

  switch (action.type) {
    case GET_CATEGORY :
      return categories.categories
    default:
      return state
  }
}

// ------ POST Reducers -------
function post (state = {}, action) {
  const { post, result, id, option } = action
  switch (action.type) {
    case GET_POST :
      let sorted = post.sort(sortBy('-voteScore'))
      let tempState;
      sorted.forEach(post => (
        tempState = {
          ...tempState,
          [post.id]: post
        }
      ))
      return tempState || null
    case SORT_POST :
      if (option === 'recent'){
        sorted = post.sort(sortBy('-timestamp'))
      } else if (option === 'oldest'){
        sorted = post.sort(sortBy('timestamp'))
      } else if (option === 'highVote'){
        sorted = post.sort(sortBy('-voteScore'))
      } else if (option === 'lowVote'){
        sorted = post.sort(sortBy('voteScore'))
      } else if (option === 'authorAZ'){
        sorted = post.sort(sortBy('author'))
      } else if (option === 'titleAZ'){
        sorted = post.sort(sortBy('title'))
      }
      sorted.forEach(post => (
        tempState = {
          ...tempState,
          [post.id]: post
        }
      ))
      return tempState || null
    case CREATE_POST :
      return {
        ...state,
        post
      }
    case DELETE_POST :
      return {
        ...state,
        [id]: null
      }
    case POST_VOTE :
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: result.voteScore
        }
      }
    default:
      return state
  }
}

// ------ CURRENT POST Reducers -------
function currentPost(state = {}, action) {
  const { post, comment, result, id } = action
  switch (action.type) {
    case GET_POST_DETAIL :
      return post
    case GET_POST_COMMENTS :
      let tempComment;
      comment.forEach(comment => (
        tempComment = {
          ...tempComment,
          [comment.id]: comment
        }
      ))
      return {
        ...state,
        comments: tempComment || null
      }
    case CREATE_COMMENT :
      return {
        ...state,
        comment
      }
    case DELETE_POST :
      return null
    case EDIT_POST :
      return post
    case POST_VOTE :
      return {
        ...state,
        voteScore: result.voteScore
      }
    case COMMENT_VOTE :
      return {
        ...state,
        comments: {
          ...state.comments,
          [id]: {
            ...state.comments[id],
            voteScore: result.voteScore
          }
        }
      }
    case EDIT_COMMENT :
      return {
        ...state,
        comments: {
          ...state.comments,
          [id]: comment
        }
      }
    case DELETE_COMMENT :
      return {
        ...state,
        comments: {
          ...state.comments,
          [id]: null
        }
      }
    default :
      return state
  }
}

// ------ CURRENT POST Reducers -------
function currentComment (state = {}, action) {
  const { comment } = action
  switch (action.type) {
    case GET_COMMENT_DETAIL :
      return comment
    default :
      return state
  }
}

export default combineReducers({
  categories,
  post,
  currentPost,
  currentComment
});
