<template>
  <div class="not-found">
    <el-empty
      description="Not Found"
      :image="require('@/assets/img/not-found.svg')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
