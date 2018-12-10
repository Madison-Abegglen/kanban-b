<template>
  <div class="boards container-fluid">
    <Navbar></Navbar>
    <div class="row body">
      <div class="col-11 offset-1 welcome-p">
        <h2 class="txt-3">Welcome to your board page, {{user.name}}</h2>
        <button class="b-fab">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="row">
        <div class="col-12 divider"></div>
      </div>
      <Board v-if="boards.length" v-for="board in boards" :key="board._id" :b="board"></Board>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Board from "@/components/Board.vue";
export default {
  name: "boards",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBoards", this.user._id);
  },
  components: {
    Navbar,
    Board
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    boards() {
      return this.$store.state.boards;
    }
  },
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
}
.txt-3 {
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  /* letter-spacing: 4px; */
  color: black;
}
.welcome-p {
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.b-fab {
  border-radius: 100%;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  background-color: rgb(145, 43, 43);
  color: white;
  margin-right: 2rem;
}
.b-fab:hover {
  box-shadow: 0 0 2px 1px rgba(85, 73, 73, 0.8);
}
.divider {
  height: 1.5px;
  width: 100%;
  background-color: black;
  margin: 5px;
}
</style>
