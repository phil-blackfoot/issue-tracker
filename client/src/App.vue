<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";
export default class App extends Vue {}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=swap");

html,
body {
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Roboto", sans-serif;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #f1f3f8;
  margin: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}
div,
p,
h1,
h2,
a {
  margin: 0;
}
</style>
