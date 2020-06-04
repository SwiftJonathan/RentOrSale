<template>
  <div class="stuffMessage">
    <!-- 用于显示产品的背景图片 -->
    <div class="background">
<!--      :style="`background-image: url(${stuffDetailMessage.proimgs[0].imgUrl});`"-->
      <img class="img" v-for="(img,index) in stuffDetailMessage.proimgs" :key="index" v-lazy="img.imgUrl" >
    </div>
<!--    留言-->
    <div class="command">
      <van-panel title="留言">
        <div class="msg" v-for="(command,index) in stuffDetailMessage.proCommands" :key="index">
          <div class="ti">{{command.userName}}</div>
          <div class="con">{{command.content}}</div>
        </div>
      </van-panel>
    </div>

    <!-- 标题栏和喜欢收藏按钮 -->
    <div class="header">
      <van-row>
        <van-col span="1">
          <van-icon name="arrow-left" size="1.3rem" @click="handleInfoBack()" />
        </van-col>
        <van-col span="20" class="con_title" :offset="1">{{stuffDetailMessage.name}}</van-col>
        <van-col span="1">
          <van-icon name="chat-o" size="1.2rem" color="#000000" @click="show=true" />
        </van-col>
        <!--<van-col span="2">
          <van-icon name="star-o" size="1.2rem" color="#448c47" />
        </van-col>
        <van-col span="2">
          <van-icon name="like-o" size="1.2rem" color="#ce3f12" />
        </van-col>-->
      </van-row>
    </div>
    <!-- 留言 -->
    <!--<van-dialog v-model="show" title="标题" show-cancel-button>
      <van-field v-model="mesvalue" placeholder="请输入用户名" />
    </van-dialog>-->
    <van-overlay :show="show" @click="show = false">
      <div class="msg_con" @click.stop>
        <van-field v-model="msgvalue" placeholder="请输入留言内容" >
          <template #button>
            <van-button class="msg_btn" size="small" type="default" @click="addMsg()">确认</van-button>
          </template>
        </van-field>
      </div>
    </van-overlay>


    <!-- 产品的标题 -->
    <div class="title" v-show="!isShowDetail">
      <div class="name">{{stuffDetailMessage.name || 'StuffName'}}</div>
    </div>
    <!-- 产品的描述 -->
    <div class="description" v-show="!isShowDetail">￥ {{stuffDetailMessage.price}}</div>
    <!-- 展开按钮 -->
    <div class="show-button">
      <div
        class="body"
        @click="this.handleClickShowButton"
        :class="{body : true,arrowUp : !isShowDetail,arrowDown : isShowDetail}"
      >
        <van-icon name="arrow-up" color="rgba(200,200,200,1)" size="30px" />
        <van-icon name="arrow-up" color="rgba(200,200,200,1)" size="15px" />
      </div>
    </div>

    <!-- 展开内容 -->
    <div :class="{detail : true,showDetail : isShowDetail,hiddenDetail : !isShowDetail}">
      <!-- 产品的标题 -->
      <div class="title">
        <div class="name">{{stuffDetailMessage.name || 'StuffName'}}</div>
      </div>
      <!-- 产品的描述 -->
      <div class="description">￥ {{stuffDetailMessage.price}}</div>
      <div class="message">
        <p>{{formatStuffMessage.detail}}</p>
        <p>邮费：{{formatStuffMessage.freight}}</p>
      </div>
    </div>

    <!-- 购买按钮 -->
<!--    <div class="buy">现在购买</div>-->
    <div class="buy" v-if="stuffDetailMessage.rentOrSail !== 1" @click="handleBuyClick">购买{{stuffDetailMessage.price}}</div>
    <div class="buy" v-show="stuffDetailMessage.rentOrSail !== 0" @click="handleRentClick">租赁{{stuffDetailMessage.price}}</div>
  </div>
</template>

<script>
import StuffImage from "./component/StuffImage";
import StuffTab from "./component/StuffTab";
import Vue from "vue";
import { Col, Row, Icon } from "vant";
import { mapActions, mapGetters } from "vuex";
import { Dialog } from 'vant';
import { Overlay } from 'vant';
import { Skeleton } from 'vant';
import { Panel } from 'vant';
import axios from "axios";
import { HTTP_URL } from "@/store/const.js";
import { Toast } from "vant";

Vue.use(Panel);
Vue.use(Skeleton);
Vue.use(Overlay);
// 全局注册
Vue.use(Dialog);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
export default {
  name: "StuffMessage",
  components: {
    StuffImage,
    StuffTab
  },
  data() {
    return {
      isShowDetail: false,
      formatStuffMessage: {
        name: '',
        price: '',
        detail: '',
        freight: ''
      },
      currentImage : 0,
      show: false,
      msgvalue: ''
    };
  },
  computed: {
    ...mapGetters({
      stuffDetailMessage: "getStuffDetailMessage",
      user: "getUser"
    }),
  },
  mounted(){
    this.fetchStuffDetailMessage({stuffId: this.$route.params.stuffId});
  },
  methods: {
    ...mapActions({
      fetchStuffDetailMessage: "fetchStuffDetailMessage",
    }),
    handleInfoBack(){
      console.log("this.$route.params.listOrOrder", this.$route.params.listOrOrder);
      if (this.$route.params.listOrOrder === 0){
        this.$router.push({
          name: "StuffList",
        });
      }else {
        this.$router.push({
          name: "PersonalOutList",
          params: {
            name: "我发布的",
            //publishOrSail 发布或者卖出： 0发布，1卖出
            publishOrSail: "0",
            typeMethod: '0',
          }
        });
      }
    },
    handleClickShowButton() {
      this.isShowDetail = !this.isShowDetail;
      this.formatStuffMessage.detail = this.stuffDetailMessage.detail;
      this.formatStuffMessage.name = this.stuffDetailMessage.name;
      this.formatStuffMessage.price = this.stuffDetailMessage.price;
      this.formatStuffMessage.freight = this.stuffDetailMessage.freight;
    },
    beforeHandler(){
      if (this.user.id === undefined){
        this.$router.push({
          name: "Login",
        });
        return false;
      }
      return true;
    },
    addMsg(){
      if (!this.beforeHandler()) {
        return;
      }
      let data = new FormData();
      data.append('content', this.msgvalue);
      data.append('userId', this.user.id);
      data.append('userName', this.user.username);
      data.append('proId', this.stuffDetailMessage.id);
      for (let key of data.keys()) {
        console.log(key, data.getAll(key));
      }
      axios.post(`${HTTP_URL}/message/addMes`, data)
        .then(
          res => {
            console.log(res);
            // this.handlerClearForm();
            Toast(res.data);
            this.show = false;
            this.fetchStuffDetailMessage({stuffId: this.stuffDetailMessage.id});
          },
          rej => {
            console.log(rej);
            Toast(rej.data);
          }
        );

    },
    handleBuyClick() {
      if (this.beforeHandler()){
        this.$router.push({
          name: "BuyStuff",
          params: {
          }
        })
      }

    },
    handleRentClick(){
      if ( this.beforeHandler()){
        this.$router.push({
          name: "RentStuff",
          params: {
          }
        })
      }

    }
  }
};
</script>

<style scoped>
  .command{
    margin-bottom: 8vh;
  }
  .msg > .ti{
    padding: 0px 17px;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
  }
  .msg > .con {
    padding: 3px 17px;
    color: #7c7a77;
    font-size: 12px;
    line-height: 18px;
  }
  .msg > .msg_btn{

  }
  .msg > .van-field__control {
    width: 80%;
  }
.stuffMessage {
  height: 100vh;
  overflow: auto;
}
.msg_con{
  width: 100%;
}
.stuffMessage > .background {
  z-index: -1;
  /*height: 100%;*/
  width: 100%;
  filter: saturate(20%);
  background-repeat: no-repeat;
  background-clip: inherit;
  background-attachment: fixed;
}

.stuffMessage > .background > img{
  width: 100%;
  height: auto;
}

.stuffMessage > .header {
  padding: 16px 0;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 0;
  width: 100vw;
  line-height: 100%;
}

.stuffMessage > .title {
  padding: 16px;
  position: absolute;
  bottom: 20vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(200, 200, 200, 1);
  font-size: 20px;
  font-weight: 600;
  transition: all 1s ease-in-out;
  right: 1vw;
}

.stuffMessage > .description {
  padding: 16px;
  position: absolute;
  bottom: 17vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(200, 200, 200, 1);
  font-size: 14px;
  font-weight: 600;
  transition: all 1s ease-in-out;
  right: 1vw;
}

.stuffMessage > .buy {
  background-color: rgb(194, 105, 83);
  height: 8vh;
  width: 100vw;
  position: absolute;
  bottom: 0px;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
  font-size: 18px;
  font-weight: 500;
}

.show-button {
  height: 9vh;
  width: 100vw;
  position: absolute;
  bottom: 8vh;
  display: flex;
  justify-content: center;
}

.show-button > .body {
  position: relative;
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  animation: showBotton 2s linear 1s infinite normal;
  -webkit-animation: showBotton 2s linear 1s infinite normal;
  transition: 1s all ease-in-out;
}
@keyframes showBotton {
  from {
    opacity: 1;
    top: 50px;
  }
  to {
    top: 0px;
    opacity: 0;
  }
}
@-webkit-keyframes showBotton /* Safari and Chrome */ {
  from {
    opacity: 1;
    top: 50px;
  }
  to {
    top: 0px;
    opacity: 0;
  }
}
.detail {
  transition: all 1s ease-in-out;
  position: absolute;
  bottom: 20vh;
}

.showDetail {
  background-color: rgba(0, 0, 0, 0.3);
  /*height: 50vh;*/
  width: 100vw;
  overflow: hidden;
}
.hiddenDetail {
  height: 0px;
  width: 100vw;
  overflow: hidden;
}

.showDetail > .title {
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 600;
}
.showDetail > .description {
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 600;
}
.showDetail > .message {
  padding: 0px 16px;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 600;
  overflow: auto;
  max-height: 35vh;
}
.message > pre {
  overflow: auto;
  white-space: pre-wrap;
}

.hiddenDetail > .title {
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 600;
}
.hiddenDetail > .description {
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 600;
}
.hiddenDetail > .message {
  padding: 0px 16px;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 600;
  overflow: auto;
  max-height: 35vh;
}

.arrowDown {
  transform: rotate(180deg);
  transform-origin: 50%, 50%;
}
</style>
