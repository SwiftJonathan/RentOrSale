<template>
  <div class="provider_post">
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
    <div class="provider_addrss">
      <van-cell-group>
        <van-cell title="姓名" :value="name" />
        <van-cell title="手机号" :value="phone" />
        <van-cell title="地址" :value="address" />
      </van-cell-group>
    </div>
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
  import StuffAddressBar from '../component/StuffAddressBar'
  import Vue from 'vue';
  import { Cell, CellGroup } from 'vant';

  Vue.use(Cell);
  Vue.use(CellGroup);
    export default {
      name: "ProviderAddress",
      components: {StuffAddressBar},
      data() {
          return {
            name: 'Tony',
            phone: '10086',
            address: '湖南省郴州市',
            postmethod:'1',
            unitprice:'',
            stuffprice: '',
            totalprice: '',
            //运费
            freight: '0.00',
            //押金
            deposit: '',
          }
      }
    }
</script>

<style scoped>
.provider_addrss{
  background-color: #fafafa;
  color: #87898a;
  padding: 1rem 9px;
  margin: 4px 0;
  line-height: 1.5;
}
  .provider_post{
    width: 100%;

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
