<template>
    <div class="order_top">
      <div class="top_icon">
          <van-icon name="arrow-left" />
      </div>
      {{status}}
    </div>
</template>

<script>
    export default {
      name: "OrderTop",
      data() {
          return {
            status: '订单完成',
          }
      }
    }
</script>

<style scoped>
.order_top{
  width: 100%;
  height: 23vh;
  background-color: #40976D;
  color: aliceblue;
  font-size: large;
  text-align: center;
  justify-items: center;
  line-height: 23vh;
}
  .top_icon{
    display: flex;
    top: 1.5vh;
    left: 1vh;
    padding: 18px 0px 0px 10px;
  }
</style>
