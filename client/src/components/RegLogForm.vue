<template>
  <div class="col-8 offset-2 form-p">
    <b-form @submit.prevent class="form">
      <b-form-group label="<i class='fas fa-user-circle'></i> Name" v-if="!isLogin">
        <!-- <i class="fas fa-user-circle"></i>         -->
        <b-form-input type="text" class="input" v-model="name"></b-form-input>
      </b-form-group>

      <b-form-group label="<i class='fas fa-at'></i> Email">
        <b-form-input type="email" class="input" v-model="email"></b-form-input>
      </b-form-group>

      <b-form-group label="<i class='fas fa-lock'></i> Password">
        <!-- <i class="fas fa-lock"></i> -->
        <b-form-input type="password" class="input" v-model="password"></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        class="btn btn-danger"
        @click="submitForm"
      >{{ isLogin ? 'Login' : 'Register'}}</b-button>

      <b-button
        type="button"
        class="switch-btn"
        @click="isLogin = !isLogin"
      >Switch to {{isLogin ? 'Signup' : 'Login'}}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "RegLogForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      isLogin: true
    };
  },
  computed: {},
  methods: {
    submitForm() {
      if (!this.isLogin) {
        return this.register();
      } else {
        return this.login();
      }
    },
    register() {
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password
      });
      this.name = "";
      this.email = "";
      this.password = "";
      this.isLogin = true;
    },
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
      this.email = "";
      this.password = "";
      this.isLogin = true;
    }
  }
};
</script>

<style scoped>
.form-p {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  /* background: rgb(117, 117, 117, 0.5); */
}
.form {
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(250, 250, 250, 0.8);
}
.form-group {
  display: flex;
  flex-direction: row;
}
.btn-danger {
  border-radius: 0;
  margin: 3px;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 10rem;
}
.switch-btn {
  background: transparent;
  color: black;
  border: none;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.input {
  width: 30rem;
}
</style>
