<template>
  <input
    type="text"
    placeholder="Search..."
    v-model="searchQuery"
    @keyup.enter="search"
  />
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
input {
  width: 40%;
  height: 40px;
  text-indent: 10px;
}
</style>
