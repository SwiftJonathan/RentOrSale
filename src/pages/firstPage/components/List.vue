<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
    <div class="home_lay">
        <!--<van-grid :column-num="2">
            <van-grid-item v-for="(img,index) in imageList" :key="index">
                <img v-lazy="img" />
            </van-grid-item>
        </van-grid>-->
        <!--<van-grid :border="false" :column-num="2">
            <van-grid-item v-for="(img,index) in imageList" :key="index">
                <van-image :src="img" />

            </van-grid-item>
        </van-grid>-->

        <!--<van-row type="flex" justify="space-around">
            <van-col span="10">
                <div v-for="(img,index) in imageList" :key="index" v-lazy:background-image="img" />
            </van-col>
            <van-col span="10">span: 8</van-col>
        </van-row>-->
<!--        <img v-for="(img,index) in imageList" :key="index" v-lazy="img" >-->
        <div v-for="(img,index) in imageList" v-lazy:background-image="img" :key="index" class="divv"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';
    import { Grid, GridItem } from 'vant';
    import { Col, Row } from 'vant';

    Vue.use(Col);
    Vue.use(Row);
    Vue.use(Grid);
    Vue.use(GridItem);
    Vue.use(Lazyload);

    // 注册时可以配置额外的选项
    Vue.use(Lazyload, {
        lazyComponent: true
    });
    export default {
        name: "HomeLazyLoad",
        data() {
            return {
                imageList: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg'
                ]
            };
        }
    }

</script>

<style scoped>
    img,
    div[lazy] {
        box-sizing: border-box;
        width: 100%;
        height: 250px;
        background-color: white;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 12px;
        box-shadow: 0 8px 12px #ebedf0;
    }
    .divv{
        width: 100%;
        height: 250px;
    }
</style>
