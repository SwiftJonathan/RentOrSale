<template>
<div class="order_detail">
  <van-card
    :num="orderDetailMessage.rentDays"
    :price="order_or_rent === '0' ? orderDetailMessage.stuffprice : orderDetailMessage.unitprice"
    :desc="orderDetailMessage.proDetail"
    :title="orderDetailMessage.proName"
    :thumb="orderDetailMessage.proimgs[0].imgUrl"
  />

  <van-cell-group>
    <van-cell title="商品价格" :value="orderDetailMessage.stuffprice" />
    <van-cell title="运费" :value="orderDetailMessage.freight" label="描述信息" />
    <van-cell title="实付总价" :value="orderDetailMessage.totalprice" />
    <van-cell title="下单日期" :value="orderDetailMessage.rentStartTime" />
  </van-cell-group>
  <van-cell-group>
    <van-cell title="收货地址" :value="orderDetailMessage.name+' '+orderDetailMessage.phone" :label="orderDetailMessage.address"/>
  </van-cell-group>

  <van-cell-group>
<!--    <van-cell title="订单信息" />-->
<!--    <van-cell title="卖家昵称:" size="small" />-->
    <van-cell title="交易时间" size="small"/>
  </van-cell-group>
</div>
</template>

<script>
  import Vue from 'vue';
  import { Card } from 'vant';
  import { Cell, CellGroup } from 'vant';
  import { mapActions, mapGetters } from "vuex";

  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Card);
    export default {
        name: "OrderDetail",
      props: ["order_or_rent"],
      data() {
          return {
            name: 'chen',
            phone: '13310100101',
          }
      },
      computed: {
        ...mapGetters({
          orderDetailMessage: "getOrderDetailMessage"
        })
      },
    }
</script>

<style scoped>

</style>
