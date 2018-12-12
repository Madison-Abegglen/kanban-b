 <template>
  <div class="container-fluid" v-if="boards">
    <Navbar></Navbar>
    <div class="row title">
      <div class="col-11 offset-1 welcome-p">
        <h2 class="txt-3">
          <router-link class="link" :to="{name: 'boards'}">
            <i class="fas fa-angle-double-left"></i>
          </router-link>
          {{board.title}}
        </h2>
        <p class="desc">{{board.description}}</p>
      </div>
      <div class="col-10 offset-1 divider-2"></div>
      <div></div>
    </div>
  </div>
</template>
 
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "boardV",
  data() {
    return {
      boardId: this.$route.params.boardId
    };
  },
  // props: ["boardId"],
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch("getBoards");
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
    board() {
      return (
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    }
  }
};
</script>
 
<style scoped>
.container-fluid {
  height: 100vh;
  overflow: hidden;
  background-color: rgb(250, 250, 250, 0.8);
}
.welcome-p {
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  margin-top: 12vh;
}
.desc {
  margin-left: 2.8rem;
}
.fa-angle-double-left {
  margin-right: 4px;
}
.txt-1 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  /* letter-spacing: 4px; */
  color: black;
}
.link {
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
.divider {
  height: 1.5px;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.divider-2 {
  height: 1.5px;
  width: 100%;
  background-color: rgb(0, 0, 0);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
 