<template>
  <div class="first-page">
    <WelcomeMessage />

    <Cates />

    <List />
  </div>
</template>

<script>
import WelcomeMessage from "./components/WelcomeMessage";
import Cates from "./components/Cates";
import List from "./components/List";

export default {
  name: "FirstPage",
  components: {
    WelcomeMessage,
    Cates,
    List
  }
};
</script>

<style>
.first-page {
}
</style>