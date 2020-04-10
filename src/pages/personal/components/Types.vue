<template>
    <div class="type_div">
      <div class="type_block_a">
        <div class="type_con">
          <van-icon name="gift" color="#FFFFFF" size="7vw" />
          <div class="type_name">我发布的</div>
        </div>
      </div>
      <div class="type_block_b">
        <div class="type_con">
          <van-icon name="shop" color="#40976D" size="7vw" />
          <div class="type_name">我卖出的</div>
        </div>
      </div>
      <div class="type_block_c">
        <div class="type_con">
          <van-icon name="award" color="#E3CA93" size="7vw" />
          <div class="type_name">我买到的</div>
        </div>
      </div>
      <div class="type_block_d">
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

  Vue.use(Icon);
    export default {
        name: "Types"
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
