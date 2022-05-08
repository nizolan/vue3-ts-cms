<template>
  <div class="not-found"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.not-found {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/not-found.svg') no-repeat center center;
  background-size: 50% 50%;

  .title {
    font-size: 60px;
    text-align: center;
  }
}
</style>
