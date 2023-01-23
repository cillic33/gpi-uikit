<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
      required: false,
    },
    isClose: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
  })
  const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <div :class="['input__wrap', {input__icon: icon}]">
    <input
        :type="type"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        class="input__field"
        v-model="currentModelValue"
        ref="input"
    >
    <component v-if="isClose && closeIsVisible" is="CircleClose" class="input__icon-close" @click.prevent="clearInput" />
    <component v-if="icon" :is="icon" class="input__icon-svg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeIsVisible: false,
    }
  },
  computed: {
    currentModelValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
  methods: {
    clearInput() {
      this.$emit('update:modelValue', '')
      this.closeIsVisible = false
    },
  },
  watch: {
    modelValue(value) {
      this.closeIsVisible = !!value
    },
  },
}
</script>

<style lang="stylus">
@import "../assets/css/vars.styl";

.input
  &__wrap
    display flex
    align-items center
    justify-content space-between
    width 100%
    position relative

  &__field
    font-family $font-arial-regular
    font-size 16px
    line-height 1.4
    padding 6px
    width 100%

    ^[-1]__icon &
      padding 6px 36px 6px 6px

  &__icon
    &-svg
      position absolute
      right 6px
      width 20px

    &-close
      position absolute
      right 6px
      width 20px
      cursor pointer

      &:hover
        opacity 0.8

      ^[-2]__icon &
        right 32px
</style>
