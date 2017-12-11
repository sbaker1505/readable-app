import * as Api from '../Util/api'

export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST'


export const getPost = post => ({
  type: GET_POST,
  post
})

export const deletePost = post => ({
  type: DELETE_POST,
  post
})


export const getAllPosts = () => dispatch => (
  Api.fetchPosts()
    .then(post => dispatch(getPost(post)))
)
