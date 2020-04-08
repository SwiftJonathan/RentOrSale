<template>
<div>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
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
          title: '',
          desc: '',
          price: '',
          num: '',
          thumb: ''
        };
      }
    }
</script>

<style scoped>

</style>
