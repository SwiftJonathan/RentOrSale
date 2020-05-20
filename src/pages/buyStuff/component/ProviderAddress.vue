<template>
  <div class="provider_post">
    <van-form id="formBuyStuff" @submit="onSubmit"  enctype="multipart/form-data">
      <div class="post_select">
        <van-row>
          <van-col span="9">
            <span>请选择物品交易方式</span>
          </van-col>
          <van-col span="14" align="center" offset="1" class="cast_text">
            <van-radio-group v-model="postmethod" direction="horizontal" name="postmethod">
              <van-radio name="1" icon-size="18px">线下交易</van-radio>
              <van-radio name="2" icon-size="18px">邮寄</van-radio>
            </van-radio-group>
          </van-col>
        </van-row>
      </div>
      <!--    邮寄-->
      <div v-show="postmethod==='2'">
        <StuffAddressBar />
        <div class="stuff_carry">
          <van-row>
            <van-col span="5">
              <span>运费</span>
            </van-col>
            <van-col span="4" align="center" offset="15" class="cast_text">
              {{stuffDetailMessage.freight}}
            </van-col>
          </van-row>
        </div>
      </div>
      <!--    线下-->
      <div v-show="postmethod==='1'">
        <div class="provider_addrss">
          <van-cell-group>
            <van-cell title="姓名" :value="stuffDetailMessage.ownerName" />
            <van-cell title="手机号" :value="stuffDetailMessage.ownerPhone" />
            <van-cell title="地址" :value="stuffDetailMessage.ownerAddress" />
          </van-cell-group>
        </div>
      </div>
      <div class="pay_bar">
        <van-submit-bar
          :price=" ((postmethod === '1' ? 0 : stuffDetailMessage.freight) + (BuyOrRent === '0' ? stuffDetailMessage.price : stuffDetailMessage.price * days + stuffDetailMessage.deposit)) * 100"
          button-text="提交订单"

        />
<!--        @submit="onSubmit"-->
      </div>
      <div class="rent" v-if="BuyOrRent === '1'">
        <div class="stuff_carry">
          <van-row>
            <van-col span="5">
              <span>押金</span>
            </van-col>
            <van-col span="4" align="center" offset="15" class="cast_text">
              {{stuffDetailMessage.deposit}}
            </van-col>
          </van-row>
        </div>
        <div class="stuff_carry">
          <van-row>
            <van-col span="5">
              <span>租赁天数</span>
            </van-col>
            <van-col span="8" align="center" offset="11" class="cast_text">
              <van-stepper v-model="days" />
            </van-col>
          </van-row>
        </div>
      </div>
    </van-form>
  </div>
</template>

<script>
  import StuffAddressBar from '../component/StuffAddressBar'
  import Vue from 'vue';
  import { Cell, CellGroup } from 'vant';
  import { mapActions, mapGetters } from "vuex";
  import axios from "axios";
  import {HTTP_URL} from '@/store/const.js'

  Vue.use(Cell);
  Vue.use(CellGroup);
    export default {
      name: "ProviderAddress",
      components: {StuffAddressBar},
      props: ['BuyOrRent'],
      data() {
          return {
            postmethod: '1',
            days: '',
            // totalprice: this.stuffDetailMessage.freight + this.stuffDetailMessage.price,
            // unitprice:'',
            // // stuffprice: '',
            // //运费
            // freight: '0.00',
            // //押金
            // deposit: '',
            // statu: null,
            // type: 0,
            // name: 'Tony',
            // phone: '10086',
            // address: '湖南省郴州市',
            // buyerUserId: 5,
            // providerUserId: 7,
            // proId: 6,
            // rentStartTime: null,
            // rentEndTime: null
          }
      },
      computed: {
        ...mapGetters({
          stuffDetailMessage: "getStuffDetailMessage",
          user: "getUser",
        }),
      },
      methods: {
        onSubmit(value){
          const params = {
            name: this.stuffDetailMessage.ownerName,
            phone: this.stuffDetailMessage.ownerPhone,
            address: this.stuffDetailMessage.ownerAddress,
            postmethod:this.postmethod,
            buyerUserId: this.user.id,
            providerUserId: this.stuffDetailMessage.providerUserId,
            proId: this.stuffDetailMessage.id,
            //运费
            freight: this.postmethod === '1' ? '0' : this.stuffDetailMessage.freight,
            statu: 0,
          };
          if (this.BuyOrRent === '0'){
            params["stuffprice"] = this.stuffDetailMessage.price;
            params["totalprice"] = this.postmethod === '1' ? '0' : this.stuffDetailMessage.freight + this.stuffDetailMessage.price;
          }else{
            params["unitprice"] = this.stuffDetailMessage.rentPrice;
            params["rentDays"] = this.days;
            params["stuffprice"] = this.stuffDetailMessage.rentPrice * this.days;
            params["totalprice"] = this.postmethod === '1' ? '0' : this.stuffDetailMessage.freight + this.stuffDetailMessage.deposit + this.stuffDetailMessage.rentPrice * this.days;
          }
          console.log("providerAddress params", params);
          let req_url = `${HTTP_URL}/order/addBuyOrder`;
          if (this.BuyOrRent === '1')
            req_url = `${HTTP_URL}/order/addRentOrder`;
          axios.post(req_url, params)
            .then(
              res => {
                console.log("sucess");
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
</script>

<style scoped>
.provider_addrss{
  background-color: #fafafa;
  color: #87898a;
  padding: 1rem 9px;
  margin: 4px 0;
  line-height: 1.5;
}
  .provider_post{
    width: 100%;

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
