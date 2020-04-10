<template>
<div class="order_detail">
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  />
  <van-cell-group>
    <van-cell title="商品价格" value="30.00" />
    <van-cell title="运费" value="10.00" label="描述信息" />
    <van-cell title="实付总价" value="30.00" />
  </van-cell-group>
  <van-cell-group>
    <van-cell title="收货地址" :value="name+' '+phone" label="北京省北京市南京东路235好难缠的大大分别虚拟机的驱动器"/>
  </van-cell-group>

  <van-cell-group>
    <van-cell title="订单信息" />
    <van-cell title="卖家昵称:" size="small" />
    <van-cell title="交易时间" size="small"/>
  </van-cell-group>
</div>
</template>

<script>
  import Vue from 'vue';
  import { Card } from 'vant';
  import { Cell, CellGroup } from 'vant';

  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Card);
    export default {
        name: "OrderDetail",
      data() {
          return {
            name: 'chen',
            phone: '13310100101',
          }
      }
    }
</script>

<style scoped>

</style>
