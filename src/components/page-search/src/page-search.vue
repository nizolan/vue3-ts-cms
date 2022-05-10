<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button>
            <el-icon><refresh /></el-icon>
            重置
          </el-button>
          <el-button type="primary">
            <el-icon><search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: #545457;
  font-size: 16px;
  text-align: left;
  padding: 0 50px;
}
.footer {
  text-align: right;
  padding: 0 50px 20px 0;

  .el-icon {
    padding: 0 2px;
  }
}
</style>
