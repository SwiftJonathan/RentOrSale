<template>
  <div class="welcome-message">
    <div class="title-and-search">
      <span>Hello! {{user.name}}</span>
      <van-icon name="search" size="24" @click="show = true" />
    </div>
    <div class="location">
      <span>Location</span>
      <span class="colored">{{user.location}}</span>
      <van-icon name="location-o" size="14" />
    </div>
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
import { Col, Row, Icon, Overlay, Search, Toast } from "vant";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    onSearch(val) {
      Toast(val);
      console.log("handleSearch val", val);
      this.$router.push({
        name: "StuffList",
        params: {
          name: val,
          //publishOrSail 发布或者卖出： 0发布，1卖出
          cateOrLike: "1"
        }
      })
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style scoped>
.title-and-search {
  display: flex;
  justify-content: space-between;
  padding: 28px 28px 0px;
  height: 1.5em;
  align-items: center;
}
.title-and-search > span {
  font-size: 24px;
  font-weight: 700;
}
.location {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 1.5em;
  padding: 14px 28px;
  font-size: 12px;
  font-weight: 600;
}
.location > .colored {
  color: rgba(236, 158, 187, 1);
  margin-left: 1em;
}
</style>
