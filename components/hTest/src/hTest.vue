<template>
  <div @click="handleClick">这是测试组件：<slot></slot></div>
</template>

<script>
export default {
  name: 'hTest',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>