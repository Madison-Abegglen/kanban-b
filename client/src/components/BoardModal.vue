<template>
  <div class="modal-p">
    <h2 class="txt-3">Create Board</h2>
    <div class="divider-2"></div>
    <b-form class="form">
      <b-form-group label="Title">
        <b-form-input type="text" class="input" v-model="board.title"></b-form-input>
      </b-form-group>

      <b-form-group label="Description">
        <b-form-input type="text" class="input" v-model="board.description"></b-form-input>
      </b-form-group>

      <b-button class="btn btn-danger" @click="createBoard">Create Board</b-button>

      <b-button class="btn" @click="closeModal">Close</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "BoardModal",
  data() {
    return {
      board: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch("boardFM", {
        value: false
      });
    },
    createBoard() {
      this.$store.dispatch("createBoard", {
        title: this.board.title,
        description: this.board.description,
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
.divider-2 {
  height: 1.5px;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  width: 55vw;
}
.modal-p {
  height: 50vh;
  width: 60vw;
  box-shadow: 0 0 2px 1px rgba(85, 73, 73, 0.8);
  background-color: rgb(250, 250, 250);
  z-index: 2;
  position: fixed;
  margin-top: 20vh;
  margin-left: 18vw;
  top: 0;
  opacity: 0;
  animation: fade-in-right ease 0.4s forwards;
  padding: 1rem;
}
.btn {
  width: 70%;
  margin: 0.2rem;
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade-out-right {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(15px);
  }
}
</style>
