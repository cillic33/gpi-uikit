<script setup>
  import ComponentInput from "@/components/ComponentInput.vue";
</script>

<template>
  <h1 class="heading-1">Inputs</h1>
  <hr>

  <h2>Simple input</h2>
  <p>Available icons: <a href="https://element-plus.org/en-US/component/icon.html#icon-collection">https://element-plus.org/en-US/component/icon.html#icon-collection</a></p>

  <ComponentInput
      type="text"
      name="sample-input"
      id="sampleInput"
      placeholder="Enter your text"
      icon="Calendar"
      :is-close="true"
      v-model="inputValue1"
  />

  <br>

  <ComponentInput
      type="text"
      name="sample-input2"
      id="sampleInput2"
      placeholder="Enter your second text"
      :is-close="true"
      v-model="inputValue2"
  />
</template>

<script>
export default {
  data() {
    return {
      inputValue1: '',
      inputValue2: '',
    }
  },
}
</script>
