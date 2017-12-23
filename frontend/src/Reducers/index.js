import { combineReducers } from 'redux'
import {
  GET_POST,
  GET_CATEGORY,
  GET_POST_DETAIL,
  GET_POST_COMMENTS,
  CREATE_POST,
  CREATE_COMMENT,
  DELETE_POST,
  POST_VOTE
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
  const { post, comment, result, id } = action

  switch (action.type) {
    case GET_POST :
      let tempState;
      post.forEach(post => (
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
      return post
    default :
      return state
  }
}

export default combineReducers({
  categories,
  post,
  currentPost
});
