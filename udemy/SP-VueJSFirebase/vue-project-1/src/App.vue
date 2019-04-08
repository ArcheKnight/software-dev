<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "app",
  data() {
    return {
      title: "My first Vue app!"
    };
  },
  components: {
    Navbar
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
