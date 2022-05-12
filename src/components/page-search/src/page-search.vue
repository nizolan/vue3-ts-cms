<template>
  <div class="page-search">
    <re-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button icon="Refresh">重置</el-button>
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </re-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ReForm from '@/base-ui/form'

export default defineComponent({
  components: {
    ReForm
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
  font-size: 20px;
  font-weight: 700;
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
