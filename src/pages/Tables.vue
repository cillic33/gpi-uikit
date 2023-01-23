<template>
  <div>
    <h1>Tables</h1>
    <hr>

    <h2>Table with search and sort</h2>
    <form id="search">
      Search <input name="query" v-model="searchQuery" />
    </form>
    <br>
    <ComponentTable
        :heroes="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
    />
  </div>
</template>

<script>
import ComponentTable from "@/components/ComponentTable.vue";

export default {
  components: {
    ComponentTable,
  },
  data() {
    return {
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ],
      gridColumns: ['name', 'power'],
      searchQuery: '',
    }
  },
}
</script>
