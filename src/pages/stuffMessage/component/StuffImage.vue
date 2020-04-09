<template>
  <div class="stuff_image_con">
    <img v-for="(img,index) in imageList" :key="index" v-lazy="img" >
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Lazyload } from 'vant';

  Vue.use(Lazyload);

  // 注册时可以配置额外的选项
  Vue.use(Lazyload, {
    lazyComponent: true
  });
  export default {
    name: "StuffImage",
    data() {
      return {
        imageList: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      };
    }
  }
</script>

<style scoped>
  .stuff_image_con{
    width: 90%;
    padding: 4% 5%;
    background-color: white;
    border-radius: 40px 40px 0 0;
  }
  .stuff_con img{
    box-sizing: border-box;
    width: 90%;
    height: 250px;
    /*margin-bottom: 20px;*/
    margin: 5%;;
    padding: 20px;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
    box-shadow: 0 0px 37px #dadada;
    -webkit-box-shadow: 0 0px 37px #e6e6e6;
  }
</style>

