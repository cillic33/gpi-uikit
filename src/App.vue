<script setup>
import LayoutHeader from "@/layout/LayoutHeader.vue";
import LayoutAside from "@/layout/LayoutAside.vue";
import {ref} from 'vue';

const isOpenMenu = ref(true);
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <LayoutHeader/>
  <div class="container">
    <div class="aside__toggle" @click="toggleMenu">
      <span v-if="isOpenMenu">&#5130;</span>
      <span v-else>&#5125;</span>
    </div>
    <LayoutAside :isOpenMenu="isOpenMenu"/>
    <div :class="['content', {content__full: !isOpenMenu}]">
      <router-view/>
    </div>
  </div>
</template>

<style lang="stylus">
@import "./assets/css/vars.styl"
@import "./assets/css/global.styl"
</style>
