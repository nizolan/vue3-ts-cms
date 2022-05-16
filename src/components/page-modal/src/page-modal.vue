<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="titleName"
      width="30%"
      center
      destroy-on-close
    >
      <use-form v-bind="modalConfig" v-model="formData"></use-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import UseForm from '@/base-ui/form'

export default defineComponent({
  components: {
    UseForm
  },
  props: {
    titleName: {
      type: String,
      default: '新建用户'
    },
    modalConfig: {
      type: Object,
      required: true
    },
    defalutInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defalutInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 点击确定按钮
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      // 区分新建和编辑
      if (Object.keys(props.defalutInfo).length) {
        // 编辑
        console.log('编辑')
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defalutInfo.id
        })
      } else {
        // 新建
        console.log('新建')
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
