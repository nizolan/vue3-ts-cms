<template>
  <div class="not-found">
    <el-empty description="Not Found">
      <template #image>
        <img src="@/assets/img/not-found.svg" alt="" />
      </template>
    </el-empty>
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
