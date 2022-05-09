import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import './service'

import App from './App.vue'

import router from './router'
import store from './store'
// import hyRequest from './service'
import { setupStore } from './store'

const app = createApp(App)

// 注册elments-plus/其他
app.use(globalRegister)
app.use(store)
setupStore()

// path:/user => user
app.use(router)

app.mount('#app')

// console.log(
//   '%c当前环境：',
//   'color:blue',
//   process.env.VUE_APP_BASE_URL,
//   process.env.VUE_APP_BASE_NAME
// )

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的respond')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest.get<DataType>({
//   url: '/home/multidata',
//   showLoading: false
// })
// .then((res) => {
//   console.log(res.data)
//   console.log(res.returnCode)
//   console.log(res.success)
// })
