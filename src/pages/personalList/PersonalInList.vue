<template>
    <div class="person_list">
      <TopReturnBar msg="我买到的" />
      <Item />
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
      name: "PersonalInList",
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
