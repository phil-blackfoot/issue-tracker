<template>
  <div class="footer">
    <a href="mailto:philipchernonogdev@gmail.com" target="_blank">
      <img
        class="footer__contact-icon"
        src="https://img.icons8.com/fluent-systems-regular/48/000000/email.png"
      />
    </a>

    <a href="https://github.com/phil-blackfoot" target="_blank">
      <img
        class="footer__contact-icon"
        src="https://img.icons8.com/material-outlined/48/000000/github.png"
      />
    </a>
    <a href="https://t.me/phil_blackfoot" target="_blank">
      <img
        class="footer__contact-icon"
        src="https://img.icons8.com/ios/50/000000/telegram-app.png"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  white-space: nowrap;
  width: 100%;
  height: 39px;
  background: #bbcde5;
  display: flex;
  justify-content: center;
  border-top: 1px solid #4d4ee3;
}
.footer__contact-icon {
  height: 20px;
  margin: 0 5px;
  margin-top: 9px;
}
</style>
