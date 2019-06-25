// import {CART_ADD  } from "../actionTypes";
// // 1 负责新增购物车  
// export const cart_add =(goodsObj)=>{
//     return {
//       type:CART_ADD,
//       // 传入整个商品信息对象就可以
//       value:goodsObj
//     };
//   }
  import { CART_ADD, CART_ITEM_CHECK, CART_ALL_CHECK, CART_NUM_UPDATE, CART_ITEM_DELETE } from "../actionTypes";

/**
 * 创建增加购物车数量
 * @param {Object} goodsinfo 商品信息对象 
 * @return {Object}  返回一个action
 */
export const cart_add = (goodsinfo) => {
  return {
    type: CART_ADD,
    // 要传递整个商品信息对象
    value: goodsinfo
  }
}

/**
 * 购物车的商品的切换选中
 * @param {Number} id 要修改的id
 */
export const cart_item_check = (id) => {
  return {
    type: CART_ITEM_CHECK,
    // 为了方便维护和拓展 最好传递一个对象
    value: { id }
  }
}

/**
 * 让购物车的选中状态跟随 全选按钮
 * @param {Bool} isChecked 选中状态
 */
export const cart_all_check = (isChecked) => {
  return {
    type: CART_ALL_CHECK,
    value: { isChecked }
  }
}


/**
 * 编辑购物车数量
 * @param {Number} id 被操作的商品的id
 * @param {Number} unit 加多少或者减多少
 */
export const cart_num_update = (id, unit) => {
  return {
    type: CART_NUM_UPDATE,
    value: { id, unit }
  }
}

/**
 * 执行购物车删除
 * @param {NUmber} id 被删除的id
 */
export const cart_item_delete = (id) => {
  return {
    type: CART_ITEM_DELETE,
    value: { id }
  }
}