<template>
    <div class="order">
<!--      <TopReturnBar msg="" />-->
      <OrderTop :msg="this.$route.params.OutOrIn === '0' ? present_statu.provider_show : present_statu.buyer_show"
                :rentmsg="present_statu.rentmsg" :type_method="this.$route.params.typeMethod" />
      <OrderDetail :order_or_rent="this.$route.params.OrderOrRent" />
      <div class="order_btm">
        <div v-if="this.$route.params.OutOrIn === '0' ? present_statu.provider_btn : present_statu.buyer_btn" class="order_btn" @click="handleClick('btn1')">
          {{this.$route.params.OutOrIn === '0' ? present_statu.provider_btn : present_statu.buyer_btn}}
        </div>
        <div  v-if="this.$route.params.OutOrIn === '0' ? present_statu.provider_btn2 : present_statu.buyer_btn2" class="order_btn2" @click="handleClick('btn2')">
          {{this.$route.params.OutOrIn === '0' ? present_statu.provider_btn2 : present_statu.buyer_btn2}}
        </div>
      </div>
      <van-popup v-model="show_pop" position="top" :style="{ height: '17%' }" class="pop">
        <van-cell title="续租天数" value="内容" >
          <van-stepper v-model="rerent_day" />
        </van-cell>
        <van-cell title="" value="内容" >
          <van-button type="primary" @click="handleRerent()">确定</van-button>
        </van-cell>
      </van-popup>
    </div>
</template>

<script>
  // import TopReturnBar from '../../components/TopReturnBar'
  import OrderTop from './components/OrderTop'
  import OrderDetail from './components/OrderDetail'
  import { mapActions, mapGetters } from "vuex";
  import {HTTP_URL} from '@/store/const.js'
  import axios from "axios";
  import Vue from 'vue';
  import { Popup } from 'vant';
  import { Stepper } from 'vant';
  import { Button } from 'vant';
  import { Cell, CellGroup } from 'vant';

  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Button);
  Vue.use(Stepper);
  Vue.use(Popup);
  export default {
    name: "Order",
    components: {
      OrderTop, OrderDetail
    },
    data() {
      return {
        show_pop: false,
        rerent_day: '',
        out_days: '',
        statu: '',
        present_statu: {
          buyer_show: '完成交易',
          provider_show: '完成交易',
          buyer_btn: '',
          provider_btn:'',
          provider_btn2:'',
          rentmsg: ''
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
            buyer_show: '租赁已下单',
            provider_show: '租赁已下单provider',
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
            rentmsg: '',
          },
          {
            //7
            buyer_show: '超期归还',
            provider_show: '超期归还',
            buyer_btn: '超期归还',
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
      handleClickPulish() {
        this.$router.push({
          name: "PersonalOutList",
          params: {
            name: "我发布的",
            //publishOrSail 发布或者卖出： 0发布，1卖出
            publishOrSail: "0",
            typeMethod: '0',
          }
        })
      },
      handleClickSail() {
        this.$router.push({
          name: "PersonalOutList",
          params: {
            name: "我卖出的",
            //publishOrSail 发布或者卖出： 0发布，1卖出
            publishOrSail: "1",
            typeMethod: '1',
          }
        })
      },
      handleClickBuy() {
        this.$router.push({
          name: "PersonalInList",
          params: {
            name: "我买到的",
            //saleOrRent: 0买到，1租入
            saleOrRent: "0",
            typeMethod: '2',
          }
        })
      },
      handleClickRent() {
        this.$router.push({
          name: "PersonalInList",
          params: {
            name: "我租到的",
            //saleOrRent: 0买到，1租入
            saleOrRent: "1",
            typeMethod: '3',
          }
        })
      },
      handleClick(btn){
        console.log("handleClick statu", this.orderDetailMessage.statu);
        console.log("handleClick this.$route.params", this.$route.params);
        // this.statu = this.orderDetailMessage.statu;
        let req_url ;
        if (this.$route.params.OrderOrRent === '0'){
          //卖
          if (this.$route.params.OutOrIn === '0'){
            switch (this.statu) {
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
                  /*this.$router.push({
                    name: "PersonalOutList",
                    params: {
                      name: "我卖出的",
                      //publishOrSail 发布或者卖出： 0发布，1卖出
                      publishOrSail: "1"
                    }
                  });*/
                  alert("success");
                  this.handleClickSail();
                  console.log(res);
                },
                rej => {
                  console.log("faild");
                  console.log(rej);
                }
              );
          }else {
            switch (this.statu) {
              case '2':
                //确认收货-->statu: 3
                req_url = `${HTTP_URL}/order/ensureStuff/${this.orderDetailMessage.id}`;
                break;
            }
            axios.get(req_url)
              .then(
                res => {
                  /*this.$router.push({
                    name: "PersonalInList",
                    params: {
                      name: "我买到的",
                      //saleOrRent: 0买到，1租入
                      saleOrRent: "0"
                    }
                  });*/
                  alert("success");
                  this.handleClickBuy();
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
            switch (this.statu) {
              case 0:
                if (btn === 'btn1'){
                  //确认订单-->statu:1
                  req_url = `${HTTP_URL}/order/ensureRent/${this.orderDetailMessage.id}`;
                }else {
                  //拒绝订单-->statu:4
                  req_url = `${HTTP_URL}/order/refuseRent/${this.orderDetailMessage.id}`;
                }
                break;
              case 1:
                //确定交易-->statu:2
                req_url = `${HTTP_URL}/order/ensureRentTrans/${this.orderDetailMessage.id}`;
                break;
              case 4:
              case 8:
                //确定归还-->statu:5
                req_url = `${HTTP_URL}/order/ensureReturn/${this.orderDetailMessage.id}`;
                break;
              case 6:
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
            console.log("req_url", req_url);
            axios.get(req_url)
              .then(
                res => {
                  /*this.$router.push({
                    name: "PersonalOutList",
                    params: {
                      name: "我卖出的",
                      //publishOrSail 发布或者卖出： 0发布，1卖出
                      publishOrSail: "1"
                    }
                  });*/
                  alert("success");
                  this.handleClickSail();
                  console.log(res);
                },
                rej => {
                  console.log("faild");
                  console.log(rej);
                }
              );
          }else {
            switch (this.statu) {
              case 2:
                //确认收货-->statu: 3
                req_url = `${HTTP_URL}/order/ensureStuffRent/${this.orderDetailMessage.id}`;
                break;
              case 3:
                if (btn === 'btn1'){
                  //归还物品-->statu:4
                  req_url = `${HTTP_URL}/order/returnStuff/${this.orderDetailMessage.id}`;
                }else {
                  //续租物品-->statu:4
                  this.show_pop = true;
                  // req_url = `${HTTP_URL}/order/rerentStuff/${this.orderDetailMessage.id}`;
                  return;
                }
                break;
              case 6:
                //撤销申请-->statu: 3
                req_url = `${HTTP_URL}/order/revokeRerent/${this.orderDetailMessage.id}`;
                break;
              case 7:
                //超期归还
                console.log("超期归还");
                this.$router.push({
                  name: "OuttimeStuff",
                  params: {
                    out_days: this.out_days,
                  }
                });
                break;
            }
            console.log("req_url", req_url);
            axios.get(req_url)
              .then(
                res => {
                  /*this.$router.push({
                    name: "PersonalInList",
                    params: {
                      name: "我租到的",
                      //saleOrRent: 0买到，1租入
                      saleOrRent: "1"
                    }
                  });*/
                  alert("success");
                  this.handleClickRent();
                  console.log(res);
                },
                rej => {
                  console.log("faild");
                  console.log(rej);
                }
              );
          }
        }
      },
      handleRerent(){
        let req_url = `${HTTP_URL}/order/rerentStuff?rentId=${this.orderDetailMessage.id}&days=${this.rerent_day}`;
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
        this.show_pop = false;
      },
      //计算天数差的函数，通用
      DateDiff(sDate1,  sDate2){    //sDate1和sDate2是2002-12-18格式
        console.log("sdata1", sDate1);
        console.log("sdata2", sDate2);
        sDate1 = sDate1.split(" ")[0];
        sDate2 = sDate2.split(" ")[0];
        let  aDate,  oDate1,  oDate2,  iDays
        aDate  =  sDate1.split("-")
        oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])    //转换为12-18-2002格式
        aDate  =  sDate2.split("-")
        oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])
        iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数
        return  iDays
    }
    },
    mounted() {
      console.log("order params", this.$route.params);
      console.log("this orderDetailMessage", this.orderDetailMessage);
      console.log("this orderDetailMessage statu", this.orderDetailMessage.statu);
      console.log("this.orderStatus", this.orderStatus);
      console.log("this.orderStatus[Number(this.orderDetailMessage.statu)+1]", this.orderStatus[Number(this.orderDetailMessage.statu)+1]);
      console.log("Number(this.orderDetailMessage.statu)+1", Number(this.orderDetailMessage.statu)+1);
      console.log("order mounted this.$route.params", this.$route.params);
      this.statu = this.orderDetailMessage.statu;
      if (this.$route.params.OrderOrRent === '0'){
        this.present_statu = this.orderStatus[this.orderDetailMessage.statu];
      } else{
        this.present_statu = this.rentStatus[this.orderDetailMessage.statu];
        if (this.orderDetailMessage.statu === 3){
          let nowDate = new Date().toLocaleDateString().replace(/\//g,'-');
          let days = this.DateDiff(nowDate, this.orderDetailMessage.rentStartTime);
          console.log("this.datediff days", days);
          this.present_statu.rentmsg = '剩余租赁时间 ' + (this.orderDetailMessage.rentDays - days) + ' 天';
          if (days > this.orderDetailMessage.rentDays) {
            this.present_statu = this.rentStatus[7];
            this.statu = 7;
            console.log("this orderDetailMessage statu 7");
            this.out_days = days - this.orderDetailMessage.rentDays;
            this.present_statu.rentmsg = '超出租赁时间 ' + (days - this.orderDetailMessage.rentDays) + ' 天';
            if ((days - this.orderDetailMessage.rentDays) > (this.orderDetailMessage.deposit / this.orderDetailMessage.unitprice)) {
              this.present_statu = this.rentStatus[9];
              this.statu = 9;
              console.log("this orderDetailMessage statu 9");
            }
          }
        }
        if(this.orderDetailMessage.statu === 6){
          this.present_statu.rentmsg = '申请租赁时间 ' + this.orderDetailMessage.rerentDays + ' 天';
        }
        console.log("this.present_statu.rentmsg", this.present_statu.rentmsg);
      }
      console.log("this.present_statu", this.present_statu);
      console.log("this.orderDetailMessage statu", this.orderDetailMessage.statu);
    },
  }
</script>

<style scoped>
  .pop{
    padding: 20px 0;
  }
  .pop > .van-button{
    margin:10px;
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
