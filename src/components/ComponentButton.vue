<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'primary',
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    outlined: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      default: 'normal',
    },
  });

  const emit = defineEmits(['click']);
  const clickOnButton = () => {
    emit('click');
  };
</script>

<template>
  <button
      type="button"
      :class="['btn', `btn_${type}`, {btn_rounded: rounded}, {btn_outlined: outlined}, {btn_icon: icon}, {btn_large: size === 'large'}]"
      :disabled="disabled"
      @click="clickOnButton"
  >
    <component v-if="icon" :is="icon"></component>
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<style lang="stylus" scoped>
@import "../assets/css/vars.styl";

.btn
  max-width 230px
  min-height 40px
  font-family $font-arial-regular
  font-size 16px
  line-height 1.4
  padding 6px 26px
  border-radius 4px
  cursor pointer

  &_primary
    background $color-primary
    border 1px solid $color-primary
    color #ffffff

    &:enabled:hover
      background $color-primary-hover

  &_secondary
    background $color-second
    border 1px solid $color-second
    color #ffffff

    &:enabled:hover
      background $color-second-hover

  &_rounded
    border-radius 96px

  &_outlined
    background transparent
    color #000000

    &:enabled:hover
      color #ffffff !important

    &.btn_primary
      color $color-primary

    &.btn_secondary
      color $color-second

  &:disabled
    opacity 0.7
    cursor default

  &_icon
    display flex
    align-items center
    justify-content center
    gap 10px

    svg
      width 20px

  &_large
    min-height 40px
    padding 12px 36px
</style>
