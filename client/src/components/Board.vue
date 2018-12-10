<template>
  <div class="row board">
    <div class="col-12">
      <h1>This is a board title: {{b.title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {};
  },
  props: ["b"],
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>
