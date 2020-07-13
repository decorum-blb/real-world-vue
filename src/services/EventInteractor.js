import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  findEvents() {
    return apiClient.get('/events')
  },
  findEventById(id) {
    return apiClient.get(`/events/${id}`)
  }
}
