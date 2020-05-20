<template>
  <div class="person_list">
    <TopReturnBar :msg="this.$route.params.name" />
<!--    <div>RentOrSell: {{RentOrSell}}</div>-->
<!--    <div>publishOrSail: {{publishOrSail}}</div>-->
    <van-tabs v-model="RentOrSell">
      <van-tab title="转卖">
        <Item rent_or_sell="0" out_or_in="0" :publish_or_sale=this.$route.params.publishOrSail />
      </van-tab>
      <van-tab title="出租">
        <Item rent_or_sell="1" out_or_in="0" :publish_or_sale=this.$route.params.publishOrSail  />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import TopReturnBar from '../../components/TopReturnBar'
  import Item from './components/Item'
  import Vue from 'vue';
  import { Tab, Tabs } from 'vant';
  import { mapActions, mapGetters } from "vuex";

  Vue.use(Tab);
  Vue.use(Tabs);
  export default {
    name: "PersonalOutList",
    components: {
      TopReturnBar, Item
    },
    props: ["name"],
    data() {
      return {
        //RentOrSell: index: 1转卖，2租出
        RentOrSell: '',
        //publishOrSail 发布或者卖出： 0发布，1卖出
        publishOrSail: '',
      }
    },
    methods: {
      ...mapActions({
        fetchSaleStuffList: "fetchSaleStuffList",
        fetchRentStuffList: "fetchRentStuffList",

      }),
    },
    computed: {
      ...mapGetters({
        user: "getUser"
      })
    },
    mounted() {
      console.log("params",this.$route.params);
      console.log("user", this.user);
      this.publishOrSail = this.$route.params.publishOrSail;
      this.fetchSaleStuffList({type: this.$route.params.publishOrSail, user_id: this.user.id});
      this.fetchRentStuffList({type: this.$route.params.publishOrSail, user_id: this.user.id});
      console.log("PersonalItemList salelist is ", this.saleStuffList);
      console.log("PersonalItemList rentlist is ", this.rentStuffList);
    }
  }
</script>

<style scoped>

</style>
