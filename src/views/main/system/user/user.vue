<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <hy-table
        :title="title"
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
      >
        <!-- 1.header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary" icon="Plus">新建用户</el-button>
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
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import { searchFormConfig } from './config/search.config'

import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: any
  }
}

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const title = '用户列表'

    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'id', label: 'ID', minWidth: '100' },
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      { label: '操作', minWidth: '120', slotName: 'handler' }
    ]

    const showIndexColumn = true
    const showSelectColumn = true

    return {
      searchFormConfig,
      title,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style scoped lang="less">
.content {
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
