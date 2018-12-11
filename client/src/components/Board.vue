<template>
  <div class="col-10 offset-1 board">
    <h2 class="txt-3 board-c">
      <span>
        <i class="fas fa-angle-double-right"></i>
        {{b.title}}
      </span>
      <i @click="deleteBoard(b._id)" class="far fa-trash-alt fa-xs"></i>
    </h2>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "Board",
  data() {
    return {};
  },
  props: ["b"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    deleteBoard(boardId) {
      document.getElementById("board").style.backgroundColor = "";
      this.$store.dispatch("deleteBoard", {
        boardId: boardId,
        authorId: this.user._id
      });
    }
  }
};
</script>

<style scoped>
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
.board {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.board-c {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.divider {
  height: 1.5px;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  margin-top: 5px;
  margin-bottom: 1rem;
}
.fa-trash-alt {
  margin-right: 1.2rem;
}
.fa-trash-alt:hover {
  cursor: pointer;
  /* box-shadow: 0 0 2px 1px rgba(85, 73, 73, 0.8); */
}
</style>
