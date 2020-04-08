<template>
    <div class="top_bar">
      <van-row>
        <van-col span="2">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="10" offset="5">
          购买宝贝
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
        name: "StuffTop"
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
