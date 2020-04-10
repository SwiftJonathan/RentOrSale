<template>
    <div class="order">
<!--      <TopReturnBar msg="" />-->
      <OrderTop />
      <OrderDetail />
    </div>
</template>

<script>
  // import TopReturnBar from '../../components/TopReturnBar'
  import OrderTop from './components/OrderTop'
  import OrderDetail from './components/OrderDetail'
    export default {
        name: "Order",
      components: {
        OrderTop, OrderDetail
      }
    }
</script>

<style scoped>
  .top_bar{

  }
 .order_top, .order{
  background-color: #40976D;
}
</style>
