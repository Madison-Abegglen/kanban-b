<template>
  <div class="col-6 offset-3 form-p">
    <form @submit.prevent class="form">
      <div class="form-group" v-if="!isLogin">
        <label for="name">
          <i class="fas fa-user-circle"></i>
        </label>
        <input type="text" name="name" class="input" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">
          <i class="fas fa-at"></i>
        </label>
        <input type="text" name="email" class="input" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">
          <i class="fas fa-lock"></i>
        </label>
        <input type="text" name="password" class="input" v-model="password">
      </div>
      <button type="submit" class="btn btn-info">{{ isLogin ? 'Login' : 'Register'}}</button>
      <button type="button" class="btn btn-info">Switch to {{isLogin ? 'Signup' : 'Login'}}</button>
    </form>
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
  methods: {}
};
</script>

<style scoped>
.form-p {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form {
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(117, 117, 117, 0.5);
}
.form-group {
  display: flex;
  flex-direction: row;
}
.btn-info {
  border-radius: 0;
  margin: 3px;
  width: 60%;
}
</style>
