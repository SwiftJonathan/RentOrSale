<template>
  <div>
    <div id="app">
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  overflow: auto;
}
</style>
