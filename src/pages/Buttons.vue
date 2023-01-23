<script setup>
import ComponentButton from "@/components/ComponentButton.vue";

const eventForButton = () => {
  alert('Clicked on button');
}
</script>

<template>
  <h1 class="heading-1">Buttons</h1>
  <hr>

  <h2 class="heading-2">Type</h2>
  <div class="line">
    <ComponentButton label="Заявка на расходование за счет след. кв." type="primary" />
    <ComponentButton label="Заявка на расходование за счет след. кв." type="secondary" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <ComponentButton label="Сформировать заявку" type="primary" :rounded="true" />
    <ComponentButton label="Сформировать заявку" type="secondary" :rounded="true" />
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <ComponentButton label="Посмотреть заявки" type="primary" :outlined="true" />
    <ComponentButton label="Посмотреть заявки" type="secondary" :outlined="true" />
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <ComponentButton label="Посмотреть заявки" type="primary" :disabled="true" />
    <ComponentButton label="Посмотреть заявки" type="secondary" :disabled="true" />
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <ComponentButton label="Обычная кнопка" type="primary" size="normal" />
    <ComponentButton label="Большая кнопка" type="primary" size="large" />
  </div>
  <h2 class="heading-2">Icon</h2>
  <p>Available icons: <a href="https://element-plus.org/en-US/component/icon.html#icon-collection">https://element-plus.org/en-US/component/icon.html#icon-collection</a></p>
  <div class="line">
    <ComponentButton type="primary" icon="Search" />
    <ComponentButton type="secondary" icon="Edit" />
  </div>
  <h2 class="heading-2">Icon & Label</h2>
  <div class="line">
    <ComponentButton type="primary" icon="CircleClose" label="Отказано" />
    <ComponentButton type="secondary" icon="CircleCheck" label="Согласовано" />
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <ComponentButton label="Кнопка" type="primary" @click="eventForButton" />
    <ComponentButton type="primary" icon="CirclePlus" @click="eventForButton" />
  </div>

</template>

<style lang="stylus" scoped>
.line
  display flex
  flex-wrap wrap
  align-items center
  gap 10px
</style>
