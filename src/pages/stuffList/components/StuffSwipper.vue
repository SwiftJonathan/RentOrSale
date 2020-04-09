<template>
  <div class="swipper">
    <div class="swipper-stuffdes">
      <p>Here will show different stuff message by change stuff.</p>
      <p>Some extra message may be needed.</p>
    </div>

    <div class="swipper-select">
      <div>
        <span class="new">New</span>
        <span class="most-viewed">Most Viewed</span>
      </div>
      <div class="search">
        <van-icon name="search" size="20px" />
      </div>
    </div>

    <van-swipe class="swipper-body" indicator-color="white" :touchable="true" width="80vw">
      <van-swipe-item v-for="item in stuffList" :key="item.key" indicator-color="#111727">
        <div class="swipper-item">
          <div class="swipper-item-body">
            <div class="swipper-tag">
              <van-icon name="setting-o" size="2em" color="rgba(255,255,255,0.5)" />
            </div>
            <div class="swipper-img">
              <van-image height="100%" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="swipper-des">
              <div class="title">{{item.name}}</div>
              <div class="content">This is some descriptions.</div>
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Image, Icon } from "vant";
import { mapActions, mapGetters } from "vuex";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
Vue.use(Icon);
export default {
  name: "StuffSwipper",
  computed: {
    ...mapGetters({
      stuffList: "getStuffList"
    })
  },
  mounted() {
    this.fetchStuffList();
  },
  methods: {
    ...mapActions({
      fetchStuffList: "fetchStuffList"
    })
  }
};
</script>

<style scoped>
.swipper {
  color: rgba(255, 255, 255, 1);
}
.swipper-body {
  width: 100vw;
  height: 50vh;
}
.swipper-item {
  height: 50vh;
  display: flex;
  justify-content: center;
}
.swipper-item-body {
  /* width: 75vw; */
  margin: 0em 2em;
  height: 50vh;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 32px 32px 64px 0px;
}
.swipper-tag {
  position: absolute;
  z-index: 20;
  right: 0px;
  width: 60px;
  height: 80px;
  border-radius: 0px 32px 0px 32px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.swipper-img {
  height: 80%;
  width: 100%;
  overflow: hidden;
  border-radius: 32px 32px 64px 0px;
}
.swipper-des {
  color: rgba(0, 0, 0, 0.5);
  padding: 1em;
}
.swipper-des .title {
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
}
.swipper-des .content {
  font-weight: 400;
}
.swipper-stuffdes {
  padding: 0em 2em;
}
.swipper-select {
  padding: 1em 2em;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  justify-content: space-between;
}
.swipper-select .new {
  margin-right: 20px;
}
.swipper-select .most-viewed {
  margin-right: 20px;
}
.swipper-select .search {
  margin-right: 20px;
}
</style>