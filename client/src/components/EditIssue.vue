<template>
  <transition v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal-background" @click="closePopup">
      <div class="modal modal_large" @click.stop>
        <img
          class="modal__close-icon"
          src="../assets/icons/close.png"
          alt="Close"
          @click="closePopup"
        />
        <h1 class="modal__title">Edit issue</h1>
        <div class="input-form">
          <!-- title -->
          <textarea
            type="text"
            class="modal__inputs modal__input-title"
            v-model="issue.title"
            placeholder="Enter your issue here..."
            maxlength="200"
          />
          <!-- status -->
          <div class="modal__input-status">
            <div>
              <input
                type="radio"
                id="to-do"
                value="To do"
                v-model="issue.status"
              />
              <label for="to-do">To do</label>
            </div>
            <div>
              <input
                type="radio"
                id="in-progress"
                value="In progress"
                v-model="issue.status"
              />
              <label for="in-progress">In progress</label>
            </div>
            <div>
              <input
                type="radio"
                id="done"
                value="Done"
                v-model="issue.status"
              />
              <label for="done">Done</label>
            </div>
          </div>
          <!-- comments -->
          <div class="modal__inputs-container">
            <label for="modal__input-comments">Comments:</label>
            <textarea
              type="text"
              class="modal__inputs modal__input-comments"
              v-model="issue.comments"
              placeholder="Enter your comments..."
              maxlength="600"
            />
          </div>
          <!-- prioriy -->
          <div class="modal__inputs-container modal__input-priority-container">
            <label for="modal__input-priority">Priority:</label>
            <select v-model="issue.priority" class="modal__input-priority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <!-- button -->
          <button class="modal__submit-button" @click="editIssue">Edit</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from "@/utils/api";
import { enter, leave } from "../utils/animations";
export default {
  name: "EditIssue",
  methods: {
    async editIssue() {
      await api.editIssue(this.issue);
      await this.$store.dispatch("getAllIssues");
      this.closePopup();
    },
    async closePopup() {
      await this.$store.dispatch("getAllIssues");
      this.$emit("closePopup");
    },
    // Animations
    enter(el) {
      enter(el);
    },
    leave(el, done) {
      leave(el, done);
    },
  },
  props: ["issue"],
};
</script>
