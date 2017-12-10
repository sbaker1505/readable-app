import { GET_POST } from '../Actions'

const initialState = {
  post: {}
}

function post (state = initialState, action) {
  const { post } = action

  switch (action.type) {
    case GET_POST :
      return {
        ...state,
        post
      }
    default:
      return state
  }
}

export default post
