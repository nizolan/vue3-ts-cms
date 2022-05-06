// 1.方式一：手动切换（不推荐）
// const BASE_URL = 'http://nizolan.org/dev'
// const BASE_NAME = 'nizolan'

// const BASE_URL = 'http://nizolan.org/pro'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://nizolan.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV（最常见）
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://nizolan.org/pro'
} else {
  BASE_URL = 'http://nizolan.org/test'
}

export { BASE_URL, TIME_OUT }

// 3.也可以创建三个文件：
// .env.development
// .env.production
// .env.test
