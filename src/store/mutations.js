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
    }
};
export default mutation;