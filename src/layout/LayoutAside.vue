<script setup>
  import {ref} from 'vue';

  const props = defineProps({
    isOpenMenu: {
      type: Boolean,
      required: true,
    },
  });

  const links = ref([
    {name: 'Typography', href: '/typography'},
    {name: 'Inputs', href: '/inputs'},
    {name: 'Buttons', href: '/buttons'},
    {name: 'Tabs', href: '/tabs'},
    {name: 'Charts', href: '/charts'},
    {name: 'Tables', href: '/tables'},
  ]);
</script>

<template>
  <aside :class="['aside', {aside__close: !isOpenMenu}]">
    <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.href"
        class="aside__link"
    >
      {{ link.name }}
    </router-link>
  </aside>
</template>

<style scope lang="stylus">
@import "../assets/css/vars.styl"

.aside
  position fixed
  z-index 1
  top 62px
  left 0
  width 250px
  height calc(100vh - 100px)
  padding 20px
  background $color-panel-bg
  box-shadow 0 0 10px #eee
  display flex
  flex-direction column
  gap 8px
  transition 0.2s

  &__link
    border 2px solid transparent
    border-radius 6px
    padding 4px 8px

    &.router-link-active,
    &:hover
      border-color $color-primary-hover

  &__toggle
    position fixed
    z-index 2
    top 62px
    left 0
    width 15px
    height calc(100vh - 60px)
    background $color-primary
    color #ffffff
    font-size 12px
    cursor pointer
    display flex
    align-items center
    justify-content center

  &__close
    transform translateX(-290px)
</style>

