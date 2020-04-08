<template>
  <div class="login_form">
    <form @submit.prevent="onSubmit">
      <input v-model="phone" type="number" width="80%" placeholder="手机号" maxlength="11"required >
      <input v-model="password" type="password" width="80%" placeholder="密码" required>
      <button class="btn" >登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      phone: '',
      password: ''
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      console.log('phone', this.phone);
      console.log('password', this.password);
    },
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
