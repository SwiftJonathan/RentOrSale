<template>
  <div>
    <TopReturnBar msg="AddressEdit" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>

</template>

<script>
  import TopReturnBar from '../components/TopReturnBar'
  import Vue from 'vue';
  import { AddressEdit } from 'vant';
  import { Toast } from 'vant';
  import AreaList from './area';

  Vue.use(Toast);
  Vue.use(AddressEdit);
    export default {
      name: "MyAddressEdit",
      components: {TopReturnBar},
      data() {
        return {
          areaList: AreaList,
          searchResult: []
        }
      },
      methods: {
        onSave() {
          Toast('save');
        },
        onDelete() {
          Toast('delete');
        },
        onChangeDetail(val) {
          if (val) {
            this.searchResult = [{
              name: '黄龙万科中心',
              address: '杭州市西湖区'
            }];
          } else {
            this.searchResult = [];
          }
        }
      }
    }
</script>

<style scoped>

</style>
