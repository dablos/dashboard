<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
import DataTable from "../components/DataTable.vue";

export default defineComponent({
  components: {
    Sidebar,
    DataTable,
  },
});
</script>

<style scoped>
#app {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}

@media (min-width: 768px) {
  .content {
    margin-left: 250px;
  }
}
</style>
