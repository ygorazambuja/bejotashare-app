<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="text-decoration: none">
        <img src="../assets/letter-b.png" width="30" height="30" alt>
        <span class="navbar-brand-title">ejotashare</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active"></li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <button class="btn btn-danger logout" v-on:click="doLogout">Log out</button>
      </div>
    </nav>
    <div>
      <carousel
        :autoplay="true"
        :autoplayTimeout="1000"
        :scrollPerPage="true"
        :navigationEnabled="true"
        paginationSize="3"
      >
        <slide>
          <img src="../assets/img/slide1.jpg" alt style="width: 414px">
        </slide>
        <slide>
          <img src="../assets/img/slide2.jpeg" alt style="width: 414px">
        </slide>
        <slide>
          <img src="../assets/img/slide3.jpg" alt style="width: 414px">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

import CardContainer from "../components/CardContainer";
export default {
  components: {
    "card-container": CardContainer
  },
  name: "Home",
  data: function(params) {
    return {
      username: "",
      email: localStorage.email,
      intervalo: null,
      token: null
    };
  },
  methods: {
    doLogout: function() {
      localStorage.setItem("id", "");
      localStorage.setItem("token", "");
      localStorage.setItem("email", "");
      this.$router.push({ name: "signin" });
    }
  }
};
</script>

<style scoped>
@keyframes moveFromRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
.logout {
  margin-right: 10px;
}
.navbar-brand-title {
  font-weight: bold;
  font-size: 1.1em;
}
slide {
  width: 100%;
}
</style>


