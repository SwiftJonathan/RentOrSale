<template>
  <div class="cate_div">
    <van-grid :gutter="10" :border="false">
      <van-grid-item
        v-for="(value,index) in myicons"
        :key="index"
        :icon="value.icon"
        :text="value.tag"
      />
    </van-grid>
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
        "二手图书",
        "二手衣物",
        "手机数码",
        "生活百货",
        "家居饰品",
        "美妆",
        "运动户外",
        "宠物用品"
      ],
      icons: [
        "column",
        "manager",
        "photograph",
        "shop",
        "wap-home",
        "gem",
        "fire",
        "award"
      ],
      myicons: [
        { tag: "二手图书", icon: "column" },
        { tag: "二手衣物", icon: "manager" },
        { tag: "手机数码", icon: "photograph" },
        { tag: "生活百货", icon: "shop" },
        { tag: "家居饰品", icon: "wap-home" },
        { tag: "美妆", icon: "gem" },
        { tag: "运动户外", icon: "fire" },
        { tag: "宠物用品", icon: "award" }
      ]
    };
  }
};
</script>

<style scoped>
.cate_div {
  margin: 2rem 0;
}
</style>
