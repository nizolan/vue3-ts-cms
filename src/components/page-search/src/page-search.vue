<template>
  <div class="page-search">
    <re-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </re-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ReForm from '@/base-ui/form'
import { keysOf } from 'element-plus/lib/utils'

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
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    const handleResetClick = () => {
      formData.value = formOriginData
    }

    // 点击充值
    return {
      formData,
      handleResetClick
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
