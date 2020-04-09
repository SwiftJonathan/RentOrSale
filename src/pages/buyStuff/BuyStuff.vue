<template>
  <div class="buy_stuff">
    <StuffTop msg="购买宝贝" />
    <StuffItem/>
<!--    选择物品交易方式-->
    <div class="post_select">
      <van-row>
        <van-col span="9">
          <span>请选择物品交易方式</span>
        </van-col>
        <van-col span="14" align="center" offset="1" class="cast_text">
          <van-radio-group v-model="postmethod" direction="horizontal">
            <van-radio name="1" icon-size="18px">线下交易</van-radio>
            <van-radio name="2" icon-size="18px">邮寄</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
    </div>
<!--    邮寄-->
    <div v-show="postmethod==2">
      <StuffAddressBar />
      <div class="stuff_carry">
        <van-row>
          <van-col span="5">
            <span>运费</span>
          </van-col>
          <van-col span="4" align="center" offset="15" class="cast_text">
            {{freight}}
          </van-col>
        </van-row>
      </div>
    </div>
<!--    线下-->
    <div v-show="postmethod==1">
      <ProviderAddress />
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
  import StuffTop from '../../components/TopReturnBar'
  import StuffAddressBar from './component/StuffAddressBar'
  import ProviderAddress from './component/ProviderAddress'
  import Vue from 'vue';
  import { Panel } from 'vant';
  import { SubmitBar } from 'vant';
  import { RadioGroup, Radio } from 'vant';

  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(SubmitBar);
  Vue.use(Panel);
    export default {
      name: "BuyStuff",
      components: {
        StuffItem, StuffTop, StuffAddressBar, ProviderAddress
      },
      data() {
        return {
          title: '',
          detail: '',
          unitprice:'',
          stuffprice: '',
          totalprice: '',
          //运费
          freight: '0.00',
          //押金
          deposit: '',
          name: '',
          address: '',
          phone: '',
          postmethod:'',
          proId: '',
          buyerUserId: '',
        }
      },
    }
</script>

<style scoped>
.buy_stuff{
  height: 100%;
  background-color: #f1f1f1;
}
  .stuff_carry, .post_select{
    padding: 1rem 9px;
    background-color: #fafafa;
    margin: 4px 0;
    color: #87898a;
  }
  .cast_text{
    color: #de4646;
  }
  .post_select{
    font-size: small;
  }
</style>
