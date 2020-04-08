<template>
  <div class="login_form">
    <form onsubmit="">
      <input width="80%" type="number" placeholder="手机号">
      <input width="80%">
      <button class="btn" >登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form"
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
