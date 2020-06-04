<template>
    <div class="type_div">
      <div class="type_block_a">
        <div class="type_con" @click="handleClickPulish">
          <van-icon name="gift" color="#FFFFFF" size="7vw" />
          <div class="type_name">我发布的</div>
        </div>
      </div>
      <div class="type_block_b" @click="handleClickSail">
        <div class="type_con">
          <van-icon name="shop" color="#40976D" size="7vw" />
          <div class="type_name">我卖出的</div>
        </div>
      </div>
      <div class="type_block_c" @click="handleClickBuy">
        <div class="type_con">
          <van-icon name="award" color="#E3CA93" size="7vw" />
          <div class="type_name">我买到的</div>
        </div>
      </div>
      <div class="type_block_d" @click="handleClickRent">
        <div class="type_con">
          <van-icon name="diamond" color="#FFFFFF" size="7vw" />
          <div class="type_name">我租到的</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Icon } from 'vant';
  import { mapActions, mapGetters } from "vuex";

  Vue.use(Icon);
    export default {
      name: "Types",
      computed: {
        ...mapGetters({
          user: "getUser"
        }),
      },
      methods: {
        beforeHandler(){
          console.log("beforeHandler user", this.user);
          console.log("beforeHandler user.id", this.user.id);
          console.log("store", this.$store.state.user);
          if (this.user.id === undefined){
            this.$router.push({
              name: "Login",
            });
            return false;
          }
          return true;
        },
        handleClickPulish() {
          if (this.beforeHandler()){
            this.$router.push({
              name: "PersonalOutList",
              params: {
                name: "我发布的",
                //publishOrSail 发布或者卖出： 0发布，1卖出
                publishOrSail: "0",
                typeMethod: '0',
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
                publishOrSail: "1",
                typeMethod: '1',
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
                saleOrRent: "0",
                typeMethod: '2',
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
                saleOrRent: "1",
                typeMethod: '3',
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
  .type_div{
    display: flex;
    flex-flow: wrap;
    padding: 12px 28px;
    justify-content: space-around;
    margin: 10vw 0vw;
  }
.type_block_a, .type_block_b, .type_block_c, .type_block_d{
  width: 38vw;
  height: 38vw;
  margin: 2vw 0;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #dadada;
  display: flex;
}
.type_con{
  padding: 0 3vw;
  align-self: center;
  width: 100%;
}
  .type_block_a{
    background-color: #40976D;
    color: #FFFFFF;
  }
  .type_block_b{
    background-color: #FFFFFF;
    color: #40976D;
  }
  .type_block_c{
    background-color: #FFFFFF;
    color: #E3CA93;

  }
  .type_block_d{
    background-color: #E3CA93;
    color: #FFFFFF;
  }
</style>
