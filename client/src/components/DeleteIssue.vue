<template>
  <transition v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal-background" @click="closePopup()">
      <div class="modal delete-issue-modal" @click.stop>
        <img
          class="modal__close-icon"
          src="../assets/icons/close.png"
          alt="Close"
          @click="closePopup"
        />
        <h1 class="modal__title">Delete issue</h1>
        <div class="modal__content">
          <p>Are you sure that you want to permanently delete the issue?</p>
          <p>This cannot be undone.</p>
        </div>
        <button class="modal__submit-button" @click="deleteIssue">
          Delete
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from "@/utils/api";
import { enter, leave } from "../utils/animations";
export default {
  name: "DeleteIssue",
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    async deleteIssue() {
      await api.deleteIssue(this.currentIssue._id);
      await this.$store.dispatch("getAllIssues");
      this.closePopup();
    },
    // Animations
    enter(el) {
      enter(el);
    },
    leave(el, done) {
      leave(el, done);
    },
  },
  props: ["currentIssue"],
};
</script>

<style scoped>
.delete-issue-modal {
  height: 250px;
  width: 500px;
}
.modal__content {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 60px;
}
.modal__content p {
  padding: 3px 0;
}
</style>
