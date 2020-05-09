<template>
  <div class="stuffMessage">
    <!-- 用于显示产品的背景图片 -->
    <div class="background" :style="`background-image: url(${stuffDetailMessage.img});`"></div>
    <!-- 标题栏和喜欢收藏按钮 -->
    <div class="header">
      <van-row>
        <van-col span="20" class="con_title">{{stuffDetailMessage.name}}</van-col>
        <van-col span="2">
          <van-icon name="star-o" size="1.2rem" color="#448c47" />
        </van-col>
        <van-col span="2">
          <van-icon name="like-o" size="1.2rem" color="#ce3f12" />
        </van-col>
      </van-row>
    </div>
    <!-- 产品的标题 -->
    <div class="title" v-show="!isShowDetail">
      <div class="name">{{stuffDetailMessage.name || 'StuffName'}}</div>
    </div>
    <!-- 产品的描述 -->
    <div class="description" v-show="!isShowDetail">This is stuffMessage description.</div>
    <!-- 展开按钮 -->
    <div class="show-button">
      <div
        class="body"
        @click="this.handleClickShowButton"
        :class="{body : true,arrowUp : !isShowDetail,arrowDown : isShowDetail}"
      >
        <van-icon name="arrow-up" color="rgba(255,255,255,1)" size="30px" />
        <van-icon name="arrow-up" color="rgba(255,255,255,1)" size="15px" />
      </div>
    </div>

    <!-- 展开内容 -->
    <div :class="{detail : true,showDetail : isShowDetail,hiddenDetail : !isShowDetail}">
      <!-- 产品的标题 -->
      <div class="title">
        <div class="name">{{stuffDetailMessage.name || 'StuffName'}}</div>
      </div>
      <!-- 产品的描述 -->
      <div class="description">This is stuffMessage description.</div>
      <div class="message">
        <pre>
          {{formatStuffMessage}}
        </pre>
      </div>
    </div>

    <!-- 购买按钮 -->
    <div class="buy">现在购买</div>
  </div>
</template>

<script>
import StuffImage from "./component/StuffImage";
import StuffTab from "./component/StuffTab";
import Vue from "vue";
import { Col, Row, Icon } from "vant";
import { mapActions, mapGetters } from "vuex";

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
      formatStuffMessage: ""
    };
  },
  computed: {
    ...mapGetters({
      stuffDetailMessage: "getStuffDetailMessage"
    })
  },
  methods: {
    handleClickShowButton() {
      this.isShowDetail = !this.isShowDetail;
      this.formatStuffMessage = JSON.stringify(
        this.stuffDetailMessage,
        null,
        " "
      )
        .replace(/"/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "");
    }
  }
};
</script>

<style scoped>
.stuffMessage {
  height: 100vh;
  overflow: hidden;
}

.stuffMessage > .background {
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  filter: saturate(20%);
  background-repeat: no-repeat;
  background-clip: inherit;
  background-attachment: fixed;
}

.stuffMessage > .header {
  padding: 16px;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 600;
}

.stuffMessage > .title {
  padding: 16px;
  position: absolute;
  bottom: 30vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 600;
  transition: all 1s ease-in-out;
}

.stuffMessage > .description {
  padding: 16px;
  position: absolute;
  bottom: 20vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 600;
  transition: all 1s ease-in-out;
}

.stuffMessage > .buy {
  background-color: rgba(247, 93, 55, 1);
  height: 10vh;
  width: 100vw;
  position: absolute;
  bottom: 0px;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 600;
}

.show-button {
  height: 100px;
  width: 100vw;
  position: absolute;
  bottom: 10vh;
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
  background-color: rgba(0, 0, 0, 0.2);
  height: 50vh;
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
