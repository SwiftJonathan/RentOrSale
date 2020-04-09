<template>
  <div class="login_bg">
    <div class="login_con">
      <div class="to_reg">TO REGISTER</div>
<!--      <div class="login_title">Thisis Component Login</div>-->
      <div class="login_title">大吉大利</div>
      <Form />
<!--      <Form2/>-->
    </div>
  </div>
</template>

<script>
import Form from "./components/form/Form";
// import Form2 from "./components/form/Form2";

export default {
  name: "Login",
  components: {
    Form,
    // Form2
  }
};
</script>

<style scoped>
  .login_bg{
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/image/login2.jpg");
    background-size: cover;
    display: flex;

  }
  .login_con {
    width: 80%;
    margin-left: 10%;
    height: 50vh;
    margin-top: 25vh;
    background-color: rgba(255,255,255,0.60);
  }
  .login_title{
    width: 100%;
    text-align: center;
    margin: 4rem 0px 2rem 0;
    color: #4c4c4c;
  }
  .to_reg{
    width: 95%;
    margin: 15px 0;
    text-align: end;
    color: #5f5e5d;
  }
</style>
