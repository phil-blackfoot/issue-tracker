<template>
  <div class="dashboard-wrapper">
    <section class="dashboard-section">
      <div class="section-header">
        <div>
          <h3 class="section-header__title">To do</h3>
          <div class="section-header__issues-count">
            <p v-if="statusToDoIssuesLength === 0">
              You have not yet planned any tasks to do
            </p>
            <p v-else-if="statusToDoIssuesLength === 1">
              You have 1 issue in your backlog
            </p>
            <p v-else>
              You have {{ statusToDoIssuesLength }} issues in your backlog
            </p>
          </div>
        </div>
        <img
          src="../assets/icons/plus.png"
          class="section-header__add-issue-button"
          @click="openAddModal('To do')"
          alt="Add issue"
        />
      </div>
      <div class="section-content">
        <div class="issue" v-for="issue in statusToDoIssues" :key="issue._id">
          <p class="issue__update-date">
            Last updated at: {{ getStringFromDate(issue.updatedAt) }}
          </p>
          <p class="issue__title">{{ issue.title }}</p>
          <p class="issue__comments" v-if="issue.comments">
            {{ issue.comments }}
          </p>
          <div class="issue__last-line-container">
            <div class="issue__priority">
              <span>Priority:</span>
              <span
                v-if="issue.priority === 'High'"
                class="issue__priority-status issue__priority-status_high"
                >High</span
              >
              <span
                v-else-if="issue.priority === 'Medium'"
                class="issue__priority-status issue__priority-status_medium"
                >Medium</span
              >
              <span
                v-else
                class="issue__priority-status issue__priority-status_low"
                >Low</span
              >
            </div>
            <div class="issue__icons-container">
              <img
                class="issue__modify-icon"
                src="../assets/icons/marker.png"
                alt="Edit"
                @click="openEditModal(issue)"
              />
              <img
                class="issue__modify-icon"
                src="../assets/icons/delete.png"
                alt="Delete"
                @click="openDeleteModal(issue)"
              />
              <img
                class="issue__modify-icon"
                src="../assets/icons/next.png"
                alt="Move to current"
                title="Move to current"
                @click="moveToInProgress(issue)"
              />
              <img
                class="issue__modify-icon"
                src="../assets/icons/tick.png"
                alt="Mark as done"
                title="Mark as done"
                @click="moveToDone(issue)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="dashboard-section">
      <div class="section-header">
        <div>
          <h3 class="section-header__title">In progress</h3>
          <div class="section-header__issues-count">
            <p v-if="statusInProgressIssuesLength === 0">
              High time to start working!
            </p>
            <p v-else-if="statusInProgressIssuesLength === 1">
              Сurrently working on 1 issue
            </p>
            <p v-else>
              Currently working on
              {{ statusInProgressIssuesLength }} issues
            </p>
          </div>
        </div>
        <img
          src="../assets/icons/plus.png"
          class="section-header__add-issue-button"
          @click="openAddModal('In progress')"
          alt="Delete"
        />
      </div>
      <div class="section-content">
        <div
          class="issue"
          v-for="issue in statusInProgressIssues"
          :key="issue._id"
        >
          <p class="issue__update-date">
            Last updated at: {{ getStringFromDate(issue.updatedAt) }}
          </p>
          <p class="issue__title">{{ issue.title }}</p>
          <p class="issue__comments" v-if="issue.comments">
            {{ issue.comments }}
          </p>
          <div class="issue__last-line-container">
            <div class="issue__priority">
              <span>Priority:</span>
              <span
                v-if="issue.priority === 'High'"
                class="issue__priority-status issue__priority-status_high"
                >High</span
              >
              <span
                v-else-if="issue.priority === 'Medium'"
                class="issue__priority-status issue__priority-status_medium"
                >Medium</span
              >
              <span
                v-else
                class="issue__priority-status issue__priority-status_low"
                >Low</span
              >
            </div>
            <div class="issue__icons-container">
              <img
                class="issue__modify-icon"
                src="../assets/icons/marker.png"
                alt="Edit"
                @click="openEditModal(issue)"
              />
              <img
                class="issue__modify-icon"
                src="../assets/icons/delete.png"
                alt="Delete"
                @click="openDeleteModal(issue)"
              />
              <img
                class="issue__modify-icon"
                src="../assets/icons/tick.png"
                alt="Mark as done"
                title="Mark as done"
                @click="moveToDone(issue)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="dashboard-section">
      <div class="section-header">
        <div>
          <h3 class="section-header__title">Done</h3>
          <div class="section-header__issues-count">
            <p v-if="statusDoneIssuesLength === 0">
              You have not yet finished any tasks...
            </p>
            <p v-else-if="statusDoneIssuesLength === 1">
              You have finished 1 task!
            </p>
            <p v-else>
              {{ statusDoneIssuesLength }} tasks finished. Keep it up!
            </p>
          </div>
        </div>
        <img
          src="../assets/icons/plus.png"
          class="section-header__add-issue-button"
          @click="openAddModal('Done')"
          alt="Add issue"
        />
      </div>
      <div class="section-content">
        <div class="issue" v-for="issue in statusDoneIssues" :key="issue._id">
          <p class="issue__update-date">
            Last updated at: {{ getStringFromDate(issue.updatedAt) }}
          </p>
          <p class="issue__title">{{ issue.title }}</p>
          <p class="issue__comments" v-if="issue.comments">
            {{ issue.comments }}
          </p>
          <div class="issue__last-line-container">
            <div class="issue__priority">
              <span>Priority:</span>
              <span>
                <svg class="issue__priority-circle" height="8" width="8">
                  <circle
                    v-if="issue.priority === 'High'"
                    cx="4"
                    cy="4"
                    r="4"
                    fill="#ff5044"
                  />
                  <circle
                    v-if="issue.priority === 'Medium'"
                    cx="4"
                    cy="4"
                    r="4"
                    fill="#fac801"
                  />
                  <circle
                    v-if="issue.priority === 'Low'"
                    cx="4"
                    cy="4"
                    r="4"
                    fill="#a4d166"
                  />
                </svg>
              </span>
            </div>
            <div class="issue__icons-container">
              <img
                class="issue__modify-icon"
                src="../assets/icons/marker.png"
                alt="Edit"
                @click="openEditModal(issue)"
              />
              <img
                class="issue__modify-icon"
                src="../assets/icons/delete.png"
                alt="Delete"
                @click="openDeleteModal(issue)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <AddIssue
      v-if="addIssueIsVisible"
      :newIssueStatus="newIssueStatus"
      v-on:closePopup="popupAddIssue($event)"
    />
    <div v-if="isLoading" class="spinner">
      <vue-simple-spinner
        :size="30"
        :line-size="4"
        :speed="1"
        line-fg-color="#5B831E"
        line-bg-color="#f1f3f8"
      ></vue-simple-spinner>
    </div>
  </div>
</template>

<script>
import { getStringFromDate } from "../utils/dates";
import { mapGetters, mapActions } from "vuex";
import AddIssue from "./AddIssue.vue";
import * as api from "@/utils/api";
export default {
  name: "Dashboard",
  data() {
    return {
      addIssueIsVisible: false,
      newIssueStatus: "To do",
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters([
      "allIssues",
      "statusToDo",
      "statusInProgress",
      "statusDone",
    ]),
    statusToDoIssues() {
      const todoIssues = this.sortByUpdateTime(this.statusToDo);
      return this.sortByPriority(todoIssues);
    },
    statusToDoIssuesLength() {
      return this.statusToDoIssues.length;
    },

    statusInProgressIssues() {
      const issuesInProgress = this.sortByUpdateTime(this.statusInProgress);
      return this.sortByPriority(issuesInProgress);
    },
    statusInProgressIssuesLength() {
      return this.statusInProgressIssues.length;
    },

    statusDoneIssues() {
      return this.sortByUpdateTime(this.statusDone);
    },
    statusDoneIssuesLength() {
      return this.statusDoneIssues.length;
    },
  },
  methods: {
    ...mapActions(["getAllIssues", "deleteIssue"]),

    getStringFromDate(date) {
      return getStringFromDate(date);
    },

    // Modals
    openAddModal(status = "To do") {
      this.newIssueStatus = status;
      this.popupAddIssue();
    },
    popupAddIssue() {
      this.addIssueIsVisible = !this.addIssueIsVisible;
    },
    openDeleteModal(issue) {
      this.$emit("openDeleteModal", issue);
    },
    openEditModal(issue) {
      this.$emit("openEditModal", issue);
    },

    // Move to different section (alter status)
    async moveToInProgress(issue) {
      issue.status = "In progress";
      await api.editIssue(issue);
      await this.$store.dispatch("getAllIssues");
    },
    async moveToDone(issue) {
      issue.status = "Done";
      await api.editIssue(issue);
      await this.$store.dispatch("getAllIssues");
    },

    // Sorting issues
    sortByPriority(array) {
      const highPriority = array.filter(issue => issue.priority === "High");
      const mediumPriority = array.filter(issue => issue.priority === "Medium");
      const lowPriority = array.filter(issue => issue.priority === "Low");
      return highPriority.concat(mediumPriority, lowPriority);
    },
    sortByUpdateTime(array) {
      return array.sort((a, b) => b.updatedAt - a.updatedAt);
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.getAllIssues();
    this.isLoading = false;
  },
  components: {
    AddIssue,
  },
};
</script>

<style>
.dashboard-wrapper {
  background: #f1f3f8;
  width: 100%;
  min-height: calc(100vh - 40px);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
}
.dashboard-section {
  box-sizing: border-box;
  flex-grow: 1;
  min-height: 60px;
  min-width: 250px;
  max-width: 22%;
  border-radius: 5px;
  background: #2c365e;
  color: #f1f3f8;
  margin: 10px 5px;
  padding: 8px;
  padding-top: 5px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  margin-bottom: 5px;
}
.section-header__add-issue-button {
  height: 23px;
  width: 23px;
  display: flex;
  margin: auto 3px;
}
.section-header__add-issue-button:hover {
  height: 25px;
  width: 25px;
  margin: auto 2px;
  cursor: pointer;
}
.section-header__title {
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  margin: 0;
}
.section-header__issues-count {
  height: 15px;
  line-height: 15px;
  font-size: 11px;
}
.section-content {
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  color: #303030;
  /* Sroll bars design (firefox) */
  scrollbar-width: thin;
  scrollbar-color: #bbcde5 transparent;
}

/* Sroll bars design (webkit) */
.section-content::-webkit-scrollbar {
  width: 7px;
}
.section-content::-webkit-scrollbar-thumb {
  background-color: #bbcde5;
  border-radius: 10px;
}

/* Points styles */
.issue {
  border-radius: 3px;
  background: #f5f7f8;
  margin-bottom: 6px;
  padding: 5px 8px;
}
.issue__update-date {
  font-size: 10px;
  font-style: italic;
  text-align: right;
  color: #757474;
}
.issue__title {
  font-size: 13px;
  font-weight: 500;
  padding: 7px 0;
}
.issue__comments {
  font-size: 12px;
  padding-bottom: 5px;
  font-style: italic;
}
.issue__last-line-container {
  display: flex;
  justify-content: space-between;
  height: 17px;
}
.issue__priority {
  font-size: 10px;
  line-height: 17px;
  display: inline-block;
}
.issue__priority-status {
  padding: 1px 5px;
  margin-left: 3px;
  border-radius: 3px;
}
.issue__priority-circle {
  margin: auto 3px;
}
.issue__priority-status_high {
  background: #ff5044;
  font-weight: 500;
}
.issue__priority-status_medium {
  background: #fac801;
}
.issue__priority-status_low {
  background: #a4d166;
}

.issue__icons-container {
  display: flex;
}
.issue__modify-icon {
  box-sizing: border-box;
  padding: 0;
  margin: 1px 9px;
  margin-right: 1px;
  height: 15px;
  width: 15px;
}
.issue__modify-icon:hover {
  height: 17px;
  width: 17px;
  margin: 0 8px;
  margin-right: 0;
  cursor: pointer;
}

.spinner {
  z-index: 10;
  left: 0;
  margin-top: -50px;
  position: fixed;
  top: 50%;
  width: 100%;
}
</style>
