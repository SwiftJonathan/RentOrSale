<template>
  <div id="toolbar">
    <div id="toolbar-item" v-for="(item) in menuInfo" :key="item.key">
      <div>
        <van-icon :name="item.icon" color="rgba(0,0,0,0.75)" size="1.2em" />
      </div>
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  name: "Toolbar",
  data() {
    return {
      currectPage: "",
      menuInfo: [
        {
          key: "firstPage",
          name: "首页",
          icon: "like-o"
        },
        {
          key: "info",
          name: "首页",
          icon: "location-o"
        },
        {
          key: "personal",
          name: "首页",
          icon: "star-o"
        }
      ]
    };
  }
};
</script>

<style scope>
#toolbar {
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#toolbar-item {
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>