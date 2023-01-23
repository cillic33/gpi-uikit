<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
          v-for="title in titles"
          :key="title"
          :class="{selected: title === selTitle}"
          @click="selTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script>
import { ref, provide } from 'vue'

export default {
  setup(props, { slots }) {
    const titles = ref(slots.default().map((tab) => tab.props.title ))
    const selTitle = ref(titles.value[0])

    provide('selTitle', selTitle)

    return {
      titles,
      selTitle,
    }
  }
}
</script>

<style scope lang="stylus">
@import "../../assets/css/vars.styl"

.tabs
  &__header
    display flex
    gap 2px
    list-style none
    cursor pointer
    padding 0
    margin 0 0 2px 0

    li
      padding 6px 12px
      background #e0e0e0
      border-radius 4px

      &:hover
        opacity 0.8

      &.selected
        background $color-primary
        color #fff
</style>
