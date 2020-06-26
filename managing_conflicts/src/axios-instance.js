import axios from 'axios'

const instance = axios.create({
  baseURL: "https://scenarii-de-conflict-6a4c0.firebaseio.com/"
})

export default instance