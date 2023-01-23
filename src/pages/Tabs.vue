<template>
  <ComponentTabsWrapper>
    <ComponentTab title="Tab 1">
      <component is="ComponentTabContent01"></component>
    </ComponentTab>
    <ComponentTab title="Tab 2">
      Hello from Tab 2
    </ComponentTab>
    <ComponentTab title="Tab 3">
      Hello from Tab 3
    </ComponentTab>
  </ComponentTabsWrapper>
</template>

<script>
import ComponentTabsWrapper from "@/components/tabs/ComponentTabsWrapper.vue"
import ComponentTab from "@/components/tabs/ComponentTab.vue"
import ComponentTabContent01 from "@/components/tabs/ComponentTabContent01.vue";

export default {
  components: {
    ComponentTab,
    ComponentTabsWrapper,
    ComponentTabContent01,
  },
}
</script>
