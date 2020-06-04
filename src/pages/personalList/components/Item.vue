<template>
    <div class="list_item">
      <div>
        <van-card
          v-for="(item,index) in (rent_or_sell === '0' ? saleStuffList: rentStuffList)"
          :price="item.price"
          :desc="item.detail"
          :title="item.name"
          :thumb="item.img ? item.img : ((item.proimgs == null || item.proimgs.length === 0) ? noImageUrl : item.proimgs[0].imgUrl)"
        :key="index"
          @click="handleOrderClick(index)"
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
      props: ["rent_or_sell", "publish_or_sale", "out_or_in", "type_method"],
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
      },
    methods: {
      ...mapActions({
        fetchOrderDetailMessage: "fetchOrderDetailMessage",
        fetchStuffDetailMessage: "fetchStuffDetailMessage",
      }),
      handleOrderClick(index){
        console.log("handleOrderClick val", this.rent_or_sell === '0'? this.saleStuffList[index] : this.rentStuffList[index]);
        console.log("rent_or_sell", this.rent_or_sell);
        console.log("publish_or_sale", this.publish_or_sale);
        console.log("out_or_in", this.out_or_in);
        if (this.publish_or_sale === '0'){
          // this.fetchStuffDetailMessage({stuffMessage: this.rent_or_sell === '0'? this.saleStuffList[index] : this.rentStuffList[index]});
          this.$router.push({
            name: "StuffMessage",
            params: {
              stuffId:  this.rent_or_sell === '0'? this.saleStuffList[index].id : this.rentStuffList[index].id,
              listOrOrder: 1
            }
          })
        }else{
          this.fetchOrderDetailMessage({orderMessage:  this.rent_or_sell === '0'? this.saleStuffList[index] : this.rentStuffList[index] });
          this.$router.push({
            name: "Order",
            params: {
              OrderOrRent: this.rent_or_sell,
              OutOrIn: this.out_or_in,
              typeMethod: this.type_method,
            }
          })
        }
      }
    }
    }
</script>

<style scoped>

</style>
