<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
  <div class="list">
    <!-- <div>{{firstPageStuffList}}</div> -->
    <!-- <div class="list-split-line"></div> -->
    <div class="list-header">
      <div class="title">As You Like</div>
      <div class="button">Refresh</div>
    </div>
    <div
      v-for="(stuff,index) in firstPageStuffList"
      v-lazy:background-image="stuff.img ? stuff.img : ((stuff.proimgs == null || stuff.proimgs.length === 0) ? noImageUrl : stuff.proimgs[0].imgUrl)"
      :key="index"
      class="stuff-item"
    >
      <div class="title">{{stuff.name}}</div>
      <div class="score">
        <span>{{stuff.price}}</span>
        <van-icon name="star-o" />
      </div>
    </div>
    <div class="fit-block"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { Grid, GridItem } from "vant";
import { Col, Row } from "vant";
import { mapActions, mapGetters } from "vuex";
import {NO_IMG_URL} from '@/store/const.js'

Vue.use(Col);
Vue.use(Row);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
});

export default {
  name: "HomeLazyLoad",
  props: ["cate_or_like", "cate_id"],
  data() {
    return {
      noImageUrl: NO_IMG_URL,
    };
  },
  computed: {
    ...mapGetters({
      firstPageStuffList: "getFirstPageStuffList"
    })
  },
/*  methods: {
    ...mapActions({
      fetchFirstPageStuffList: "fetchFirstPageStuffList",
      fetchCateStuffList: "fetchCateStuffList"
    })
  },
  mounted() {
    if (this.props.cate_or_like === '0') {
      this.fetchCateStuffList({"cate_id": });
    }
    this.fetchFirstPageStuffList();
  }*/
};
</script>

if(!res || res && !res.data || res && res.data && !Array.isArray(res.data) || res && res.data && res.data.length === 0){
  commit();
}
<style scoped>
.list {
  padding: 14px 28px;
}
.list-split-line {
  margin: 0px 0px 0px 14px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.25);
}
.list-header > .title {
  font-size: 24px;
  font-weight: 700;
}
.list-header > .button {
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
}
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0px;
}
.stuff-item {
  height: 25vh;
  margin-bottom: 28px;
  filter: saturate(50%);
  position: relative;
}
.stuff-item > .title {
  position: absolute;
  bottom: 2.2em;
  left: 1em;
  font-size: 1.2em;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
}
.stuff-item > .score {
  position: absolute;
  bottom: 1em;
  left: 1em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 0px 1em;
}
img,
div[lazy] {
  box-sizing: border-box;
  width: 100%;
  height: 25vh;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 12px;
  box-shadow: 0 8px 12px #ebedf0;
}
.fit-block {
  height: 10vh;
}
</style>
