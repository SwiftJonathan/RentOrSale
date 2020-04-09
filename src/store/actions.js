import { SET_TODO_LIST } from "./mutation-types"

export const fetchList = (context) => {
    console.log('action fetchList');


    return new Promise((res, rej) => {
        setTimeout(() => {
            context.commit('setTodoList', [1, 2, 3]);
            res();
        }, 5000);
    })
}

export const fetchStuffList = (context) => {
    new Promise((rel, rej) => {
        rel();
    }).then((res) => {
        res = {
            code: 0,
            status: 'SUCCESS',
            data: [
                {
                    name: 'Stuff one',
                    key: 0
                },
                {
                    name: 'Stuff two',
                    key: 1
                },
                {
                    name: 'Stuff three',
                    key: 2
                }
            ]
        }
        context.commit('setStuffList', res);
    })
}