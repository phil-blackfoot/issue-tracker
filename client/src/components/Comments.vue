<template>
  <transition v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal-background" @click="closePopup">
      <div class="modal comments-modal" @click.stop>
        <img
          class="modal__close-icon"
          src="../assets/icons/close.png"
          alt="Close"
          @click="closePopup"
        />
        <h1 class="modal__title">Comments</h1>
        <div class="modal__content">
          <p>{{ comment }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import * as api from "@/utils/api";
import { enter, leave } from "../utils/animations";
export default {
  name: "Comments",
  methods: {
    async closePopup() {
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
  props: ["comment"],
};
</script>

<style scoped>
.comments-modal {
  height: 280px;
  width: 520px;
}
.modal__content {
  text-align: center;
  font-size: 14px;
}
</style>
