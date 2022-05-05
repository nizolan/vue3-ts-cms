// 编写规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^[A-Za-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^[A-Za-z0-9]{6,18}$/,
      message: '密码必须是6~18个字母或者数字',
      trigger: 'blur'
    }
  ]
}
