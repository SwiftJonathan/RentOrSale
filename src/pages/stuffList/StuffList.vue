<template>
  <div class="stuff-list">
    <div class="tools">
      <div class="back">
        <van-icon name="down" color="rgba(255,255,255,1)" size="1.5em" />
      </div>
      <div class="info">
        <van-icon name="ellipsis" color="rgba(255,255,255,1)" size="1.5em" />
      </div>
      <div class="description">
        <div>Here will show different stuff message by change stuff.</div>
        <div>Some extra message may be needed.</div>
      </div>
      <div class="select">
        <div>
          <span class="new">New</span>
          <span class="most-viewed">Most Viewed</span>
        </div>
        <div class="search">
          <van-icon name="search" size="20px" />
        </div>
      </div>
    </div>

    <div class="list">
      <List />
    </div>
  </div>
</template>

<script>
import StuffSwipper from "./components/StuffSwipper";
import List from "./components/List";
import { Icon } from "vant";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
Vue.use(Icon);
export default {
  name: "StuffList",
  components: { StuffSwipper, List },
  methods: {
    ...mapActions({
      fetchFirstPageStuffList: "fetchFirstPageStuffList",
      fetchCateStuffList: "fetchCateStuffList",
      fetchLikeStuffList: "fetchLikeStuffList",
      fetchPageStuffList: "fetchPageStuffList"
    })
  },
  computed: {
    ...mapGetters({
      pageStuffData: "getPageStuffData"
    })
  },
  mounted() {
    console.log("StuffList params",this.$route.params);
    if (this.$route.params.cateOrLike === '0'){
      this.fetchCateStuffList({cate_id: this.$route.params.cateId});
    } else if (this.$route.params.cateOrLike === '1') {
      this.fetchLikeStuffList({name: this.$route.params.name})
    }else {
      let curr = ( this.pageStuffData && this.pageStuffData.pageNum ) ? this.pageStuffData.pageNum+1 : 0;
      if (curr > this.pageStuffData.pages) curr = 0;
      this.fetchPageStuffList({currPage: curr});
    }
  }
};
</script>

<style scope>
.stuff-list {
  background-color: rgba(240, 240, 240, 1);
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: auto;
}
.stuff-list > .tools {
  background-color: rgba(18, 24, 40, 1);
  height: 20vh;
  width: 100%;
  position: relative;
  border-radius: 0px 0px 0px 64px;
  z-index: 10;
  position: relative;
  z-index: 10;
  padding: 5em 0em 0em;
}
.stuff-list > .tools > .back {
  height: 32px;
  width: 32px;
  /* background-color: rgba(255, 255, 255, 1); */
  position: absolute;
  left: 28px;
  top: 28px;
  display: flex;
  align-items: center;
  justify-content: start;
  /* border-radius: 8px; */
  transform: rotate(90deg);
}
.stuff-list > .tools > .info {
  height: 32px;
  width: 32px;
  /* background-color: rgba(255, 255, 255, 1); */
  position: absolute;
  right: 28px;
  top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 8px; */
}
.stuff-list > .tools > .description {
  padding: 0px 28px;
  z-index: 20;
  color: rgba(255, 255, 255, 1);
  position: relative;
}
.stuff-list > .tools > .select {
  padding: 14px 28px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  justify-content: space-between;
}
.stuff-list > .tools > .select > .new {
  margin-right: 28px;
}
.stuff-list > .tools > .select > .most-viewed {
  margin-right: 28px;
}
.stuff-list > .tools > .select > .search {
  margin-right: 28px;
}
</style>
