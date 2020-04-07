import { SET_TODO_LIST } from "./mutation-types"

export const fetchList = (context) => {
    console.log('action fetchList');

    
    return new Promise((res, rej) => {
        setTimeout(() => {
            context.commit('setTodoList',[1,2,3]);
            res();
        }, 5000);
    })
}