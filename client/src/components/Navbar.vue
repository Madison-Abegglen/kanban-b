<template>
  <div class="row navbar">
    <div class="col-8 nav-title">
      <h1 class="txt-2">
        K
        <i class="fas fa-angle-double-up" style="padding-right: 8px;"></i>nban.
      </h1>
    </div>
    <div class="col-4 nav-options">
      <h6 class="txt-2" @click="logout">
        <i class="fas fa-user-circle" style="padding-right: 5px;"></i>logout
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
.navbar {
  height: 10vh;
  top: 0;
  min-width: 100%;
  background-color: rgb(145, 43, 43);
  color: rgb(245, 245, 245);
  position: fixed;
  z-index: 2;
}
.nav-options {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.txt-1 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  /* letter-spacing: 4px; */
  color: black;
}
.txt-2 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
}
</style>
