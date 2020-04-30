<template>
  <div id="toolbar-wrapper" v-if="showBarPage.indexOf(this.$route.path) > -1">
    <div id="toolbar">
      <div
        id="toolbar-item"
        v-for="(item) in menuInfo"
        :key="item.key"
        @click="handleClickPageIcon(item)"
      >
        <span v-if="item.key !== currectPage">
          <van-icon :name="item.icon" color="rgba(0,0,0,0.75)" size="1.2em" />
        </span>
        <div id="toolbar-text" v-if="item.key === currectPage">
          <span>{{item.name}}</span>
          <br />
          <span id="toolbar-dot"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
import router from "vue-router";

export default {
  name: "Toolbar",
  data() {
    return {
      currectPage: "firstPage",
      showBarPage: ["/first-page", "/publish", "/stuff-list", "/personal"],
      menuInfo: [
        {
          key: "firstPage",
          name: "Home",
          icon: "home-o",
          router: "/first-page"
        },
        {
          key: "info",
          name: "Publish",
          icon: "goods-collect-o",
          router: "/publish"
        },
        {
          key: "like",
          name: "Like",
          icon: "like-o",
          router: "/stuff-list"
        },
        {
          key: "personal",
          name: "Mine",
          icon: "contact",
          router: "/personal"
        }
      ]
    };
  },
  methods: {
    handleClickPageIcon(item) {
      this.currectPage = item.key;
      this.$router.push({
        path: item.router
      });
    }
  },
  mounted() {
    console.log("stuff-message this.$route.path", this.$route.path);
  }
};
</script>

<style scope>
#toolbar-wrapper {
  height: 10vh;
  width: 100%;
  position: absolute;
  bottom: 0px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 5px 24px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
#toolbar {
  height: 10vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);
}

#toolbar-item {
  height: 2em;
  width: 25%;
  text-align: center;
  /* background-color: red; */
}

#toolbar-text {
  color: rgba(228, 128, 157, 1);
  font-weight: 500;
}

#toolbar-dot {
  display: inline-block;
  height: 3px;
  width: 3px;
  background-color: rgba(228, 128, 157, 1);
  position: relative;
  top: -12px;
}
</style>
