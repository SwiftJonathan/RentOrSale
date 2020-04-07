<template>
  <div class="hello">
    <h1>HelloWorld Component</h1>
    <van-button type="default" @click="handleFetchList">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <p v-for="number in todoList" :key="number">{{number}}</p>
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