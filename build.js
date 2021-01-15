// deno-lint-ignore-file
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";

const Home = Vue.component("home", {
  template: /*html*/ `  <div class="header">    <h1 class="title">Hi.</h1>    <h3 class="name line anim-typewriter">      My name is {{ Name }}      <span class="nick-name">{{ NickName }}.</span>    </h3>    <div class="description-div">      <p class="description ">        I am a software developer with an interest in web development and with        knowledge in        <span class="text-highlight"              v-for="(lang, index) in Langs"              :key="lang + index">          {{ lang }}        </span>        experience in frameworks        <span class="text-highlight"              v-for="(framework, index) in Frameworks"              :key="framework + index">          {{ framework }}        </span>        and enthusiastic and collaborative in the        <span class="text-highlight">Deno Js</span>        environment.      </p>    </div>    <div class="contact-me">      <div class="logo-card">        <a class="social" target="_blank"            v-for="(social, index) in Socials"            :href="social.url"            :key="index">          {{ social.name }}        </a>      </div>    </div>  </div>`,
  name: "home",
  props: { Name: String, NickName: String },
  data() {
    return {
      Socials: [
        { name: "Github", url: "https://github.com/buttercubz" },
        { name: "Instagram", url: "https://www.instagram.com/buttercubz" },
        { name: "Twitter", url: "https://twitter.com/buttercubz" },
        { name: "Team", url: "https://crewdevio.mod.land/team" },
      ],
      Langs: ["Javascript", "Typescript", "Golang", "Python", "Dart"],
      Frameworks: ["Express", "Oak", "React", "Vue"],
    };
  },
});

const App = new Vue({
  template: /*html*/ `  <div class="app">    <Home Name="Erick Sosa" NickName="(buttercubz)" />  </div>`,
  name: "app",
  components: { Home },
});

App.$mount("#app");
