<template>
  <div class="boards container-fluid">
    <Navbar></Navbar>
    <div class="row body">
      <div class="col-12">
        <h1>This is the boards page</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "boards",
  data() {
    return {};
  },
  components: {
    Navbar
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  overflow: hidden;
  background-color: rgb(250, 250, 250, 0.8);
}
.body {
  margin-top: 10vh;
}
</style>
