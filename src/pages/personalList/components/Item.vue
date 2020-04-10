<template>
    <div class="list_item">
      <van-card
        v-for="(item,index) in list"
        num="2"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
        :key="index"
      />
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Card } from 'vant';

  Vue.use(Card);
    export default {
        name: "Item",
      data() {
          return {
            props: ['RentOrSail'],
            list: [
              {
                id: '1',
                name: 'item1',
                price: '2.00',
                desc: 'this id desc',
                title: 'title',
                thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg'
              },
              {
                id: '1',
                name: 'item2',
                price: '2.00',
                desc: 'this id desc 2',
                title: 'title 2',
                thumb: 'https://img.yzcdn.cn/vant/cat.jpeg'
              }
            ],
        }
      },

    }
</script>

<style scoped>

</style>
