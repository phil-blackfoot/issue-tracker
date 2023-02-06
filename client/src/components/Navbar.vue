<template>
  <div class="navbar-wrapper">
    <img class="navbar__logo" src="../assets/icons/bug.png" />
    <button class="navbar__button" @click="switchTab('Dashboard')">
      Dashboard
    </button>
    <button class="navbar__button" @click="switchTab('AllIssues')">
      All issues
    </button>
    <router-link to="/server">
      <button class="navbar__button">View server data</button>
    </router-link>
    <div class="navbar__right-pannel">
      <button class="navbar__button" @click="handleLogout()">Log out</button>
    </div>
  </div>
</template>

<script>
import { logout } from "@/utils/auth";
export default {
  name: "Navbar",
  methods: {
    switchTab(tabName) {
      this.$emit("switchTab", tabName);
    },
    handleLogout() {
      logout();
    },
  },
};
</script>

<style>
.navbar-wrapper {
  height: 39px;
  background: #2c365e;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #303030;
}
.navbar__logo {
  height: 30px;
  margin: 5px 10px;
  transform: rotate(30deg);
}
.navbar__button {
  height: 39px;
  background: inherit;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  font-weight: 500;
  border: 0;
  color: #f1f3f8;
}
.navbar__button:hover {
  background: #6b6be0;
  cursor: pointer;
}
.navbar__right-pannel {
  background: #2c365e;
  flex-grow: 100;
  display: flex;
  flex-direction: row-reverse;
}
</style>
