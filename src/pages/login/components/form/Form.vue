<template>
  <div class="login_form">
    <van-form @submit="onSubmit" id="loginCon">
      <input name="phone" v-model="formData.phoneNumber" type="number" width="80%" placeholder="手机号" maxlength="11" required />
      <input name="password" v-model="formData.password" type="password" width="80%" placeholder="密码" required v-if="login_way === '0'" />
      <van-field
        v-if="login_way === '1'"
        v-model="sms"
        center
        clearable
        placeholder="短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div class="change_way" @click="login_way === '0' ? login_way = '1' : login_way = '0'">{{login_way === '0' ? "通过验证码登录" : "通过密码登录"}}</div>
      <button class="btn" >登录</button>
    </van-form>
  </div>
</template>

<script>
  import { Form } from "vant";
  import { HTTP_URL } from "@/store/const.js";
  import { Toast } from "vant";
  import axios from "axios";
  import { mapActions, mapGetters } from "vuex";
  import Vue from 'vue';
  import { Field } from 'vant';

  Vue.use(Field);
  export default {
  name: "Form",
  data() {
    return {
      login_way: '0',
      formData:{
        phoneNumber: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
      let data = new FormData();
      for (let key in this.formData) {
        // console.log("key", key);
        // console.log("this.formData[key]", this.formData[key]);
        data.append(key, this.formData[key]);
      }
      for (let key of data.keys()) {
        console.log(key, data.getAll(key));
      }
      axios.post(`${HTTP_URL}/user/login`, data)
        .then(
          res => {
            console.log("sucess return", res.data.returnMsg);
            console.log(res);
            // this.handlerClearForm();
            Toast(res.data.returnMsg);
            if (res.data.user != null){
              this.fetchUser({user: res.data.user});
              this.$router.push({
                name: "FirstPage"
              })
            }
          },
          rej => {
            console.log("faild");
            console.log(rej);
          }
        );
    },
    ...mapActions({
      fetchUser: "fetchUser"
    }),
  },
};
</script>
<style scoped>
  .login_form{
    padding: 2px 10%;
  }
  .login_form input{
    width: 92%;
    margin: 9px 4%;
    border-radius: 7px 0px;
    border: none;
    text-align: center;
    height: 2.2rem;
  }
  .btn{
    width: 86%;
    margin: 12px 6% 22px 6%;
    height: 2.5rem;
    border: none;
    background-color: #5a5a5a;
    border-radius: 5px;
    color: #e8e8e8;
  }
  .van-cell{
    width: 92%;
    margin: 9px 4%;
    border-radius: 7px 0px;
    border: none;
    text-align: center;
    height: 2.2rem;
    padding: 10px 0px 10px 16px;
  }
  .van-button--small {
    height: 2.2rem;
    line-height: 2.2rem;
  }
  .van-button--primary {
    color: aliceblue;
    background-color: #5a5a5a;
    border: 1px solid #5a5a5a;
  }
  .change_way{
    text-align: center;
    font-size: 11px;
    color: #5a5a5a;
    margin-top: 17px;
  }
</style>
