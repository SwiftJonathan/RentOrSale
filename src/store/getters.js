export const todoList = state => state.todoList;

export const getUser = state => {
    console.log(state.user);
    return state.user;
}

export const getStuffList = state => {
    console.log(state.stuffList);
    return state.stuffList;
}
