export const todoList = state => state.todoList;

export const getUser = state => {
    return state.user;
};

export const getArea = state => {
  return state.area;
};

export const getStuffList = state => {
    return state.stuffList;
}
/////////////////////////////////////////////
export const getFirstPageStuffList = state => {
    console.log(state.firstPageStuffList);
    return state.firstPageStuffList;
};
export const getPageStuffData = state => {
  console.log(state.pageStuffData);
  return state.pageStuffData;
};
export const getSomeStuffList = state => {
  console.log("abc", state.firstPageStuffList);
  let stufflist = state.firstPageStuffList;
  console.log("getSomeStuffList stufflist", stufflist);
  let size = stufflist.length;
  let a = Math.floor(Math.random()*size);
  let b = Math.floor(Math.random()*size);
  let c = Math.floor(Math.random()*size);
  let proList = [];
  proList.push(stufflist[a]);
  proList.push(stufflist[b]);
  proList.push(stufflist[c]);
  console.log("state.getSomeStuffList", proList);
  return proList;
}
export const getCategoryList = state => {
  console.log(state.categoryList);
  return state.categoryList;
}
export const getSaleStuffList = state => {
  return state.saleStuffList;
}
export const getRentStuffList = state => {
  return state.rentStuffList;
}
export const getStuffDetailMessage = state => {
  return state.stuffDetailMessage;
}
export const getOrderDetailMessage = state => {
  return state.orderDetailMessage;
}
