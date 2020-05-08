<template>
  <div class="login_form">
    <van-form @submit="onSubmit" id="loginCon">
      <input name="phone" v-model="formData.phoneNumber" type="number" width="80%" placeholder="手机号" maxlength="11" required />
      <input name="password" v-model="formData.password" type="password" width="80%" placeholder="密码" required />
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

  export default {
  name: "Form",
  data() {
    return {
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
<style>
  .login_form{
    padding: 2px 10%;
  }
  .login_form input{
    width: 86%;
    margin: 9px 7%;
    border-radius: 7px 0px;
    border: none;
    text-align: center;
    height: 2.2rem;
  }
  .btn{
    width: 86%;
    margin: 22px 6%;
    height: 2.5rem;
    border: none;
    background-color: #5a5a5a;
    border-radius: 5px;
    color: #e8e8e8;
  }
</style>
