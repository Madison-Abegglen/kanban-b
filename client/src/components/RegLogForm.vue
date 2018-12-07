<template>
  <div class="col-6 offset-3 form-p">
    <h1>This is the form</h1>
    <form @submit.prevent></form>
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
}
</style>
