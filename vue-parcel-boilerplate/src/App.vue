<template>
  <div>
    <div>
      <form class="text-center border border-light p-5">
        <p class="h4 mb-4">{{ message }}</p>

        <input type="email" class="form-control mb-4" placeholder="E-mail" v-model="email">

        <input type="password" class="form-control mb-4" placeholder="Password" v-model="password">

        <div class="d-flex justify-content-around">
          <div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="defaultLoginFormRemember"
                v-model="checked"
              >
              <label class="custom-control-label" for="defaultLoginFormRemember">Lembrar-me</label>
            </div>
          </div>
          <div>
            <a href>Esqueceu a Senha?</a>
          </div>
        </div>

        <button
          class="btn btn-primary btn-block my-4"
          type="submit"
          v-on:click.prevent="doLogin"
        >Sign in</button>

        <p>
          Não tem cadastro?
          <a href>Registre-se!</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
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
      axios
        .get("http://localhost:3000/emailAuthenticate", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            email,
            password
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(e => console.log("deu pau " + e));
    }
  }
};
</script>

<style scoped>
.display-4 {
  text-align: center;
}
</style>
