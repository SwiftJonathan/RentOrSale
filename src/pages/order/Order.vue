<template>
    <div class="order">
<!--      <TopReturnBar msg="" />-->
      <OrderTop :msg="this.$route.params.OutOrIn === '0' ? present_statu.provider_show : present_statu.buyer_show" />
      <OrderDetail />
      <div class="order_btm">
        <div v-if="this.$route.params.OutOrIn === '0' ? present_statu.provider_btn : present_statu.buyer_btn" class="order_btn" @click="handleClick('btn1')">
          {{this.$route.params.OutOrIn === '0' ? present_statu.provider_btn : present_statu.buyer_btn}}
        </div>
        <div  v-if="this.$route.params.OutOrIn === '0' ? present_statu.provider_btn2 : present_statu.buyer_btn2" class="order_btn2" @click="handleClick('btn2')">
          {{this.$route.params.OutOrIn === '0' ? present_statu.provider_btn2 : present_statu.buyer_btn2}}
        </div>
      </div>
    </div>
</template>

<script>
  // import TopReturnBar from '../../components/TopReturnBar'
  import OrderTop from './components/OrderTop'
  import OrderDetail from './components/OrderDetail'
  import { mapActions, mapGetters } from "vuex";
  import {HTTP_URL} from '@/store/const.js'
  import axios from "axios";

  export default {
    name: "Order",
    components: {
      OrderTop, OrderDetail
    },
    data() {
      return {
        present_statu: {
          buyer_show: '完成交易',
          provider_show: '完成交易',
          buyer_btn: '',
          provider_btn:'',
          provider_btn2:'',
        },
        orderStatus:[
          {
            buyer_show: '已下单',
            provider_show: '已下单',
            buyer_btn: '',
            provider_btn:'确认订单',
            provider_btn2:'拒绝订单'
          },
          {
            buyer_show: '交易中',
            provider_show: '交易中',
            buyer_btn: '确认收货',
            provider_btn:'已给交易',
            provider_btn2:'寄出',
          },
          {
            buyer_show: '交易中',
            provider_show: '交易中',
            buyer_btn: '确认收货',
            provider_btn:'已给交易',
            provider_btn2:'寄出',
          },
          {
            buyer_show: '完成交易',
            provider_show: '完成交易',
            buyer_btn: '',
            provider_btn:'',
            provider_btn2:'',
          },
          {
            buyer_show: '订单已拒绝',
            provider_show: '订单已拒绝',
            buyer_btn: '',
            provider_btn:'',
            provider_btn2:'',
          }],
        rentStatus:[
          {
            //0
            buyer_show: '已下单',
            provider_show: '已下单',
            buyer_btn: '',
            provider_btn:'确认订单',
            provider_btn2:'拒绝订单'
          },
          {
            //1
            buyer_show: '交易中',
            provider_show: '交易中',
            buyer_btn: '确认收货',
            provider_btn:'已给交易',
            provider_btn2:'寄出',
          },
          {
            //2
            buyer_show: '交易中',
            provider_show: '交易中',
            buyer_btn: '确认收货',
            provider_btn:'已给交易',
            provider_btn2:'寄出',
          },
          {
            //3
            buyer_show: '租赁中',
            provider_show: '租赁中',
            buyer_btn: '归还物品',
            buyer_btn2: '续租物品',
            provider_btn:'',
            provider_btn2:'',
          },
          {
            //4
            buyer_show: '归还中',
            provider_show: '归还中',
            buyer_btn: '',
            buyer_btn2: '',
            provider_btn:'确认收货',
            provider_btn2:'',
          },
          {
            //5
            buyer_show: '完成交易',
            provider_show: '完成交易',
            buyer_btn: '',
            provider_btn:'',
            provider_btn2:'',
          },
          {
            //6
            buyer_show: '申请续租',
            provider_show: '申请续租',
            buyer_btn: '撤销申请',
            buyer_btn2: '',
            provider_btn:'同意申请',
            provider_btn2:'拒绝申请',
          },
          {
            //7
            buyer_show: '超期归还',
            provider_show: '超期归还',
            buyer_btn: '归还',
            buyer_btn2: '',
            provider_btn:'',
            provider_btn2:'',
          },
          {
            //8
            buyer_show: '归还中',
            provider_show: '归还中',
            buyer_btn: '',
            buyer_btn2: '',
            provider_btn:'确认收货',
            provider_btn2:'',
          },
          {
            //9
            buyer_show: '超期未归还',
            provider_show: '超期未归还',
            buyer_btn: '',
            provider_btn:'',
            provider_btn2:'',
          },
          {
            //10
            buyer_show: '订单已拒绝',
            provider_show: '订单已拒绝',
            buyer_btn: '',
            provider_btn:'',
            provider_btn2:'',
          }]
      }
    },
    computed: {
      ...mapGetters({
        orderDetailMessage: "getOrderDetailMessage",
        user: "getUser",
      })
    },
    methods: {
      handleClick(btn){
        let statu = this.orderDetailMessage.statu;
        let req_url = `${HTTP_URL}/order/ensureOrder/${this.orderDetailMessage.id}`;
        if (this.$route.params.OrderOrRent === '0'){
          if (this.$route.params.OutOrIn === '0'){
            switch (statu) {
              case '0':
                if (btn === 'btn1'){
                  //确认订单-->statu:1
                  req_url = `${HTTP_URL}/order/ensureOrder/${this.orderDetailMessage.id}`;
                }else {
                  //拒绝订单-->statu:4
                  req_url = `${HTTP_URL}/order/refuseOrder/${this.orderDetailMessage.id}`;
                }
                break;
              case '1':
                //确定交易-->statu:2
                req_url = `${HTTP_URL}/order/ensureSale/${this.orderDetailMessage.id}`;
                break;
            }
            axios.get(req_url)
              .then(
                res => {
                  this.$router.push({
                    name: "PersonalOutList",
                    params: {
                      name: "我卖出的",
                      //publishOrSail 发布或者卖出： 0发布，1卖出
                      publishOrSail: "1"
                    }
                  });
                  alert("success");
                  console.log(res);
                },
                rej => {
                  console.log("faild");
                  console.log(rej);
                }
              );

          }else {
            switch (statu) {
              case '2':
                //确认收货-->statu: 3
                req_url = `${HTTP_URL}/order/ensureStuff/${this.orderDetailMessage.id}`;
                break;
            }
            axios.get(req_url)
              .then(
                res => {
                  this.$router.push({
                    name: "PersonalInList",
                    params: {
                      name: "我买到的",
                      //saleOrRent: 0买到，1租入
                      saleOrRent: "0"
                    }
                  });
                  alert("success");
                  console.log(res);
                },
                rej => {
                  console.log("faild");
                  console.log(rej);
                }
              );
          }
        }else {
          if (this.$route.params.OutOrIn === '0'){
            switch (statu) {
              case '0':
                if (btn === 'btn1'){
                  //确认订单-->statu:1
                  req_url = `${HTTP_URL}/order/ensureRent/${this.orderDetailMessage.id}`;
                }else {
                  //拒绝订单-->statu:4
                  req_url = `${HTTP_URL}/order/refuseRent/${this.orderDetailMessage.id}`;
                }
                break;
              case '1':
                //确定交易-->statu:2
                req_url = `${HTTP_URL}/order/ensureRentTrans/${this.orderDetailMessage.id}`;
                break;
              case '4':
              case '8':
                //确定归还-->statu:5
                req_url = `${HTTP_URL}/order/ensureReturn/${this.orderDetailMessage.id}`;
                break;
              case '6':
                //确定续租-->statu:3， 拒绝续租 --》 statu:3
                if (btn === 'btn1'){
                  //确定续租-->statu:1
                  req_url = `${HTTP_URL}/order/ensureRerent/${this.orderDetailMessage.id}`;
                }else {
                  //拒绝续租-->statu:4
                  req_url = `${HTTP_URL}/order/refuseRerent/${this.orderDetailMessage.id}`;
                }
                break;
            }
            axios.get(req_url)
              .then(
                res => {
                  this.$router.push({
                    name: "PersonalOutList",
                    params: {
                      name: "我卖出的",
                      //publishOrSail 发布或者卖出： 0发布，1卖出
                      publishOrSail: "1"
                    }
                  });
                  alert("success");
                  console.log(res);
                },
                rej => {
                  console.log("faild");
                  console.log(rej);
                }
              );
          }else {
            switch (statu) {
              case '2':
                //确认收货-->statu: 3
                req_url = `${HTTP_URL}/order/ensureStuff/${this.orderDetailMessage.id}`;
                break;
              case '3':
                if (btn === 'btn1'){
                  //归还物品-->statu:4
                  req_url = `${HTTP_URL}/order/returnStuff/${this.orderDetailMessage.id}`;
                }else {
                  //续租物品-->statu:4
                  req_url = `${HTTP_URL}/order/rerentStuff/${this.orderDetailMessage.id}`;
                }
                break;
              case '6':
                //撤销申请-->statu: 3
                req_url = `${HTTP_URL}/order/revokeRerent/${this.orderDetailMessage.id}`;
                break;
              case '7':
                //超期归还
                break;
            }
            axios.get(req_url)
              .then(
                res => {
                  this.$router.push({
                    name: "PersonalInList",
                    params: {
                      name: "我租到的",
                      //saleOrRent: 0买到，1租入
                      saleOrRent: "1"
                    }
                  });
                  alert("success");
                  console.log(res);
                },
                rej => {
                  console.log("faild");
                  console.log(rej);
                }
              );
          }
        }
      }
    },
    mounted() {
      console.log("this orderDetailMessage", this.orderDetailMessage);
      console.log("this orderDetailMessage statu", this.orderDetailMessage.statu);
      console.log("this.orderStatus", this.orderStatus);
      console.log("this.orderStatus[Number(this.orderDetailMessage.statu)+1]", this.orderStatus[Number(this.orderDetailMessage.statu)+1]);
      console.log("Number(this.orderDetailMessage.statu)+1", Number(this.orderDetailMessage.statu)+1);
      if (this.$route.params.OrderOrRent === '0'){
        this.present_statu = this.orderStatus[this.orderDetailMessage.statu];
      } else{
        this.present_statu = this.rentStatus[this.orderDetailMessage.statu];
      }
      console.log("this.present_statu", this.present_statu);
      console.log("order params", this.$route.params);
    },
  }
</script>

<style scoped>
  .top_bar{

  }
 .order_top{
  background-color: #40976D;
}
 .order_btm{
   width: 100%;
   display: flex;
   /* align-content: space-around; */
   justify-content: space-around;
   padding: 20px 0;
 }
  .order_btn{
    width: 45%;
    text-align: center;
    background-color: #40976d;
    color: aliceblue;
    height: 37px;
    border-radius: 30px;
    line-height: 37px;
  }
  .order_btn2{
    width: 45%;
    text-align: center;
    background-color: #E3CA93;
    color: aliceblue;
    height: 37px;
    border-radius: 30px;
    line-height: 37px;
  }
</style>
