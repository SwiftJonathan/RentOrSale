import { Stats } from "fs";

const mutation = {
    setTodoList(state, todoList) {
        state.todoList = todoList;
    },
    setStuffList(state, res) {
        state.stuffList = res.data;
    },
    setFirstPageStuffList(state, firstPageStuffList) {
        state.firstPageStuffList = firstPageStuffList;
    },
  setCategoryList(state, categoryList){
      state.categoryList = categoryList;
  },
  setSaleStuffList(state, saleStuffList){
      state.saleStuffList = saleStuffList;
  },
  setRentStuffList(state, rentStuffList){
      state.rentStuffList = rentStuffList;
  }
};
export default mutation;
