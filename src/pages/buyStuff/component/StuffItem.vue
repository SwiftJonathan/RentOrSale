<template>
<div>
  <van-card
    :num="num"
    :price="stuffDetailMessage.price"
    :desc="stuffDetailMessage.detail"
    :title="stuffDetailMessage.name"
    :thumb="stuffDetailMessage.proimgs[0].imgUrl"
  />
</div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
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
          num: '1',
          thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg'
        };
      },
      computed: {
        ...mapGetters({
          stuffDetailMessage: "getStuffDetailMessage",
        }),
      },
    }
</script>

<style scoped>

</style>
