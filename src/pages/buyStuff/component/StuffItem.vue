<template>
<div>
  <van-card
    :num="num"
    :price="price"
    :desc="detail"
    :title="title"
    :thumb="thumb"
  />
</div>
</template>

<script>
  import Vue from 'vue';
  import { Card } from 'vant';

  Vue.use(Card);
    export default {
      name: "StuffItem",
      data() {
        return {
          title: '商品标题',
          detail: '描述信息',
          price: '2.00',
          num: '2',
          thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg'
        };
      }
    }
</script>

<style scoped>

</style>
