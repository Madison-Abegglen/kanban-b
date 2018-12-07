<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row top-r">
        <div class="col-12 title-p">
          <h1 class="txt-1">
            K
            <i class="fas fa-angle-double-up" style="padding-right: 6px;"></i>nban.
          </h1>
        </div>
      </div>
      <div class="row mid-r">
        <RegLogForm></RegLogForm>
      </div>
      <div class="row bottom-r"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RegLogForm from "@/components/RegLogForm.vue";

export default {
  name: "home",
  components: {
    RegLogForm
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
.top-r {
  height: 20vh;
}
.title-p {
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mid-r {
  height: 60vh;
  background-color: rgb(145, 43, 43);
}
.bottom-r {
  height: 20vh;
}
</style>
