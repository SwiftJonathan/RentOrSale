const mutation = {
    setTodoList(state, todoList) {
        state.todoList = todoList;
        console.log('mutation is used.');
    },
    setStuffList(state, res) {
        state.stuffList = res.data;
    }
};
export default mutation;