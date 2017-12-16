import { combineReducers } from 'redux'
import {
  GET_POST,
  GET_CATEGORY,
  GET_POST_FROM_CATEGORY,
  GET_POST_DETAIL
 } from '../Actions'

const initialState = {
  categories: [],
  post: []
}

// ------ CATEGORY Reducers -------
function categories (state = initialState, action) {
  const { categories } = action

  switch (action.type) {
    case GET_CATEGORY :
      return categories.categories
    default:
      return state
  }
}

// ------ POST Reducers -------
function post (state = initialState, action) {
  const { post } = action

  switch (action.type) {
    case GET_POST :
      return post
    case GET_POST_FROM_CATEGORY :
      return post
    case GET_POST_DETAIL :
      return post
    default:
      return state
  }
}

export default combineReducers({
  categories,
  post
});
