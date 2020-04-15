<template>
  <div class="publish">
    <div class="publish-back">
      <van-icon name="down" size="20px" class="icon" />
    </div>

    <div class="publish-type">
      <div class="title">I Wana Sale !</div>
      <div class="description">Here some desctiption to sale.</div>
    </div>

    <div class="publish-type-sub">
      <div class="title">I Want Sale !</div>
      <div class="description">Here some desctiption to sale.</div>
    </div>

    <van-form id="formCon" @submit="onSubmit"  enctype="multipart/form-data">
      <div class="title">
        <van-field v-model="name" label="发布标题" placeholder="请输入发布标题" name="name" />
      </div>

      <div class="description">
        <van-field
          v-model="detail"
          rows="3"
          autosize
          label="商品描述"
          type="textarea"
          maxlength="100"
          placeholder="请输入商品描述"
          show-word-limit
          name="detail"
        />
      </div>
      <div class="price">
        <van-field v-model="price" type="number" label="价格" placeholder="请输入发布价格" name="price" />
      </div>
      <div class="freight">
        <van-field v-model="freight" type="digit" label="运费" placeholder="请输入发布运费" name="freight" />
      </div>

      <div class="uploader">
        <van-uploader v-model="fileList" multiple name="fileList" />
      </div>

      <div class="submit">
        <div class="button">
          <button type="submit">Publish</button>
        </div>
      </div>
    </van-form>
  </div>
</template>


<script>
import axios from 'axios';
import {HTTP_URL} from '@/store/const.js'
import Vue from "vue";
import { Field, Uploader, CheckboxGroup, Checkbox } from "vant";
import { Form } from "vant";
import axios from "axios";

Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
export default {
  name: "Publish",
  data() {
    return {
      name: "",
      price: "",
      freight: "",
      detail: "",
      checkboxGroup: [],
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    onSubmit(values) {
      let data = new FormData();
      this.fileList.map(element => {
        console.log("file", element.file);
        data.append("fileList", element.file, element.file.name);
      });
      for (let key of data.getAll("fileList")){
        console.log("data.fileLIst in for", key);
      }
      for (let key in values) {
        data.append(key, values[key]);
      }
      for (let key of data.keys()) {
        console.log(key, data.getAll(key));
      }
      axios.post(`${HTTP_URL}/util/uploadImg`, data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
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
};
</script>

<style scope>
.publish {
  height: 100vh;
  overflow: hidden;
  background-color: rgba(240, 240, 240, 1);
}
.publish > .publish-back {
  width: 30px;
  height: 30px;
  padding: 28px 0px 0px 28px;
}
.publish > .publish-back > .icon {
  transform: rotate(90deg);
}

.publish > .publish-type {
  padding: 0px 28px;
}
.publish > .publish-type > .title {
  font-size: 24px;
  font-weight: 800;
  color: rgba(22, 23, 55, 1);
}
.publish > .publish-type > .description {
  color: rgba(0, 0, 0, 0.5);
}

.publish > .publish-type-sub {
  padding: 0px 28px;
}
.publish > .publish-type-sub > .title {
  font-size: 16px;
  font-weight: 600;
  color: rgba(233, 147, 136, 1);
}
.publish > .publish-type-sub > .description {
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 14px;
}

.publish > .title {
  padding: 0px 12px;
  margin-bottom: 4px;
}

.publish > .description {
  padding: 0px 12px;
  margin-bottom: 4px;
}

.publish > .price {
  padding: 0px 12px;
  margin-bottom: 4px;
}

.publish > .freight {
  padding: 0px 12px;
  margin-bottom: 8px;
}

.publish > .uploader {
  padding: 0px 12px;
  margin-bottom: 4px;
}

.submit_btn {
  position: absolute;
  bottom: 15vh;
  width: 94vw;
  left: 3vw;
  height: 60px;
  background-color: rgba(22, 23, 55, 1);
  display: flex;
  justify-content: center;
}
.submit_btn > .button {
  /* margin: 0px 28px; */
  width: 80vw;
}
</style>
