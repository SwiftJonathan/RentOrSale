<template>
    <div class="provider_addrss">
      <div>姓名：{{name}}</div>
      <div>手机号：{{phone}}</div>
      <div>地址：{{address}}</div>
    </div>
</template>

<script>
    export default {
        name: "ProviderAddress",
      data() {
          return {
            name: 'Tony',
            phone: '10086',
            address: 'address'
          }
      }
    }
</script>

<style scoped>
.provider_addrss{
  background-color: #fafafa;
  color: #87898a;
  padding: 1rem 9px;
  margin: 4px 0;
  line-height: 1.5;
}
</style>
