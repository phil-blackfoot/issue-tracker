<template>
  <div>
    <div class="navbar-wrapper">
      <router-link to="/home">
        <img class="navbar__logo" src="../assets/icons/bug.png" />
      </router-link>

      <div class="navbar__right-pannel">
        <router-link to="/home">
          <button class="navbar__button">Back to Homepage</button>
        </router-link>
      </div>
    </div>
    <div class="server-data">
      <div>
        <h1 class="server-data__title">Server information</h1>
        <div
          class="server-data__issue"
          v-for="issue in allIssues"
          v-bind:key="issue._id"
        >
          {{ issue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Server",
  computed: mapGetters(["allIssues"]),
  methods: mapActions(["getAllIssues"]),
  async mounted() {
    this.getAllIssues();
  },
};
</script>

<style scoped>
.server-data {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f3f8;
  margin-bottom: 20px;
}
.server-data__title {
  font-size: 15px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 10px;
}
.server-data__issue {
  font-size: 12px;
  margin: 5px 10px;
}
</style>
