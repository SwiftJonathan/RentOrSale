<template>
  <div class="hello">
    <h1>Login Component</h1>
  
    <input>
    <input>

    <button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "vant/lib/button";
import "vant/lib/button/style";
import { mapGetters, mapMutations, mapActions } from "vuex";
import store from "../store/index";
Vue.use(Button);

export default {
  name: "HelloWorld",

  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapGetters(["todoList"])
  },
  methods: {
    ...mapMutations({
      setTodoList: "setTodoList"
    }),
    ...mapActions({
      fetchList: "fetchList"
    }),
    handleFetchList() {
      this.fetchList();
    }
  },
  created() {
    //组件挂载完毕，可以请求数据
    // store.dispatch("fetchList");
    console.log("组件挂载完毕，可以请求数据");
    this.handleFetchList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>