import { CART_ADD,CART_ITEM_CHECK, CART_ALL_CHECK, CART_NUM_UPDATE, CART_ITEM_DELETE } from "../actionTypes";
const defaultState = {
    cartList: [
        {
            // 商品的id
            id: 11,
            // 单价
            price: 100,
            // 数量
            num: 1,
            // 名称
            goods_name: "23435",
            // 图片的路径
            img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg",
            isChecked: true
        },
        {
          // 商品的id
          id: 12,
          // 单价
          price: 100,
          // 数量
          num: 2,
          // 名称
          goods_name: "234555",
          // 图片的路径
          img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg",
          isChecked: true
      }
    ]
}
export default (state = defaultState, action) => {
    console.log(action);
    
    // 接收 派发后的action

    
    // 判断action的类型
    switch (action.type) {
        case CART_ADD: {
            let newState = JSON.parse(JSON.stringify(state))
            // 获取商品信息
            let goodsObj = action.value;
             // 2 如何判断   拿 商品信息对象和 旧的购物车数组-循环判断 根据 id是否相对 来判断即可
             // index ===-1 =>不存在
            let index = newState.cartList.findIndex(v=> v.id === goodsObj.id)
            if(index === -1){
                let newGoods = {
                    id: goodsObj.id,
                    price: goodsObj.sell_price,
                    num: 1,
                    goods_name: goodsObj.title,
                    img_url: goodsObj.img_url,
                    isChecked: true
                }
                newState.cartList.push(newGoods);
            }else {
                // 获取旧的数据 执行 数量++
                newState.cartList[index].num++;
            }
            return newState
        }   
        break;
        case CART_ITEM_CHECK:
            {
              /* 
              1 复制一份新state
              2 根据id去找到 购物车中的商品对象
              3 把商品对象的选中状态 取反 
              4 返回 state
               */
              let newState = JSON.parse(JSON.stringify(state));
              let index = newState.cartList.findIndex(v => v.id === action.value.id);
              newState.cartList[index].isChecked = !newState.cartList[index].isChecked;
              return newState;
            }
            break;
          case CART_ALL_CHECK:
            {
              /* 
              1 接收 全选按钮的选中状态
              2 获取 state中的购物车数据 循环 
              3 把每一个购物车中的商品对象的属性 isChecked == 第一步中获取到的选中状态
              4 返回 state
               */
              let newState = JSON.parse(JSON.stringify(state));
              // forEach中的value值被修改了 能影响到原数组
              newState.cartList.forEach(v => v.isChecked = action.value.isChecked);
              return newState;
            }
            break;
          case CART_NUM_UPDATE:
            {
              /* 
              1 复制新的state
              2 获取要修改的购物车对象的索引-根据传递过来的id来获取
              3 将要修改的购物车对象的数量 修改为传递过来的值（+1 、-1）
              4 返回 state
               */
              let newState = JSON.parse(JSON.stringify(state));
              let index = newState.cartList.findIndex(v => v.id === action.value.id);
              newState.cartList[index].num += action.value.unit;
              return newState;
            }
            break;
          case CART_ITEM_DELETE:
            {
              /* 
              1 获取id 和 复制新的state
              2 直接执行删除 cartList.splice(index,1);
               */
              let newState=JSON.parse(JSON.stringify(state));
              let index=newState.cartList.findIndex(v=>v.id===action.value.id);
              newState.cartList.splice(index,1);
              return newState;
            }
            break;
          default:
            break;
        }
      
        return state;
      }