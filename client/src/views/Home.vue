<template>
  <div class="home-wrapper">
    <Navbar v-on:switchTab="switchTab($event)" />

    <DeleteIssue
      :currentIssue="currentIssue"
      v-if="deleteIssueIsVisible"
      v-on:closePopup="popupDeleteIssue($event)"
    />
    <EditIssue
      :issue="currentIssue"
      v-if="editIssueIsVisible"
      v-on:closePopup="popupEditIssue($event)"
    />
    <component
      v-bind:is="currentTab"
      v-on:openDeleteModal="openDeleteModal($event)"
      v-on:openEditModal="openEditModal($event)"
    ></component>
  </div>
</template>

<script>
require("dotenv").config();
import Navbar from "../components/Navbar.vue";
import AllIssues from "../components/AllIssues.vue";
import Dashboard from "../components/Dashboard.vue";
import EditIssue from "../components/EditIssue.vue";
import DeleteIssue from "../components/DeleteIssue.vue";
export default {
  name: "Home",
  data() {
    return {
      currentTab: "Dashboard",
      deleteIssueIsVisible: false,
      editIssueIsVisible: false,
      currentIssue: {},
    };
  },
  methods: {
    switchTab(newTab) {
      this.currentTab = newTab;
    },

    popupDeleteIssue() {
      this.deleteIssueIsVisible = !this.deleteIssueIsVisible;
    },
    popupEditIssue() {
      this.editIssueIsVisible = !this.editIssueIsVisible;
    },
    openEditModal(issue) {
      this.currentIssue = issue;
      this.popupEditIssue();
    },
    openDeleteModal(issue) {
      this.currentIssue = issue;
      this.popupDeleteIssue();
    },
  },
  components: {
    Navbar,
    Dashboard,
    AllIssues,
    DeleteIssue,
    EditIssue,
  },
};
</script>

<style>
.home-wrapper {
  min-width: 850px;
}
</style>
