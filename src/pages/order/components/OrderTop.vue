<template>
    <div class="order_top">
      <div class="top_icon">
          <van-icon name="arrow-left" />
      </div>
      <div class="rent_time">{{msg}}</div>
      <div class="rent_time rentmsg" v-if="rentmsg">{{rentmsg}}</div>
    </div>
</template>

<script>
    export default {
      name: "OrderTop",
      props: ["msg", "rentmsg"],
      data() {
          return {
            status: '订单完成',
          }
      },
      mounted() {
        console.log("order top");
        console.log("order top", this.props);
      }
    }
</script>

<style scoped>
  .rent_time{
    margin-top: 3vh;
  }
  .rentmsg{
    font-size: initial;
  }
.order_top{
  width: 100%;
  height: 23vh;
  background-color: #40976D;
  color: aliceblue;
  font-size: large;
  text-align: center;
  justify-items: center;
  /*line-height: 23vh;*/
}
  .top_icon{
    display: flex;
    top: 1.5vh;
    left: 1vh;
    padding: 18px 0px 0px 10px;
  }
</style>
