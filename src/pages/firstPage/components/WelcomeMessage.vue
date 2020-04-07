<template>
  <div class="home_top">
    <van-row>
      <van-col span="20">大吉大利，万事亨通！</van-col>
      <van-col span="4" align="right">
        <van-icon name="search" size="20" @click="show = true" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="20">
        <div class="little_log">
          南昌大学
          <van-icon name="location-o" size="12" />
        </div>
      </van-col>
    </van-row>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <form action="/">
            <van-search
              v-model="value"
              placeholder="请输入搜索关键词"
              shape="round"
              background="#4fc08d00"
              @search="onSearch"
              @cancel="onCancel"
            />
          </form>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from "vue";
import { Col, Row } from "vant";
import { Icon } from "vant";
import { Overlay } from "vant";
import { Search } from "vant";
import { Toast } from "vant";

Vue.use(Search);
Vue.use(Overlay);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);

export default {
  name: "HomeTop",
  data() {
    return {
      show: false,
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style scoped>
.home_top {
  /*height: 40px;*/
  margin-top: 10px;
}
.van-row {
  padding: 5px 20px;
  /*margin-bottom: 10px;*/
}
.wrapper {
  display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
  height: 100%;
}

.block {
  width: 100%;
  height: 0px;
  background-color: #fff;
}
.little_log {
  font-size: small;
  margin-top: -10px;
  margin-bottom: 8px;
}
</style>
