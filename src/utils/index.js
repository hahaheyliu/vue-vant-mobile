const Fly = require('flyio/dist/npm/fly')
const fly = new Fly()

fly.interceptors.request.use(request => {
  request.headers = {
    'X-Tag': 'flyio'
  }

  return request
})

fly.interceptors.response.use(
  (response, promise) => {
    if (response.data.code === 200) {
      return promise.reject(response)
    } else {
      return response.data.data
    }
  },
  err => {
    return Promise.reject('请求错误')
  }
)

export default fly
