<!-- Sidebar.vue -->
<template>
  <div class="sidebar" :class="{ show: showSidebar }">
    <div
      class="toggle-btn"
      @click="toggleSidebar"
      :class="{ show: showSidebar }"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

    <h1 class="pageBrand">Sales.</h1>

    <router-link to="/" class="nav-link" exact-active-class="exact-active-link">
      Dashboard
    </router-link>
    <router-link
      to="/labtest"
      class="nav-link"
      exact-active-class="exact-active-link"
    >
      Lab Test
    </router-link>
    <router-link
      to="/appointment"
      class="nav-link"
      exact-active-class="exact-active-link"
    >
      Appointment
    </router-link>
    <router-link
      to="/medicineorder"
      class="nav-link"
      exact-active-class="exact-active-link"
    >
      Medicine Order
    </router-link>
    <router-link
      to="/message"
      class="nav-link"
      exact-active-class="exact-active-link"
    >
      Message
    </router-link>
    <router-link
      to="/payment"
      class="nav-link"
      exact-active-class="exact-active-link"
    >
      Payment
    </router-link>
    <router-link
      to="/settings"
      class="nav-link"
      exact-active-class="exact-active-link"
    >
      Settings
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
});
</script>

<style scoped>
.pageBrand {
  padding-top: 40px;
  padding-bottom: 20px;
}

@media (min-width: 769px) {
  .pageBrand {
    padding-top: 0;
  }
}

.sidebar {
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: -250px;
  z-index: 100;
  transition: left 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .sidebar {
    left: 0;
  }

  .sidebar.show {
    left: 250px;
  }

  .toggle-btn {
    display: none;
  }
}

.sidebar.show {
  left: 0;
}

.toggle-btn {
  cursor: pointer;
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 3;
}

@media (max-width: 768px) {
  .sidebar {
    left: -250px;
  }

  .sidebar.show {
    left: 0;
  }

  .toggle-btn {
    display: block;
  }
}

.toggle-btn span {
  background-color: #7e99ac;
  display: block;
  height: 3px;
  margin-bottom: 6px;
  transition: 0.4s;
  width: 30px;
}

.toggle-btn span:nth-child(2) {
  width: 20px;
}

.nav-link {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #555;
}

.exact-active-link {
  background-color: #4caf50;
}

.toggle-btn.show span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle-btn.show span:nth-child(2) {
  opacity: 0;
}

.toggle-btn.show span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
