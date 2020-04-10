export const todoList = state => state.todoList;

export const getUser = state => {
    return state.user;
}

export const getStuffList = state => {
    return state.stuffList;
}
/////////////////////////////////////////////
export const getFirstPageStuffList = state => {
    console.log(state.firstPageStuffList);
    return state.firstPageStuffList;
}
