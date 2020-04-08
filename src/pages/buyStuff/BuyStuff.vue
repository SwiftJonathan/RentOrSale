<template>
  <div class="buy_stuff">
    <StuffTop />
    <StuffItem/>
    <StuffAddressBar />
    <div class="stuff_carry">
      <van-row>
        <van-col span="5">
          <span>运费</span>
        </van-col>
        <van-col span="4" align="center" offset="15" class="cast_text">
          12.00
        </van-col>
      </van-row>
    </div>
    <div class="pay_bar">
      <van-submit-bar
        :price="3020"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
  import StuffItem from './component/StuffItem'
  import StuffTop from './component/StuffTop'
  import StuffAddressBar from './component/StuffAddressBar'
  import Vue from 'vue';
  import { Panel } from 'vant';
  import { SubmitBar } from 'vant';

  Vue.use(SubmitBar);
  Vue.use(Panel);
    export default {
      name: "BuyStuff",
      components: {
        StuffItem, StuffTop, StuffAddressBar
      },
    }
</script>

<style scoped>
.buy_stuff{
  height: 100%;
  background-color: #f1f1f1;
}
  .stuff_carry{
    padding: 1rem 9px;
    background-color: #fafafa;
    margin: 4px 0;
    color: #87898a;
  }
  .cast_text{
    color: #de4646;
  }
</style>
