<template>
  <div class="person_list">
    <TopReturnBar msg="我卖出的" />
    <van-tabs v-model="RentOrSell">
      <van-tab title="我卖出的">
        <Item />
      </van-tab>
      <van-tab title="我租出的">
        <Item />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import TopReturnBar from '../../components/TopReturnBar'
  import Item from './components/Item'
  import Vue from 'vue';
  import { Tab, Tabs } from 'vant';

  Vue.use(Tab);
  Vue.use(Tabs);
  export default {
    name: "PersonalOutList",
    components: {
      TopReturnBar, Item
    },
    data() {
      return {
        RentOrSell: '1',
      }
    }
  }
</script>

<style scoped>

</style>
