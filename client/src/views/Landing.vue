<template>
  <div>
    <div class="landing-wrapper">
      <div class="landing">
        <h1 class="landing__title">Having troubles getting things done?</h1>
        <h2 class="landing__title landing__title_small">
          Try out our issue tracking app!
        </h2>
        <ul class="landing__text">
          <li>Manage unlimited number of tasks</li>
          <li>Easily categorise all your issues</li>
          <li>Free. Always.</li>
        </ul>
        <button class="landing__login-button" @click="handleLogin()">
          Sign up / Log In
        </button>
        <div class="slider">
          <Carousel
            :perPage="1"
            :centerMode="true"
            :autoplay="true"
            :autoplayTimeout="5000"
            :loop="true"
            :paginationEnabled="false"
            :speed="1500"
          >
            <Slide>
              <img
                src="../assets/landing/Dashboard.png"
                alt
                class="slider__screenshot"
              />
            </Slide>
            <Slide>
              <img
                src="../assets/landing/AllIssues.png"
                alt
                class="slider__screenshot"
              />
            </Slide>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { login } from "@/utils/auth";
import { Carousel, Slide } from "vue-carousel";
import Footer from "../components/Footer.vue";
export default {
  name: "Landing",
  methods: {
    handleLogin() {
      login();
    },
  },
  components: {
    Carousel,
    Slide,
    Footer,
  },
};
</script>

<style scoped>
.landing-wrapper {
  min-height: 100vh;
  height: 100%;
  min-width: 930px;
  box-sizing: border-box;
  background: #fff;
}
.landing {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 30px;
  background: #f0670c;
  background-image: linear-gradient(100deg, #f0670c, #eca97c);
  color: #f1f3f8;
  box-sizing: border-box;
  border-radius: 15px;
  width: 70%;
  min-width: 750px;
  max-width: 1000px;
  height: 300px;
  padding: 30px 40px;
  font-weight: 500;
  margin-bottom: 475px;
}
.landing__title {
  font-size: 34px;
}
.landing__title_small {
  font-size: 22px;
  padding: 10px 0;
}
.landing__text li {
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
}

.landing__login-button {
  position: absolute;
  top: 110px;
  right: 50px;
  border: 3px solid #2c365e;
  background: #2c365e;
  color: #f1f3f8;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 800;
  height: 40px;
  line-height: 20px;
  width: 200px;
  margin-right: 10px;
}
.landing__login-button:hover {
  color: #2c365e;
  background: #d9dff3;
  cursor: pointer;
}
.slider {
  position: absolute;
  top: 240px;
  left: 80px;
  width: 100%;
  min-width: 500px;
  max-width: 1000px;
  background: #f1f3f8;
  padding: 0;
  margin-right: 5px;
  border: 1px solid #2c365e;
  border-radius: 5px;
}
.slider__screenshot {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
</style>
