<template>
  <div class="login_bg">
    <div class="login_con">
      <div class="to_login" @click="handlerClickLogin">TO LOGIN</div>
      <!--      <div class="login_title">Thisis Component Login</div>-->
      <div class="reg_title">EXPERICE</div>
      <Form />
    </div>
  </div>
</template>

<script>
  // import Form from './component/Form';

  import Form from './component/Form'
  export default {
    name: "Register",
    components: { Form },
    methods: {
      handlerClickLogin(){
        this.$router.push({
          name: "Login",
          params: {
          }
        })
      }
    }
  };
</script>

<style scoped>
  .login_bg{
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/image/logbg.jpg");
    background-size: cover;
    display: flex;

  }
  .login_con {
    width: 86%;
    margin-left: 7%;
    height: 70vh;
    margin-top: 15vh;
    background-color: rgba(255,255,255,0.60);
  }
  .reg_title{
    width: 100%;
    text-align: center;
    margin: 2.6rem 0px;
    color: #4c4c4c;
  }
  .to_login{
    width: 95%;
    margin: 15px 0;
    text-align: end;
    color: #5f5e5d;
  }
</style>
