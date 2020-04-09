<template>
  <div class="buy_stuff">
    <StuffTop msg="购买宝贝" />
    <StuffItem/>
<!--    选择物品交易方式-->
    <ProviderAddress />
  </div>
</template>

<script>
  import StuffItem from './component/StuffItem'
  import StuffTop from '../../components/TopReturnBar'
  import StuffAddressBar from './component/StuffAddressBar'
  import ProviderAddress from './component/ProviderAddress'
  import Vue from 'vue';
  import { Panel } from 'vant';
  import { SubmitBar } from 'vant';
  import { RadioGroup, Radio } from 'vant';

  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(SubmitBar);
  Vue.use(Panel);
    export default {
      name: "BuyStuff",
      components: {
        StuffItem, StuffTop, StuffAddressBar, ProviderAddress
      },
      data() {
        return {
          title: '',
          detail: '',
          unitprice:'',
          stuffprice: '',
          totalprice: '',
          //运费
          freight: '0.00',
          //押金
          deposit: '',
          name: '',
          address: '',
          phone: '',
          postmethod:'',
          proId: '',
          buyerUserId: '',
        }
      },
    }
</script>

<style scoped>
.buy_stuff{
  height: 100%;
  background-color: #f1f1f1;
}
  .stuff_carry, .post_select{
    padding: 1rem 9px;
    background-color: #fafafa;
    margin: 4px 0;
    color: #87898a;
  }
  .cast_text{
    color: #de4646;
  }
  .post_select{
    font-size: small;
  }
</style>
