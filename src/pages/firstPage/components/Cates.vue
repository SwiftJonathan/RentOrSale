<template>
  <div class="cates">
    <div v-for="(cate,index) in categoryList" :key="index" class="cate-item" @click="handleCateClick(cate.id)">
      <div class="body" :style="{backgroundColor : backgroundColor[index]}">
        <van-icon :name="icons[index]" size="1.5em" :color="color[index]" />
      </div>
      <span class="title">{{cate.name}}</span>
    </div>
<!--    <div>{{categoryList}}</div>-->
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
import { mapActions, mapGetters } from "vuex";

Vue.use(Grid);
Vue.use(GridItem);
export default {
  name: "Cates",
  data() {
    return {
      icons: ["column","photograph","gem","award"],
      backgroundColor: ["rgba(240,245,248,1)","rgba(254,245,243,1)","rgba(254,248,242,1)","rgba(244,243,251)"],
      color: ["rgba(65,127,138,1)", "rgba(247,147,153,1)", "rgba(245,169,120,1)", "rgba(154,148,201,1)"],
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
  },
  computed: {
    ...mapGetters({
      categoryList: "getCategoryList"
    })
  },
  methods: {
    ...mapActions({
      fetchCategoryList: "fetchCategoryList"
    }),
    handleCateClick(id) {
      console.log("handleCateClick id", id);
      this.$router.push({
        name: "StuffList",
        params: {
          cateId: id,
          //publishOrSail 发布或者卖出： 0发布，1卖出
          cateOrLike: "0"
        }
      })
    }
  },
  mounted() {
    this.fetchCategoryList();
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
