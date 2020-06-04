<template>
  <div class="top_bar">
    <van-row>
      <van-col span="2">
        <van-icon name="arrow-left" @click="clickReturn()" />
      </van-col>
      <van-col span="10" offset="5">
        {{msg}}-{{target}}
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
      name: "TopReturnBar",
      props: ["msg", "target"],
      methods: {
        clickReturn(){
          console.log("target", this.target);
          this.$router.push({
            name: this.target,
          });
        },
        handleClickPulish() {
          if (this.beforeHandler()){
            this.$router.push({
              name: "PersonalOutList",
              params: {
                name: "我发布的",
                //publishOrSail 发布或者卖出： 0发布，1卖出
                publishOrSail: "0"
              }
            })
          }
        },
        handleClickSail() {
          if (this.beforeHandler()){
            this.$router.push({
              name: "PersonalOutList",
              params: {
                name: "我卖出的",
                //publishOrSail 发布或者卖出： 0发布，1卖出
                publishOrSail: "1"
              }
            })
          }
        },
        handleClickBuy() {
          if (this.beforeHandler()){
            this.$router.push({
              name: "PersonalInList",
              params: {
                name: "我买到的",
                //saleOrRent: 0买到，1租入
                saleOrRent: "0"
              }
            })
          }

        },
        handleClickRent() {
          if (this.beforeHandler()){
            this.$router.push({
              name: "PersonalInList",
              params: {
                name: "我租到的",
                //saleOrRent: 0买到，1租入
                saleOrRent: "1"
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
  .top_bar{
    text-align: center;
    padding: 20px 0;
    background-color: #fafafa;
    margin-bottom: 10px;
  }
</style>
