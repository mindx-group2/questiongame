import axios from 'axios';

const axiosClient: any = axios.create({
  baseURL: 'http://localhost:8000'
})

export { axiosClient }