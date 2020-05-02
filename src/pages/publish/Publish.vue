<template>
  <div class="publish">
    <div class="publish-back">
      <van-icon name="down" size="20px" class="icon" />
    </div>

    <div class="publish-type">
      <div class="title">
        <div class="show">
          <span>I Wana {{SaleOrRent === "0" ? "Sale" : "Rent"}} !</span>
        </div>
        <div class="unshow" @click="handlerRBClick">
          <span>I Wana {{SaleOrRent === "1" ? "Sale" : "Rent"}} !</span>
        </div>
      </div>
      <div class="description">Here some desctiption to sale.</div>
    </div>

    <div class="form">
      <van-form id="formCon" @submit="onSubmit" enctype="multipart/form-data">
        <div class="title form-item">
          <van-field
            v-model="name"
            label="发布标题"
            placeholder="请输入发布标题"
            maxlength="20"
            name="name"
            required
            :rules="[{ required: true, message: '请填写标题' }]"
          />
        </div>

        <div class="description form-item">
          <van-field
            v-model="detail"
            rows="3"
            :autosize="areaHeight"
            label="商品描述"
            type="textarea"
            maxlength="255"
            placeholder="请输入商品描述"
            show-word-limit
            name="detail"
            required
            :rules="[{ required: true, message: '请填写描述' }]"
          />
        </div>
        <div class="price form-item">
          <van-field
            v-model="price"
            type="number"
            label="价格"
            placeholder="请输入发布价格"
            name="price"
            required
            :rules="[{ required: true, message: '请填写价格' }]"
          />
        </div>
        <div class="freight form-item">
          <van-field
            v-model="freight"
            type="digit"
            label="运费"
            placeholder="请输入发布运费"
            name="freight"
          />
        </div>
        <div class="deposit form-item" v-show="SaleOrRent ==='1'">
          <van-field v-model="deposit" type="digit" label="押金" placeholder="请输入押金" name="deposit" />
        </div>

        <div class="uploader form-item">
          <van-uploader v-model="fileList" multiple name="fileList" />
        </div>

        <div class="hidden">
          <van-field type="hidden" name="providerUserId" v-model="providerUserId" />
          <van-field type="hidden" name="rentPrice" v-model="price" />
        </div>

        <div class="submit form-item">
          <div class="button">
            <button type="submit">Publish</button>
          </div>
        </div>
      </van-form>
    </div>
  </div>
</template>


<script>
// import axios from 'axios';
import { HTTP_URL } from "@/store/const.js";
import Vue from "vue";
import { Field, Uploader, CheckboxGroup, Checkbox, Toast } from "vant";
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
      //运费
      freight: "",
      detail: "",
      checkboxGroup: [],
      providerUserId: "7",
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // { url: "https://cloud-image", isImage: true }
      ],
      //转卖或租赁：0转卖， 1租赁
      SaleOrRent: "0",
      //押金
      deposit: "",
      rentPrice: "",
      areaHeight: {
        maxHeight: 150,
        minHeight: 50
      }
    };
  },
  methods: {
    onSubmit(values) {
      console.log("values", values);
      let data = new FormData();
      this.fileList.map(element => {
        console.log("file", element.file);
        data.append("fileList", element.file, element.file.name);
      });
      for (let key of data.getAll("fileList")) {
        console.log("data.fileLIst in for", key);
      }
      for (let key in values) {
        data.append(key, values[key]);
      }
      for (let key of data.keys()) {
        console.log(key, data.getAll(key));
      }
      let req_url = `${HTTP_URL}/pro/addSell`;
      if (this.SaleOrRent === "1") {
        data.append("rentPrice", this.price);
        req_url = `${HTTP_URL}/pro/addRent`;
      }
      axios
        .post(req_url, data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(
          res => {
            console.log("sucess");
            console.log(res);
            this.handlerClearForm();
            Toast("发布成功");
          },
          rej => {
            console.log("faild");
            console.log(rej);
          }
        );
    },
    handlerRBClick(val) {
      this.SaleOrRent = this.SaleOrRent === "0" ? "1" : "0";
    },
    handlerClearForm() {
      this.name = "";
      this.price = "";
      this.freight = "";
      this.detail = "";
      this.checkboxGroup = [];
      this.fileList = [];
      this.deposit = "";
      this.rentPrice = "";
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
  display: flex;
  justify-content: flex-start;
}
.publish > .publish-type > .title > .show {
  font-size: 24px;
  font-weight: 800;
  color: rgba(22, 23, 55, 1);
  display: flex;
  align-items: flex-end;
}
.publish > .publish-type > .title > .unshow {
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: orangered;
  display: flex;
  align-items: flex-end;
}
.publish > .publish-type > .description {
  color: rgba(0, 0, 0, 0.5);
}

.form {
  padding: 12px 28px;
}

.form-item {
  margin-bottom: 8px;
}

.hidden{
  visibility: hidden;
}
.button{
  background-color: orangered;
  height: 60px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(240, 240, 240, 1);
  font-weight: 600;
  font-size: 20px;
}
</style>
