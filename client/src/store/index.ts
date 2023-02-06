import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: [],
  },
  mutations: {
    updateIssues(state, issues) {
      state.issues = issues;
    },
  },
  actions: {
    async getAllIssues(ctx) {
      const issues = await api.getIssues();
      ctx.commit("updateIssues", issues);
    },
  },
  getters: {
    allIssues(state) {
      return state.issues;
    },
    issuesCount(state) {
      return state.issues.length;
    },

    // Get issues by status
    statusToDo(state) {
      return state.issues.filter(issue => issue.status === "To do");
    },
    statusInProgress(state) {
      return state.issues.filter(issue => issue.status === "In progress");
    },
    statusDone(state) {
      return state.issues.filter(issue => issue.status === "Done");
    },
  },
});
