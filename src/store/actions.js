import { SET_TODO_LIST } from "./mutation-types"
import axios from 'axios';
import {HTTP_URL} from '@/store/const.js'
export const fetchList = (context) => {
    console.log('action fetchList');


    return new Promise((res, rej) => {
        setTimeout(() => {
            context.commit('setTodoList', [1, 2, 3]);
            res();
        }, 5000);
    })
};

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
};

export const fetchFirstPageStuffList = (context) => {
    console.log('fetchFirstPageStuffList');
    const mockData = [
        {
            "id": 1,
            "name": "MI8",
            "amount": 2,
            "price": 99.00,
            "deposit": null,
            "rentPrice": null,
            "freight": null,
            "detail": null,
            "cateId": 1,
            "providerUserId": 7,
            "buyerUserId": null,
            "statu": 4,
            "rentOrSail": 0,
            "releaseTime": null,
            "createTime": "2020-04-02T10:28:59.000+0000",
            "createBy": 0,
            "updateTime": "2020-04-05T14:50:26.006+0000",
            "updateBy": 0,
            "isDeleted": 0,
            "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=78c4d6302ee3b22db7d03c9854504512&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20100%2F133%2Fw2000h1333%2F20200225%2F95db-ipzreiv7562157.jpg",
            "ownerName": null,
            "ownerPhone": null,
            "ownerAddress": null
        },
        {
            "id": 2,
            "name": "Mate20",
            "amount": 3,
            "price": 8999.00,
            "deposit": null,
            "rentPrice": null,
            "freight": null,
            "detail": null,
            "cateId": 1,
            "providerUserId": 8,
            "buyerUserId": null,
            "statu": 2,
            "rentOrSail": 1,
            "releaseTime": null,
            "createTime": "2020-04-05T14:25:22.000+0000",
            "createBy": 0,
            "updateTime": "2020-04-05T14:50:26.709+0000",
            "updateBy": 0,
            "isDeleted": 0,
            "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=58bb9214f134c0808eba9d5aa83e3c6e&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201311%2F17%2F174124tp3sa6vvckc25oc8.jpg",
            "ownerName": null,
            "ownerPhone": null,
            "ownerAddress": null
        },
        {
            "id": 4,
            "name": "3",
            "amount": 3,
            "price": 3.00,
            "deposit": null,
            "rentPrice": null,
            "freight": null,
            "detail": null,
            "cateId": 2,
            "providerUserId": 8,
            "buyerUserId": 5,
            "statu": 3,
            "rentOrSail": 2,
            "releaseTime": null,
            "createTime": "2020-04-05T14:25:25.000+0000",
            "createBy": 0,
            "updateTime": "2020-04-05T14:50:28.225+0000",
            "updateBy": 0,
            "isDeleted": 0,
            "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433452794&di=1263fa7241e1b843f0967c466f7c8478&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2155983538%2C3860699715%26fm%3D214%26gp%3D0.jpg",
            "ownerName": null,
            "ownerPhone": null,
            "ownerAddress": null
        },
        {
            "id": 5,
            "name": "旧衣物",
            "amount": 1,
            "price": 32.00,
            "deposit": null,
            "rentPrice": null,
            "freight": null,
            "detail": "32",
            "cateId": 3,
            "providerUserId": 2,
            "buyerUserId": 5,
            "statu": 3,
            "rentOrSail": 1,
            "releaseTime": null,
            "createTime": "2020-04-05T14:54:34.000+0000",
            "createBy": 1,
            "updateTime": "2020-04-09T08:04:36.000+0000",
            "updateBy": 5,
            "isDeleted": 0,
            "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=f3b43387b9aad7ee53d9d893778a30e5&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F53a15a1343174.jpg",
            "ownerName": null,
            "ownerPhone": null,
            "ownerAddress": null
        },
        {
            "id": 7,
            "name": "包包租赁",
            "amount": 1,
            "price": 334.00,
            "deposit": null,
            "rentPrice": null,
            "freight": null,
            "detail": null,
            "cateId": 2,
            "providerUserId": 7,
            "buyerUserId": 5,
            "statu": 1,
            "rentOrSail": 2,
            "releaseTime": null,
            "createTime": "2020-04-05T15:39:05.000+0000",
            "createBy": 0,
            "updateTime": "2020-04-05T15:39:05.000+0000",
            "updateBy": 0,
            "isDeleted": 0,
            "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=78c4d6302ee3b22db7d03c9854504512&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20100%2F133%2Fw2000h1333%2F20200225%2F95db-ipzreiv7562157.jpg",
            "ownerName": null,
            "ownerPhone": null,
            "ownerAddress": null
        },
        {
            "id": 8,
            "name": "吉他",
            "amount": 1,
            "price": 350.00,
            "deposit": null,
            "rentPrice": null,
            "freight": null,
            "detail": null,
            "cateId": 4,
            "providerUserId": 7,
            "buyerUserId": null,
            "statu": 2,
            "rentOrSail": 1,
            "releaseTime": null,
            "createTime": "2020-04-05T15:40:25.000+0000",
            "createBy": 0,
            "updateTime": "2020-04-05T15:40:25.000+0000",
            "updateBy": 0,
            "isDeleted": 0,
            "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586433404356&di=78c4d6302ee3b22db7d03c9854504512&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20100%2F133%2Fw2000h1333%2F20200225%2F95db-ipzreiv7562157.jpg",
            "ownerName": null,
            "ownerPhone": null,
            "ownerAddress": null
        }
    ];
    try {
        axios.get(`${HTTP_URL}/pro/allPro`)
            .then((res) => {
              if (res.status === 200 && res.data) {
                context.commit('setFirstPageStuffList', res.data);
              }else {
                console.log("pro use mock data");
                context.commit('setFirstPageStuffList', mockData);
              }
            })
    }
    catch (e) {
      console.log("pro use mock data");
      context.commit('setFirstPageStuffList', mockData);
    }
};

export const fetchCategoryList = (context) => {
    console.log('fetchCategoryList');
    const mockData = [
      {
        "id": 1,
        "name": "二手图书",
        "updateTime": "2020-04-10T02:13:02.000+0000",
        "createBy": "0",
        "updateBy": "1999-12-31T16:00:00.000+0000",
        "isDeleted": 0
      },
      {
        "id": 2,
        "name": "美妆",
        "updateTime": "2020-04-10T02:15:29.000+0000",
        "createBy": "0",
        "updateBy": "1999-12-31T16:00:00.000+0000",
        "isDeleted": 0
      },
      {
        "id": 3,
        "name": "手机数码",
        "updateTime": "2020-04-10T02:15:44.000+0000",
        "createBy": "0",
        "updateBy": "1999-12-31T16:00:00.000+0000",
        "isDeleted": 0
      },
      {
        "id": 4,
        "name": "宠物用品",
        "updateTime": "2020-04-10T02:16:36.000+0000",
        "createBy": "0",
        "updateBy": "1999-12-31T16:00:00.000+0000",
        "isDeleted": 0
      }
    ]
    try {
      axios.get(`${HTTP_URL}/cate/allCate`)
        .then((res) => {
          if (res.status === 200 && res.data) {
            context.commit('setCategoryList', res.data);
          }else{
            context.commit('setCategoryList', mockData);
          }
        })
    }
    catch (e) {
      console.log("cate use mock data4");
      context.commit('setCategoryList', mockData);
    }
};

export const fetchSaleStuffList = (context, payload) => {
  const {type} = payload;
  const {user_id} = payload;
//type:0未卖出， 1已卖出， 买入
  console.log("salepayload", payload);
  let request_type = "stuffNotSell";
  if (type === '0')
    request_type = "stuffNotSell";
  else if (type === '1')
    request_type = "stuffSell";
  else if (type === 2 || type === '2')
    request_type = "stuffBuyIn";
  try {
    axios.get(`${HTTP_URL}/pro/${request_type}/${user_id}`)
      .then((res) => {
        console.log("fetchSaleStuffList res", res);
        context.commit('setSaleStuffList', res.data);
      })
  }
  catch (e) {
    console.log("fetchSaleStuffList is error", e);
  }
};

export const fetchRentStuffList = (context, payload) => {
  console.log("rentpayload", payload);
  const {type} = payload;
  const {user_id} = payload;
//type:0未租出， 1已租出， 租入
  let request_type = "stuffNotRent";
  if (type === '0')
    request_type = "stuffNotRent";
  else if (type === '1')
    request_type = "stuffRent";
  else if (type === 2 || type === '2')
    request_type = "stuffRentIn";
  try {
    axios.get(`${HTTP_URL}/pro/${request_type}/${user_id}`)
      .then((res) => {
        console.log("fetchRentStuffList res", res);
        context.commit('setRentStuffList', res.data);
      })
  }
  catch (e) {
    console.log("fetchRentStuffList is error", e);
  }
};
