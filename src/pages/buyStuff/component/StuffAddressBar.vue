<template>
    <div class="address_bar">
      <van-row>
        <van-col span="5">
          <span>收货地址</span>
        </van-col>
        <van-col span="16" align="right">
          请选择地址
        </van-col>
        <van-col span="2" offset="1">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Icon } from 'vant';
  import { Col, Row } from 'vant';

  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Icon);
    export default {
        name: "StuffAddressBar"
    }
</script>

<style scoped>
.address_bar{
  padding: 2rem 9px;
  background-color: #fafafa;
  margin: 4px 0;
  color: #87898a;
}
</style>
