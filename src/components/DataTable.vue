<template>
  <div>
    <div class="searchContainer">
      <SearchInput />
      <div class="detailsWrapper">
        <div class="notificationsWrapper">
          <Notifications />
        </div>
        <div class="avatarWrapper">
          <Avatar />
        </div>
      </div>
    </div>
    <DataTableContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataTableContent from "./DataTableContent.vue";
import SearchInput from "../components/SearchInput.vue";
import Notifications from "../components/Notifications.vue";
import Avatar from "../components/Avatar.vue";

export default defineComponent({
  components: {
    DataTableContent,
    SearchInput,
    Notifications,
    Avatar,
  },
});
</script>

<style scoped>
.searchContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

@media (min-width: 768px) {
  .searchContainer {
    margin-top: 0px;
  }
}

.detailsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.notificationsWrapper,
.avatarWrapper {
  margin: 0 5px;
}
</style>
