const mutation = {
    setTodoList(state, todoList) {
        state.todoList = todoList;
        console.log('mutation is used.');
    }
};
export default mutation;