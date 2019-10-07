import request from 'request'

export const getCommon = function(id) {
  return request.get(`$(id)`)
}

export const postCommon = function(params) {
  return request.post('', params)
}
