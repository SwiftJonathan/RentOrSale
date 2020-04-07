import * as types from './mutation-types'

export const setTodoList = (state, todoList) => {
    state.todoList = todoList;
    console.log('mutation is used.');
}