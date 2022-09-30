import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'url_set_loginAuth',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: 'url_set_logout',
    method: 'post'
  })
}
