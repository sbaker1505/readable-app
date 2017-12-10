const api = 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const fetchPosts = () => {
  fetch(`${api}/posts`, {headers})
  .then(res => {
    if (!res.ok) {
      throw Error("Network request failed")
    }
    return res
  })
  .then(d => d.json())
}
