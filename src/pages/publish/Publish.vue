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

        <!--    位置-->
        <div class="cate form-item">
          <van-dropdown-menu  direction="up">
            <van-dropdown-item v-model="cateId"  :options="transCate2Option()" />
          </van-dropdown-menu>
        </div>
        <!--    位置展开-->
        <div class="area" v-if="location_show" @click.stop>
          <van-row>
            <van-col span="1" offset="22">
              <van-icon name="cross" @click="location_show=false" color="#444444" />
            </van-col>
          </van-row>
          <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
          />
          <div class="area-btn" @click="confirmLoc()">确定</div>
        </div>

        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item title="交易地址" name="1">
            <div>
              <van-field v-model="owner_name" label="姓名" placeholder="请输入姓名" name="owner_name" />
              <van-field v-model="owner_phone" label="电话" placeholder="请输入手机号" name="owner_phone" />
              <van-field v-model="owner_address" label="地址" placeholder="请输入地址" name="owner_address" />
            </div>
          </van-collapse-item>
        </van-collapse>

        <div class="location">
          <van-row>
            <van-col span="2"><van-icon name="location-o" size="14" @click="clickLoc()"/></van-col>
            <van-col span="11"><span>{{scName}}</span></van-col>
            <van-col span="11"><span>{{areaName}}</span></van-col>
          </van-row>
        </div>

        <div class="uploader form-item">
          <van-uploader v-model="fileList" multiple name="fileList" />
        </div>
<!--{{this.user}}-->
        <div class="hidden">
          <van-field type="hidden" name="providerUserId" v-model="providerUserId" />
          <van-field type="hidden" name="rentPrice" v-model="price" />
          <van-field type="hidden" name="locationScId" v-model="scId" />
          <van-field type="hidden" name="locationScName" v-model="scName" />
          <van-field type="hidden" name="locationAreaId" v-model="activeId" />
          <van-field type="hidden" name="locationAreaName" v-model="areaName" />

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
import { HTTP_URL } from "@/store/const.js";
import Vue from "vue";
import { Field, Uploader, CheckboxGroup, Checkbox, Toast } from "vant";
import { Form } from "vant";
import axios from "axios";
import { DropdownMenu, DropdownItem } from 'vant';
import { mapActions, mapGetters } from "vuex";
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
export default {
  name: "Publish",
  data() {
    return {
      activeNames: '1',
      name: "",
      price: "",
      //运费
      freight: "",
      detail: "",
      checkboxGroup: [],
      providerUserId: "7",
      owner_name: '',
      owner_phone: '',
      owner_address: '',
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
      },
      cateId: 0,
      cates: [
        { text: '商品类别', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      items: [],
      activeIndex: 0,
      scId: '',
      scName: '',
      activeId: 1,
      areaName: '',
      location_show: false,
    };
  },
  methods: {
    clickLoc(){
      this.location_show=true;
      this.fetchArea();
      this.items = this.area;
      console.log("items", this.items);
    },
    confirmLoc(){
      console.log("activeIndex", this.activeIndex);
      console.log("activeIndex id", this.items[this.activeIndex].id);
      console.log("activeIndex text", this.items[this.activeIndex].text);
      this.scId = this.items[this.activeIndex].id;
      this.scName = this.items[this.activeIndex].text;
      console.log("activeId", this.activeId);
      let activeArea = this.items[this.activeIndex].children.filter(area => area.id === this.activeId);
      console.log("activeArea", activeArea);
      console.log("activeArea text", activeArea[0].text);
      this.areaName = activeArea[0].text;
      this.location_show=false;
    },
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
    },
    transCate2Option(){
      console.log("transCate2Option categoryList", this.categoryList);
      let cate = [];
      this.categoryList.forEach(val => {
        cate.push({
          text: val.name,
          value: val.id
        });
      });
      console.log("transCate2Option cate", cate);
      return cate;
    },
    ...mapActions({
      fetchCategoryList: "fetchCategoryList",
      fetchArea: "fetchArea"
    }),
  },
  computed: {
    ...mapGetters({
      categoryList: "getCategoryList",
      area: "getArea",
      user: "getUser"
    })
  },
  mounted() {
    this.fetchCategoryList();
    this.activeId = this.user.locationAreaId;
    this.scId = this.user.locationScId;
    this.scName = this.user.locationScName;
    this.areaName = this.user.locationAreaName;
    this.owner_name = this.user.ownerName;
    this.owner_phone = this.user.ownerPhone;
    this.owner_address = this.user.ownerAddress;
  }
};
</script>

<style scoped>
  .area{
    width: 86%;
    position: absolute;
    z-index: 9999;
    -webkit-box-shadow: #b2b0b0 0px 0px 11px;
    box-shadow: #b2b0b0 0px 0px 11px;
    border-radius: 7px;
    padding: 2%;
    color: #f0f0f0;
    background-color: #f0f0f0;
    top: 20vh;
    left: 5%;
  }
  .area-btn{
    color: #fafafa;
    background-color: #6a6d6e;
    height: 38px;
    line-height: 38px;
    text-align: center;
  }
.publish {
  /*height: 100vh;*/
  overflow: hidden;
  background-color: rgba(240, 240, 240, 1);
  padding-bottom: 10vh;
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
  display: none;
}
.button{
  background-color: #dc8f72;
  height: 60px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(245, 244, 244);
  font-weight: 600;
  font-size: 20px;
}
.button button{
  width: 100%;
  height: 100%;
  background: border-box;
  border: none;
}
  .location{
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: white;
    margin: 5px 0;
    font-size: small;
  }
  .van-tree-select__content{
    color: #9e9e9e;
  }
  .van-tree-select__item--active {
    color: #e76a42;
  }
</style>
