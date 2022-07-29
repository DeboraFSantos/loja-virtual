import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://run.mocky.io/v3/98a8bb40-1b11-474d-8987-45221c759f08'
})