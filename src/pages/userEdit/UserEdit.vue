<template>
  <div class="user-edit">
    <div class="form">
      <van-form id="formCon" @submit="onSubmit" enctype="multipart/form-data">
        <div class="title form-item">
          <van-field
            v-model="theuser.username"
            label="用户名称"
            placeholder="请输入用户名称"
            maxlength="20"
            name="name"
            required
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
        </div>
        <div class="title form-item">
          <van-field name="radio" label="性别">
            <template #input>
              <van-radio-group v-model="theuser.sex.toString()" direction="horizontal">
                <van-radio name="0">男</van-radio>
                <van-radio name="1">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
      </div>
        <div class="price form-item">
          <van-field
            v-model="this.user.email"
            type="mail"
            label="邮箱"
            placeholder="请输入电子邮箱"
            name="email"
          />
        </div>
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item title="默认交易地址" name="1">
            <div>
              <van-field v-model="theuser.ownerName" label="姓名" placeholder="请输入姓名" name="owner_name" />
              <van-field v-model="theuser.ownerPhone" label="电话" placeholder="请输入手机号" name="owner_phone" />
              <van-field v-model="theuser.ownerAddress" label="地址" placeholder="请输入地址" name="owner_address" />
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

        <!--    位置-->
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

        <div class="hidden">
<!--          <van-field type="hidden" name="providerUserId" v-model="providerUserId" />-->
<!--          <van-field type="hidden" name="rentPrice" v-model="price" />-->
        </div>

        <div class="submit form-item">
          <div class="button">
            <button type="submit">修改</button>
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
  import { RadioGroup, Radio } from 'vant';
  import { Panel } from 'vant';
  import { TreeSelect } from 'vant';

  Vue.use(TreeSelect);
  Vue.use(Panel);
  Vue.use(Radio);
  Vue.use(RadioGroup);
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
    name: "UserEdit",
    data() {
      return {
        activeNames: '1',
        location_show: false,
        theuser: {
          id: '',
          username: '',
          sex: '',
          email: '',
          owner_name: '',
          owner_phone: '',
          owner_address: ''
        },
        items: [],
        activeId: 1,
        activeIndex: 0,
        scId: '',
        scName: '',
        areaName: ''
      };
    },
    methods: {
      ...mapActions({
        fetchArea: "fetchArea"
      }),
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
        let data = {};
        for (let key in this.theuser) {
          console.log("key", key)
          if (this.theuser[key] !== null){
            console.log("value", this.theuser[key])
          }
        }
        console.log("data", data);
        for (let key in this.theuser) {
          if (this.theuser[key] !== null){
            // data.append(key, this.theuser[key]);
            data[key] = this.theuser[key];
            console.log("data key value", this.theuser[key])
          }
        }
        data["locationScId"] = this.scId;
        data["locationScName"] = this.scName;
        data["locationAreaId"] = this.activeId;
        data["locationAreaName"] = this.areaName;
       /* for (let key of data.keys()) {
          console.log(key, data.getAll(key));
        }*/
        console.log("data", data);
        let req_url = `${HTTP_URL}/user/updateUser`;
        axios.post(req_url, data, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
          .then(
            res => {
              console.log(res);
              // this.handlerClearForm();
              Toast("修改成功");
              this.fetchUser({user: res.data});
            },
            rej => {
              console.log(rej);
            }
          );
      },
      handlerClearForm() {
        this.name = "";
        this.price = "";
        this.freight = "";
        this.detail = "";
        this.fileList = [];
        this.deposit = "";
        this.rentPrice = "";
      },
      /*transCate2Option(){
        console.log("transCate2Option categoryList", this.categoryList);
        let cate = [];
        this.categoryList.forEach(val => {
          cate.push({
            text: val.name,
            value: val.id
          });
        });
        return cate;
      },*/
      ...mapActions({
        fetchCategoryList: "fetchCategoryList",
        fetchUser: "fetchUser"
      }),
    },
    computed: {
      ...mapGetters({
        categoryList: "getCategoryList",
        user: "getUser",
        area: "getArea",
      })
    },
    mounted() {
      this.fetchCategoryList();
      this.theuser = this.user;
      this.activeId = this.user.locationAreaId;
      this.scId = this.user.locationScId;
      this.scName = this.user.locationScName;
      this.areaName = this.user.locationAreaName;
      console.log("this.activeId", this.activeId)
      console.log("this.scId", this.scId)
      console.log("this.scName", this.scName)
      console.log("this.areaName", this.areaName)

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
  .user-edit {
    /*height: 100vh;*/
    overflow: hidden;
    background-color: rgba(240, 240, 240, 1);
    height: 100%;
  }
  .location{
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: white;
    margin: 5px 0;
    font-size: small;
  }
  .user-edit > .publish-back {
    width: 30px;
    height: 30px;
    padding: 28px 0px 0px 28px;
  }
  .user-edit > .publish-back > .icon {
    transform: rotate(90deg);
  }

  .user-edit > .publish-type {
    padding: 0px 28px;
  }
  .user-edit > .publish-type > .title {
    display: flex;
    justify-content: flex-start;
  }
  .user-edit > .publish-type > .title > .show {
    font-size: 24px;
    font-weight: 800;
    color: rgba(22, 23, 55, 1);
    display: flex;
    align-items: flex-end;
  }
  .user-edit > .publish-type > .title > .unshow {
    margin-left: 20px;
    font-size: 16px;
    font-weight: 500;
    color: orangered;
    display: flex;
    align-items: flex-end;
  }
  .user-edit > .publish-type > .description {
    color: rgba(0, 0, 0, 0.5);
  }

  .form {
    padding: 12px 28px;
    margin: 30% 0;
  }

  .form-item {
    margin-bottom: 8px;
  }

  .hidden{
    visibility: hidden;
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
  .van-tree-select__content{
    color: #9e9e9e;
  }
  .van-tree-select__item--active {
    color: #e76a42;
  }
</style>
