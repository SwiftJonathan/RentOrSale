<template>
  <div class="stuff-list">
    <div class="stuff-list-tools">
      <div class="stuff-list-back">
        <van-icon name="arrow-left" color="rgba(0,0,0,0.75)" size="1.5em" />
      </div>
      <div class="stuff-list-info">
        <van-icon name="ellipsis" />
      </div>
    </div>
    <div class="stuff-list-swipper">
      <StuffSwipper />
    </div>
  </div>
</template>

<script>
import StuffSwipper from "./components/StuffSwipper";
import { Icon } from "vant";
import Vue from "vue";
Vue.use(Icon);
export default {
  name: "StuffList",
  components: { StuffSwipper }
};
</script>

<style scope>
.stuff-list {
  background-color: rgba(243, 244, 249, 1);
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.stuff-list-tools {
  background-color: rgba(18, 24, 40, 1);
  height: 60vh;
  width: 100%;
  position: relative;
  border-radius: 0px 0px 0px 64px;
  z-index: 10;
}
.stuff-list-back {
  height: 32px;
  width: 32px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  left: 2em;
  top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.stuff-list-info {
  height: 32px;
  width: 32px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  right: 2em;
  top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.stuff-list-swipper {
  position: absolute;
  bottom: 12vh;
  z-index: 20;
}
</style>