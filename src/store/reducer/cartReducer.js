import { CART_ADD } from "../actionTypes";
const defaultState = {
    cartList: [
        // {
        //     // 商品的id
        //     id: 100,
        //     // 单价
        //     price: 100,
        //     // 数量
        //     num: 99,
        //     // 名称
        //     goods_name: "手机",
        //     // 图片的路径
        //     img_url: "11",
        //     isChecked: false
        // }
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

        default:
          break;
    }
    return state
}
