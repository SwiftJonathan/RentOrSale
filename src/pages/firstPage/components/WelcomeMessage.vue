<template>
  <div class="welcome-message">
    <div class="title-and-search">
      <span>Hello! {{user.username}}-{{user.id}}</span>
      <van-icon name="search" size="24" @click="show = true"  v-if="SearchOrUser === 0"/>
      <van-icon name="user-o" size="24" @click="toUserEdit()"  v-if="SearchOrUser === 1"/>
    </div>
    <div class="location">
      <span>Location</span>
      <span class="colored">{{user.locationScName}}·{{user.locationAreaName}}</span>
      <van-icon name="location-o" size="14" @click="clickLoc()"/>
    </div>
<!--    位置-->
    <div class="area" v-if="location_show" @click.stop>
      <van-row>
        <van-col span="1" offset="22">
          <van-icon name="cross" @click="location_show=false" color="#444444" />
        </van-col>
      </van-row>
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
      />
      <div class="area-btn" @click="confirmLoc()">确定</div>
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
import { mapActions, mapGetters } from "vuex";
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
Vue.use(Search);
Vue.use(Overlay);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);

export default {
  name: "HomeTop",
  props: ["SearchOrUser"],
  data() {
    return {
      show: false,
      location_show: false,
      value: "",
      items:[
        {
          id: '',
          text: '测试大学bendi',
          children: [
            {
              text: '测试校区',
              // id，作为匹配选中状态的标识符
              id: 1,
            },
          ],
        },
        {
          text: '南昌大学',
          children: [
            {
              text: '前湖校区',
              // id，作为匹配选中状态的标识符
              id: 1,
            },
            {
              text: '青山湖校区',
              id: 2
            },
            {
              text: '共青校区',
              id: 3
            },
          ],
        },
      ],
      activeId: 1,
      activeIndex: 0,
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      area: "getArea",
    })
  },
  methods: {
    ...mapActions({
      fetchArea: "fetchArea"
    }),
    clickLoc(){
      this.location_show=true;
      this.fetchArea();
      this.items = this.area;
      console.log("items", this.items);
    },
    confirmLoc(){
      console.log("activeIndex", this.activeIndex);
      console.log("activeIndex id", this.items[this.activeIndex].id);
      console.log("activeIndex text", this.items[this.activeIndex].text);
      console.log("activeId", this.activeId);
      let activeArea = this.items[this.activeIndex].children.filter(area => area.id === this.activeId);
      console.log("activeArea", activeArea);
      console.log("activeArea text", activeArea[0].text);
    },
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
    toUserEdit(){
      if (this.beforeHandler()){
        this.$router.push({
          name: "UserEdit",
          params: {
          }
        })
      }
    },
    onCancel() {
      Toast("取消");
    },
    beforeHandler(){
      if (this.user.id === undefined){
        this.$router.push({
          name: "Login",
        });
        return false;
      }
      return true;
    },
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
  line-height: 1.5rem;
}
.location > .colored {
  color: rgba(236, 158, 187, 1);
  margin: 0 0.1rem 0 0.8rem;
}
  .van-tree-select__content{
    color: #9e9e9e;
  }
  .van-tree-select__item--active {
    color: #e76a42;
  }
  .area{
    width: 86%;
    margin-left: 5%;
    margin-top: 11vh;
    position: absolute;
    z-index: 9999;
    box-shadow: #b2b0b0 0px 0px 11px;
    border-radius: 7px;
    padding: 2%;
    color: #f0f0f0;
    background-color: #f0f0f0;
  }
  .area-btn{
    color: #fafafa;
    background-color: #6a6d6e;
    height: 38px;
    line-height: 38px;
    text-align: center;
  }
</style>
