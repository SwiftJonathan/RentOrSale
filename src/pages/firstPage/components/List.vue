<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
  <div class="list">
    <div class="list-split-line"></div>
    <div class="list-header">
      <div class="title">As You Like</div>
      <div class="button">Refresh</div>
    </div>
    <div
      v-for="(img,index) in imageList"
      v-lazy:background-image="img"
      :key="index"
      class="stuff-item"
    >
      <div class="title">Title</div>
      <div class="score">
        <span>Score</span>
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
  data() {
    return {
      imageList: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=78c4d6302ee3b22db7d03c9854504512&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20100%2F133%2Fw2000h1333%2F20200225%2F95db-ipzreiv7562157.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=58bb9214f134c0808eba9d5aa83e3c6e&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201311%2F17%2F174124tp3sa6vvckc25oc8.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433452794&di=1263fa7241e1b843f0967c466f7c8478&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2155983538%2C3860699715%26fm%3D214%26gp%3D0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=f3b43387b9aad7ee53d9d893778a30e5&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F53a15a1343174.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.list {
  padding: 28px;
}
.list-split-line {
  margin: 0px 0pxpx 14px;
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
