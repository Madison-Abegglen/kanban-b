<template>
  <div class="boards container-fluid">
    <Navbar></Navbar>
    <div class="row title">
      <div class="col-11 offset-1 welcome-p">
        <h2 class="txt-3">Welcome to your board page, {{user.name}}</h2>
        <button id="boardFM" @click="boardFM" class="b-fab">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="col-10 offset-1 divider"></div>
    </div>
    <div class="row">
      <Board class="boards" v-for="board in boards" :key="board._id" :b="board"></Board>
    </div>
    <BoardModal v-if="boardForm"></BoardModal>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Board from "@/components/Board.vue";
import BoardModal from "@/components/BoardModal.vue";
export default {
  name: "Boards",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBoards", this.user._id);
  },
  components: {
    Navbar,
    Board,
    BoardModal
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    boards() {
      return this.$store.state.boards;
    },
    boardForm() {
      return this.$store.state.boardForm;
    }
  },
  methods: {
    boardFM() {
      this.$store.dispatch("boardFM", {
        value: true
      });
      // document.getElementById("boardFM").style.animation =
      //   "animation: fade-out-right ease 0.4s forwards";
    }
  }
};
</script>

<style scoped>
.bred {
  border: solid red;
}
.container-fluid {
  height: 100vh;
  overflow: hidden;
  background-color: rgb(250, 250, 250, 0.8);
}
.title {
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
  margin-right: 6rem;
  outline: none;
}
.b-fab:hover {
  box-shadow: 0 0 2px 1px rgba(85, 73, 73, 0.8);
  cursor: pointer;
}
.divider {
  height: 1.5px;
  width: 100%;
  background-color: black;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.boards {
  width: 100%;
}
</style>
