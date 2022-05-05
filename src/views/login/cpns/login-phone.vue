<template>
  <div class="login-phone">
    <el-form label-width="80px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button
            type="primary"
            class="get-code-btn"
            :disabled="getCodeBtnDisable"
            @click="getCodeBtn"
            >{{ codeBtnValue }}</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/phone-config'

import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const getCodeBtnDisable = ref(false)
    // eslint-disable-next-line no-undef
    const timer = ref<NodeJS.Timer | undefined>(undefined)
    const count = ref(0)
    const codeBtnValue = ref('获取验证码')
    // 初始化验证码

    const store = useStore()
    const phone = reactive({
      num: localCache.getCache('num') ?? '',
      code: localCache.getCache('code') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const getCodeBtn = () => {
      const TIME_COUNT = 60
      if (!timer.value) {
        formRef.value?.validateField('num', (valid) => {
          if (valid) {
            console.log('手机号合法，发送验证码')

            // 调用获取验证码的接口
            // 向对应的手机号发送验证码

            // 倒计时
            getCodeBtnDisable.value = true
            count.value = TIME_COUNT
            timer.value = setInterval(() => {
              if (count.value > 0 && count.value <= TIME_COUNT) {
                count.value--
                codeBtnValue.value = '重新获取' + count.value + 's'
              } else {
                getCodeBtnDisable.value = false
                clearInterval(Number(timer.value))
                timer.value = undefined
                codeBtnValue.value = '获取验证码'
                // 验证码更新
              }
            }, 1000)
          }
        })
      }
    }

    const phoneAction = () => {
      console.log('正在通过phone开始登录~')
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('校对验证码')
          localCache.setCache('num', phone.num)
          localCache.setCache('code', phone.code)

          store.dispatch('login/phoneLoginAction', { ...phone })
        } else {
          console.log('请输入正确的手机号或者验证码')
        }
      })
    }

    return {
      getCodeBtnDisable,
      timer,
      count,
      codeBtnValue,
      phone,
      rules,
      getCodeBtn,
      formRef,
      phoneAction
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-code-btn {
  margin-left: 8px;
}
</style>
