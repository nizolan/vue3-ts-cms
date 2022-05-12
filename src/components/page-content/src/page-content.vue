<template>
  <div class="page-content">
    <re-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" icon="Plus">新建</el-button>
        <el-button type="primary" icon="Refresh">刷新</el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button size="small" type="text" icon="Edit">编辑</el-button>
          <el-button class="del-btn" size="small" type="text" icon="Delete">
            删除
          </el-button>
        </div>
      </template>
    </re-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { useStore } from '@/store'
import ReTable from '@/base-ui/table'

export default defineComponent({
  components: {
    ReTable
  },
  props: {
    contentTableConfig: {
      type: Object as PropType<any>,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    return {
      dataList
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;

  .handler-btns {
    .el-icon {
      margin: 0 2px;
    }
  }

  .del-btn {
    color: #ff0000;
  }
  .del-btn:hover,
  .del-btn:focus {
    color: var(--el-color-danger-light-3);
  }
}
</style>
