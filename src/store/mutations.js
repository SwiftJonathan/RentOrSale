import { Stats } from "fs";

const mutation = {
  setUser(state, user) {
    state.user = user;
  },
  setArea(state, area) {
    state.area = area;
  },
    setTodoList(state, todoList) {
        state.todoList = todoList;
    },
    setStuffList(state, res) {
        state.stuffList = res.data;
    },
    setFirstPageStuffList(state, firstPageStuffList) {
        state.firstPageStuffList = firstPageStuffList;
    },
  setPageStuffData(state, pageStuffData) {
    console.log("setPageStuffData", pageStuffData);
    state.pageStuffData = pageStuffData;
  },
  setCategoryList(state, categoryList){
    console.log("setCategoryList", categoryList);
    state.categoryList = categoryList;
  },
  setSaleStuffList(state, saleStuffList){
      state.saleStuffList = saleStuffList;
  },
  setRentStuffList(state, rentStuffList){
      state.rentStuffList = rentStuffList;
  },
  setStuffDetailMessage(state, stuffDetailMessage){
      console.log("setStuffDetailMessage", stuffDetailMessage);
    state.stuffDetailMessage = stuffDetailMessage;
  },
  setOrderDetailMessage(state, orderDetailMessage){
    console.log("setStuffDetailMessage", orderDetailMessage);
    state.orderDetailMessage = orderDetailMessage;
  }
};
export default mutation;
