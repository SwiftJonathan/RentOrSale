<template>
  <div class="publish">
    <div class="publish-back">
      <van-icon name="down" size="20px"/>
    </div>
    <div class="publish-type">
      <div class="sale">I want sale !</div>
      <div class="rent">I want rent !</div>
    </div>

    <div class="title">
      <van-field v-model="title" label="发布标题" />
    </div>

    <div class="description">
      <van-field
        v-model="description"
        rows="3"
        autosize
        label="商品描述"
        type="textarea"
        maxlength="100"
        placeholder="请输入商品描述"
        show-word-limit
      />
    </div>
    <div class="price">
      <van-field v-model="price" type="number" label="价格" />
    </div>
    <div class="freight">
      <van-field v-model="freight" type="digit" label="运费" />
    </div>

    <div class="uploader">
      <van-uploader v-model="fileList" multiple />
    </div>

    <div class="submit">
      <van-button type="primary" block class="button">发布</van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, Uploader, CheckboxGroup, Checkbox } from "vant";
import { Form } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
export default {
  name: "Publish",
  data() {
    return {
      title: "",
      price: "",
      freight: "",
      description: "",
      checkboxGroup: [],
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://cloud-image", isImage: true }
      ]
    };
  }
};
</script>

<style scope>
.publish {
  padding: 28px 0px;
}
.publish-back {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 28px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
}

.publish-type {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 14px;
}
.publish-type .rent {
  height: 30px;
  width: 30vw;
  /* vertical-align: middle; */
  line-height: 30px;
  background-color: red;
  border-radius: 0px 4px 4px 0px;
}
.publish-type .sale {
  height: 30px;
  width: 30vw;
  /* vertical-align: middle; */
  line-height: 30px;
  background-color: orange;
  border-radius: 4px 0px 0px 4px;
}

.submit {
  position: absolute;
  bottom: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
.submit > .button {
  /* margin: 0px 28px; */
  width: 80vw;
}
</style>