<template style="background-color: black">
  <div class="container">
    <div>
      <form class="text-center border border-light p-5" method="POST">
        <p class="h4 mb-5">{{ message }}</p>

        <input type="email" class="form-control mb-4" placeholder="E-mail" v-model="email">

        <input type="password" class="form-control mb-4" placeholder="Password" v-model="password">

        <button class="btn btn-block btn-purple" type="submit" v-on:click="doLogin">Sign in</button>

        <div class="auxliar">
          <div class="d-flex justify-content-around">
            <div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" v-model="checked">
                <label class="custom-control-label" style="font-size: 0.7em">Lembrar-me</label>
              </div>
            </div>
            <div>
              <a href style="font-size: 0.7em">Esqueceu a Senha?</a>
            </div>
          </div>
        </div>

        <p style="font-size: 0.7em">
          Não tem cadastro?
          <router-link to="/cadastro" style=" margin-left: 5%">Registre-se Aqui!</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
import Home from "./Home";
export default {
  name: "SignIn",
  data() {
    return {
      message: "bejotashare",
      email: "",
      password: "",
      checked: false
    };
  },
  methods: {
    doLogin: function(event) {
      event.preventDefault();

      const { email, password } = this;
      api
        .post("/emailAuthenticate", {
          crossdomain: true,
          email: email,
          password: password
        })
        .then(response => {
          const { email } = response.data.user;
          const { token } = response.data;
          if (response.data.user.email) {
            console.log(response.data.user.email);
            localStorage.email = email;
            localStorage.token = token;
            this.$router.push({ name: "home" });
          }
        })
        .catch(e => alert("DEU PAU " + e));
    }
  },
  mounted: function() {
    const { token } = localStorage;
    if (token) return this.$router.push({ name: "home" });
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
.h4 {
  text-align: center;
  font-size: 2em;
  animation: moveFromRight 2s linear;
}
.h4::first-letter {
  font-weight: bold;
  color: #7259c1;
}
.custom-control-label {
  font-size: 0.9em;
}
.btn-purple {
  background-color: #7259c1;
  color: white;
}
form {
  animation: moveFromLeft 2s linear;
}
</style>
