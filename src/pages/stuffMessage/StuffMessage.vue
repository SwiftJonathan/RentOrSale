<template>
  <div class="stuff">
    <div class="stuff_con">
      <div class="con_top">
        <van-row>
          <van-col span="20" class="con_title">{{stuffDetailMessage.name}}</van-col>
          <van-col span="2">
            <van-icon name="star-o" size="1.2rem" color="#448c47" />

          </van-col>
          <van-col span="2">
            <van-icon name="like-o" size="1.2rem" color="#ce3f12" />
          </van-col>
        </van-row>
        <van-row class="con_detail">
          <van-col span="24" class="con_title">{{stuffDetailMessage.detail}}</van-col>
        </van-row>
      </div>
      <StuffImage/>
    </div>
    //TODO：卖家信息
    <StuffTab/>
  </div>



</template>

<script>
  import StuffImage from './component/StuffImage';
  import StuffTab from './component/StuffTab'
  import Vue from 'vue';
  import { Col, Row } from 'vant';
  import { Icon } from 'vant';
  import { mapActions, mapGetters } from "vuex";

  Vue.use(Icon);
  Vue.use(Col);
  Vue.use(Row);
  export default {
    name: "StuffMessage",
    components: {
      StuffImage, StuffTab
    },
    data(){
      return {
        title: "TITLE",
        detail: "那如何使用懒加载呢？自从点语法出现以后，访问一个对象基本就类似于self.clickBtn或者是[self clickBtn]，这都是调用的clickBtn的getter方法，因此就可以在getter方法中实现懒加载。"
      }
    },
    computed: {
      ...mapGetters({
        stuffDetailMessage: "getStuffDetailMessage"
      })
    },
  }
</script>

<style scoped>
  .stuff_con{
    height: 100vh;
    overflow: auto;
    background-color: #899e92;
    color: aliceblue;
  }
  .con_top{
    width: 86%;
    padding: 37px 7%;
    font-size: x-large;
  }
  .con_detail{
    font-size: medium;
    margin: 23px 0px;
  }

</style>
