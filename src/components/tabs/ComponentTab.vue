<template>
  <div class="tabs__content" v-show="title === selTitle">
    <slot/>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  props: ['title'],
  setup() {
    const selTitle = inject('selTitle')

    return {
      selTitle,
    }
  }
}
</script>

<style scope lang="stylus">
.tabs
  &__content
    background #ffffff
    border-radius 4px
    padding 6px 12px
</style>
