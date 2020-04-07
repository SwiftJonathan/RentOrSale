<template>
  <div>
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <router-view />
    </div>
    <ToolBar />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
export default {
  name: "App",
  components: { ToolBar }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 85vh;
  overflow: auto;
}

#toolbar {
  height: 10vh;
}
</style>
