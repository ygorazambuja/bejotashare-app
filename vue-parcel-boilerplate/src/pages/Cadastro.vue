<template>
  <div class="container">
    <h4 class="display-4">Cadastro</h4>
    <form class="input-container" method="POST">
      <input type="text" placeholder="Nome Completo: " v-model="fullName">
      <input type="text" placeholder="Username: " v-model="username">
      <input type="email" placeholder="Email: " v-model="email" required>
      <input type="password" placeholder="Senha: " v-model="senha" required>
      <input type="password" placeholder="Digite a Senha Novamente: " v-model="senhaAuxiliar">

      <button type="button" class="btn btn-lg btn-danger" v-on:click="doCadastro">Pronto!</button>
      <router-link to="/" style="margin-top: 10px">
        <button type="button" class="btn btn-primary btn-lg btn-block">Voltar para o Sign-in</button>
      </router-link>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Cadastro",
  data: function() {
    return {
      fullName: "",
      username: "",
      email: "",
      senha: "",
      senhaAuxiliar: ""
    };
  },
  methods: {
    doCadastro: function(event) {
      event.preventDefault();
      this.verificaSenhas();
    },
    verificaSenhas: function(event) {
      const { senha, senhaAuxiliar } = this;
      if (senha && senha === senhaAuxiliar) {
        this.postCadastro();
      }
    },
    verificaCampos: function(event) {},
    postCadastro: function(event) {
      const { username, fullName, senha, email } = this;
      console.log(username, fullName, senha, email);
      axios
        .post("http://localhost:3000/user", {
          crossdomain: true,
          username: username,
          fullName: fullName,
          password: senha,
          email: email
        })
        .then(result => {
          alert(result.data._id);
        })
        .catch(err => {
          alert(err);
        });
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
.input-container {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  animation: moveFromLeft 1s linear;
}
.display-4 {
  text-align: center;
  font-weight: bold;
  animation: moveFromLeft 1s linear;
}
.display-4::first-letter {
  color: #c82333;
}
.input-container input {
  padding: 20px;
  margin: 5px;
  font-size: 1.2em;
  animation: moveFromLeft 1s linear;
}
</style>
