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

    <van-form @submit="onSubmit">
      <div class="title">
        <van-field v-model="title" label="发布标题" placeholder="请输入发布标题" name="title" />
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
          name="description"
        />
      </div>
      <div class="price">
        <van-field v-model="price" type="number" label="价格" placeholder="请输入发布价格" name="price" />
      </div>
      <div class="freight">
        <van-field v-model="freight" type="digit" label="运费" placeholder="请输入发布运费" name="freight" />
      </div>

      <div class="uploader">
        <van-uploader v-model="fileList" multiple name="fileList" :after-read="handleAfterRead" />
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
      title: "",
      price: "",
      freight: "",
      description: "",
      checkboxGroup: [],
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    handleAfterRead(file) {
      console.log(file);
      console.log(this.fileList);
    },
    onSubmit(values) {
      let data = new FormData();
      data.append(
        "fileList",
        this.fileList.map(file => {
          return file.file;
        })
      );
      for (let key in values) {
        data.append(key, values[key]);
      }
      console.log(data.get("fileList").toString());
      axios
        .post("url", data, {
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

.submit {
  padding: 0px 14px;
}

.submit > .button {
  position: absolute;
  bottom: 15vh;
  width: 94vw;
  left: 3vw;
  height: 60px;
  background-color: rgba(22, 23, 55, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(240, 240, 240, 1);
  font-size: 20px;
  font-weight: 500;
  border-radius: 2px;
}
</style>