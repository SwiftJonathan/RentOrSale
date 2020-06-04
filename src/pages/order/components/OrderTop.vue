<template>
    <div class="order_top">
      <div class="top_icon">
          <van-icon name="arrow-left" @click="handleOrderReturn()" />
      </div>
      <div class="rent_time">{{msg}}</div>
      <div class="rent_time rentmsg" v-if="rentmsg">{{rentmsg}}</div>
    </div>
</template>

<script>
    export default {
      name: "OrderTop",
      props: ["msg", "rentmsg", "type_method"],
      data() {
          return {
            status: '订单完成',
          }
      },
      mounted() {
        console.log("order top type_method");
        console.log("order top");
        console.log("order top", this.type_method);
      },
      methods: {
        handleOrderReturn(){
          console.log("order top props");
          console.log("ordertop.typemethod", this.type_method);
          switch (this.type_method) {
            case '0':
              this.handleClickPulish();
              break;
            case '1':
              console.log("typemethod 1", this.type_method);
              this.handleClickSail();
              break;
            case '2':
              this.handleClickBuy();
              break;
            case '3':
              this.handleClickRent();
          }
        },
        handleClickPulish() {
          this.$router.push({
            name: "PersonalOutList",
            params: {
              name: "我发布的",
              //publishOrSail 发布或者卖出： 0发布，1卖出
              publishOrSail: "0",
              typeMethod: '0',
            }
          })
        },
        handleClickSail() {
          this.$router.push({
            name: "PersonalOutList",
            params: {
              name: "我卖出的",
              //publishOrSail 发布或者卖出： 0发布，1卖出
              publishOrSail: "1",
              typeMethod: '1',
            }
          })
        },
        handleClickBuy() {
          this.$router.push({
            name: "PersonalInList",
            params: {
              name: "我买到的",
              //saleOrRent: 0买到，1租入
              saleOrRent: "0",
              typeMethod: '2',
            }
          })
        },
        handleClickRent() {
          this.$router.push({
            name: "PersonalInList",
            params: {
              name: "我租到的",
              //saleOrRent: 0买到，1租入
              saleOrRent: "1",
              typeMethod: '3',
            }
          })
        }
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
