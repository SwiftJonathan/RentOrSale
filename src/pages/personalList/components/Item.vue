<template>
    <div class="list_item">
      <div>
        <van-card
          v-for="(item,index) in (rent_or_sell === '0' ? saleStuffList: rentStuffList)"
          :price="item.price"
          :desc="item.detail"
          :title="item.name + item.id"
          :thumb="item.img ? item.img : ((item.proimgs == null || item.proimgs.length === 0) ? noImageUrl : item.proimgs[0].imgUrl)"
        :key="index"
    />
    </div>
    </div>
    </template>

    <script>
      import {NO_IMG_URL} from '@/store/const.js'
  import Vue from 'vue';
  import { Card } from 'vant';
  import { mapActions, mapGetters } from "vuex";

  Vue.use(Card);
  export default {
      name: "Item",
      //RentOrSell: index: 1转卖，2租出
      props: ["rent_or_sell"],
      data() {
          return {
            RentOrSail: '0',
            noImageUrl: NO_IMG_URL,
            list: [
              /*{
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
              }*/
            ],
        }
      },
      computed: {
        ...mapGetters({
          saleStuffList: "getSaleStuffList",
          rentStuffList: "getRentStuffList"
        })
      }
    }
</script>

<style scoped>

</style>
