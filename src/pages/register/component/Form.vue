<template>
  <div>
    <van-form @submit="onSubmit" class="reg_form">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="手机号码"
        type="number"
        clearable="true"
        maxlength="11"
        validate-trigger="onChange"
        :rules="[{ required: true, message: '请填写手机号'},
      {trigger:'onChange'}]"
        class="field_input"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        class="field_input"
      />
      <van-field
        v-model="email"
        type="email"
        name="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
        class="field_input"
      />
      <van-field name="radio" class="field_radio">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal" align="center">
            <van-radio name="1" icon-size="20px">男</van-radio>
            <van-radio name="2" icon-size="20px">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" class="btn">
          提交
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
  import Vue from 'vue';
  import { Form } from 'vant';
  import { Field } from 'vant';
  import { RadioGroup, Radio } from 'vant';

  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(Field);
  Vue.use(Form);
    export default {
      name: "Form2",
      i18n: {
        'zh-CN': {
          label: '文本',
          title: '校验规则',
          submit: '提交',
          message: '请输入正确内容',
          pattern: '正则校验',
          validator: '函数校验',
          validating: '验证中...',
          asyncValidator: '异步函数校验',
        },
        'en-US': {
          label: 'Label',
          title: 'Validate Rules',
          submit: 'Submit',
          message: 'Error message',
          pattern: 'Use pattern',
          validator: 'Use validator',
          validating: 'Validating...',
          asyncValidator: 'Use async validator',
        },
      },
      data() {
        return {
          username: '',
          password: '',
          sex: '1',
          email: ''
        };
      },
      methods: {
        onSubmit(values) {
          console.log('submit', values);
        },
      },
    };
</script>

<style scoped>
  .reg_form{
    padding: 2px 10%;
  }
  .field_input{
    width: 86%;
    margin: 27px 7%;
    border-radius: 7px 0px;
    border: none;
    text-align: center;
    height: 2.3rem;
  }
  .field_radio{
    background-color: rgba(255,255,255,0);
    text-align: center;
  }
  .van-field__body{
    height: 100%;
  }
  .van-field__control{
    text-align: center;
  }
  .van-cell {
    overflow: visible;
  }
  .van-field--error .van-field__control, .van-field--error .van-field__control::placeholder {
    color: #e25a2f;
  }
  .van-field__error-message {
    color: #e25a2f;
    font-size: 12px;
    text-align: center;
    margin-top: 5%;
  }
  .btn{
    width: 100%;
    margin: 22px 0;
    height: 2.5rem;
    border: none;
    background-color: #5a5a5a;
    border-radius: 5px;
    color: #e8e8e8;
  }
</style>
