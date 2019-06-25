<template>
  <button
    :disabled="disabled"
    :class="[
      'h-button-default',
      {
        'h-button-disable': disabled,
        'h-button-active': active,
        'h-button-full-width': fullWidth,
        'h-button-square': square,
        'h-button-flat': flat
      }
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'hButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    active: Boolean,
    fullWidth: Boolean,
    square: Boolean,
    flat: Boolean,
    className: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/reset.css';
.h-button-default {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: auto;
  padding: 0 0.5rem;
  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
  &:active {
    box-shadow: rgb(136, 140, 143) 1px 1px 0px 1px inset, rgb(223, 224, 227) -1px -1px 0px 1px inset;
  }
  &.h-button-active {
    cursor: default;
    padding-top: 2px;
    box-shadow: rgb(136, 140, 143) 1px 1px 0px 1px inset, rgb(223, 224, 227) -1px -1px 0px 1px inset;
  }
  &.h-button-full-width {
    width: 100%;
  }
  &.h-button-disable {
    cursor: not-allowed;
    text-shadow: 1px 1px #ffffff;
  }
  &.h-button-square {
    width: 35px;
    padding: 0;
  }
  &.h-button-flat {
    height: 27px;
    box-shadow: none;
    border: none;
    &:active {
      padding-top: 2px;
    }
  }
}
</style>