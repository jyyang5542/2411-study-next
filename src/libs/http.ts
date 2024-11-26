import xior from 'xior'

const http = xior.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  timeout: 120 * 1000,
})

export default http
