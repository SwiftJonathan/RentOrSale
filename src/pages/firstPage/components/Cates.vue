<template>
  <div class="cates">
    <div v-for="(cate,index) in cates" :key="index" class="cate-item">
      <div class="body" :style="{backgroundColor : cate.backgroundColor}">
        <van-icon :name="cate.icon" size="1.5em" :color="cate.color" />
      </div>
      <span class="title">{{cate.tag}}</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
export default {
  name: "Cates",
  data() {
    return {
      cates: [
        {
          tag: "二手图书",
          icon: "column",
          backgroundColor: "rgba(240,245,248,1)",
          color: "rgba(65,127,138,1)"
        },
        {
          tag: "手机数码",
          icon: "photograph",
          backgroundColor: "rgba(254,245,243,1)",
          color: "rgba(247,147,153,1)"
        },
        {
          tag: "美妆",
          icon: "gem",
          backgroundColor: "rgba(254,248,242,1)",
          color: "rgba(245,169,120,1)"
        },
        {
          tag: "宠物用品",
          icon: "award",
          backgroundColor: "rgba(244,243,251)",
          color: "rgba(154,148,201,1)"
        }
      ]
    };
  }
};
</script>

<style scoped>
.cates {
  padding: 14px 28px;
  display: flex;

  justify-content: space-between;
}
.cate-item {
  width: 16vw;
  /* height: 100px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.cate-item > .body {
  width: 16vw;
  height: 16vw;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cate-item > .title {
  height: 1.5em;
  font-size: 12px;
  font-weight: 600;
  padding-top: 0.5em;
}
</style>
