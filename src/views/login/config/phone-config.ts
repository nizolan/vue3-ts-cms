// 编写规则
export const rules = {
  num: [
    {
      required: true,
      message: '手机号必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: '请正确输入手机号码~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码是6位数字',
      trigger: 'blur'
    }
  ]
}
