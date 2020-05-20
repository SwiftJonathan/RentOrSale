<template>
    <div class="person_list">
      <TopReturnBar :msg="this.$route.params.name" />
      <Item :rent_or_sell="this.$route.params.saleOrRent" out_or_in="1" />
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
      name: "PersonalInList",
      components: {
        TopReturnBar, Item
      },
      data() {
        return {
          RentOrSell: '1',
        }
      },
      methods: {
        ...mapActions({
          fetchSaleStuffList: "fetchSaleStuffList",
          fetchRentStuffList: "fetchRentStuffList"
        }),
      },
      computed: {
        ...mapGetters({
          user: "getUser"
        })
      },
      mounted() {
        console.log("userIn", this.user);
        console.log("useridIn", this.user.id);
        this.fetchSaleStuffList({type:2, user_id: this.user.id});
        this.fetchRentStuffList({type:2, user_id: this.user.id});
      }
    }
</script>

<style scoped>

</style>
