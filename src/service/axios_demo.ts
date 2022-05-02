import axios from 'axios'

// axios的实例
// 1.模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// 2.get请求，并且传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'nizolan',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log('我是get请求', res.data)
//   })

// // 3.post请求，并且传入参数
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'nizolan'
//     }
//   })
//   .then((res) => {
//     console.log('我是post请求', res.data)
//   })

// Promise本身是可以有类型
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// 4.axios的配置选项
// 4.1.全局的配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 4.2.每一个请求单独的配置
// axios
//   .get('/get', {
//     params: {
//       name: 'nizolan',
//       age: 18
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log('我是get请求', res.data)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'nizolan'
//     }
//   })
//   .then((res) => {
//     console.log('我是post请求', res.data)
//   })

// 5.axios.all ->多个请求，一起放回
axios
  .all([
    axios.get('/get', { params: { name: 'nizolan', age: 18 } }),
    axios.post('/post', { data: { name: 'nizolan', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0])
    console.log(res[1])
  })

// 6.axios的拦截器
// 请求拦截
// fn1:请求发送成功会执行的函数
// fn2:请求发生失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发生错误')
    return err
  }
)

// 响应式拦截
// fn1:数据响应成功(服务器正常的返回了数据)
// fn2:数据响应失败
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('请求发生错误')
    return err
  }
)
