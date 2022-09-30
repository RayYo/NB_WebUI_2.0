import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import { urlRequestGet } from '@/utils/request-url-mapping'

// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
request.interceptors.request.use(
  config => {
    // add cookie
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }

    if (process.env.NODE_ENV === 'production') {
      // post: Processing data format
      const { data, method } = config
      if (method.toLocaleLowerCase() === 'post' && typeof data === 'object') {
        let dataFormat = '{"_ds=1&'
        dataFormat += qs.stringify(data)
        dataFormat += '&_de=1":{}}'
        config.data = dataFormat
      }
    } else {
      config.method = 'get'
    }

    // get request URL
    config.url = urlRequestGet(config.url)

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    const res = response.data

    if (response.status !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }

    if (res.status === 'error' || res.status === 'fail') {
      Message({
        message: res.msg || 'Post Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.msg || 'Post Error'))
    }

    if (res.logout === true) {
      Message({
        message: res.reason || 'Logout need auth',
        type: 'error',
        duration: 5 * 1000
      })

      store.dispatch('user/logout').then(() => {
        router.push('/login')
      })
      return Promise.reject(new Error(res.reason || 'Logout need auth'))
    }

    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default request
