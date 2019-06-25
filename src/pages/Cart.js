import React, { Component, Fragment } from 'react';
import { NavBar, Icon,SwipeAction,Checkbox, List, Modal  } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { cart_item_check, cart_all_check, cart_num_update, cart_item_delete } from "../store/actionCreator";
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;
class  Cart extends Component {   
    render() { 
        return (  
            <Fragment>
              {/* 导航栏 开始 */}
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() =>this.props.history.go(-1)}
          >商品详情
          </NavBar>
           {/* 导航栏 结束 */}
           {/* 点击购物车 开始 */}
           <div className="cart_content">
              {this.props.cartList.map(v =>
                <div key={v.id} className="cart_item" >
                <List>
                    <SwipeAction
                    style={{ backgroundColor: 'gray' }}
                    autoClose
                    right={[
                        {
                        text: '取消',
                        onPress: () => console.log('cancel'),
                        style: { backgroundColor: '#ddd', color: 'white' },
                        },
                        {
                        text: '删除',
                        onPress: () => {this.props.cartItemDelete(v.id)},
                        style: { backgroundColor: '#F4333C', color: 'white' },
                        },
                    ]}
                    onOpen={() => console.log('global open')}
                    onClose={() => console.log('global close')}
                    >
                    <div className="item_inner">
                    {/* 1 复选框 开始 */}
                    <div className="item_chk_wrap">
                      <CheckboxItem checked={v.isChecked} onChange={() => this.props.handleItemCheck(v.id)} ></CheckboxItem>

                    </div>
                    {/* 1 复选框 结束 */}
                    {/* 2 图片 开始 */}
                    <div className="item_img_wrap">
                      <img src={v.img_url} alt="" />
                    </div>
                    {/* 2 图片 结束 */}
                    {/* 3 名称 开始 */}
                    <div className="item_name_wrap">
                      <div className="item_title">{v.goods_name}</div>
                      <div className="item_price">￥ {v.price}</div>
                    </div>
                    {/* 3 名称 介绍 */}
                    {/* 4 数量 开始 */}
                    <div className="item_num_wrap">
                      <span onClick={() => this.props.handleCartNumUpdate(v.id, -1, v.num)} className="iconfont icon-minus"></span>
                      <span className="item_num">{v.num}</span>
                      <span onClick={() => this.props.handleCartNumUpdate(v.id, 1)} className="iconfont icon-plus"></span>
                    </div>
                    {/* 4 数量 结束 */}
                  </div>
                    </SwipeAction>
                </List>
                </div>
            )}
            <style jsx>{`
                    .cart_content{
                      .cart_item{
                        .item_inner{
                          display: flex;
                          .item_chk_wrap{
                            flex: 1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          }
                          .item_img_wrap{
                            flex: 3;
                            padding: 15px;
                          }
                          .item_name_wrap{
                            flex: 3;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            font-weight: 600;
                            .item_title{
                              font-size: 17px;
                            }
                            .item_price{
                              font-size: 18px;
                              color: orangered;
                            }
                          }
                          .item_num_wrap{
                            flex: 2;
                            display: flex;
                            align-items: flex-end;
                            padding-bottom: 20px;
                            .icon-minus{
                              font-size: 18px;
                              color: #666;
                            }
                            .icon-plus{
                              font-size: 18px;
                              color: #666;
                            }
                            .item_num{
                              font-size: 21px;
                              color: red;
                              padding: 0 5px;
                            }
                          }
                        }
                      }
                    }
                    `}</style>
           </div>
            {/* 点击购物车 结束 */}
            {/* 底部工具栏 开始 */}
            <div className="btm_tool">
          {/* 全选 开始 */}
          <div className="all_chk_wrap">
            <CheckboxItem checked={this.props.allChecked} onChange={this.props.handleAllCheck} > 全选 </CheckboxItem>
          </div>
          {/* 全选 结束 */}
          {/* 总价 开始 */}
          <div className="all_price_wrap">
            合计 <span className="total_price">￥ {this.props.totalPrice}</span>
          </div>
          {/* 总价 结束 */}
          {/* 结算 开始 */}
          <div className="item_pay_wrap">
            去结算({this.props.selectedNums})
          </div>
          {/* 结算 结束 */}
          <style jsx>
            {`.btm_tool {
                position: fixed;
                bottom: 50px;
                left: 0;
                width: 100%;
                height: 50px;
                background-color: #fff;
                display: flex;
                .all_chk_wrap {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .all_price_wrap {
                    flex: 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .total_price {
                    font-size: 17px;
                    font-weight: 600;
                    color: orangered;
                    }
                }
                .item_pay_wrap {
                    flex: 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: orangered;
                    color: #fff;
                    font-size: 19px;
                    font-weight: 600;
                }
                }
                `}</style>
        </div>
        {/* 底部工具栏 结束 */}
            
            </Fragment>
        );
    }
}
// 计算被选中的商品的所有的数量
const getSelectNum = (arr) => {
    let totalNums = 0;
    arr.forEach(v => { v.isChecked && (totalNums += v.num) });
    return totalNums;
  }
  
  // 计算被选中了的商品的总的价格
  const getTotalPrice = (arr) => {
    let totalPrice = 0;
    arr.forEach(v => { v.isChecked && (totalPrice += v.num * v.price) });
    return totalPrice;
  }
  // state和props的映射   点击购物车映射
const mapStateToProps = (state)=>{
    return {
        cartList: state.cartReducer.cartList,
         // 全选的状态  每一个商品的选中状态都是 true 就返回 true 
        allChecked: state.cartReducer.cartList.length && state.cartReducer.cartList.every(v => v.isChecked),
        // 被选中的商品的全数量(等于被选中了的购物车的长度) 
        selectedNums: getSelectNum(state.cartReducer.cartList),
        // 总的价格 
        totalPrice: getTotalPrice(state.cartReducer.cartList)
    }
}
// action和props的映射
const mapDispatch = (dispatch) => {
    return {
      handleItemCheck: (id) => {
        dispatch(cart_item_check(id));
      },
      handleAllCheck: (e) => {
        const { checked } = e.target;
        dispatch(cart_all_check(checked));
      },
      // 购物车的数量编辑
      // 3 循环 告诉我一个索引 = 旧的商品对象的索引 || -1 不存在
      handleCartNumUpdate: (id, unit, num) => {
        // 1 判断是否要进行删除操作
        if (unit === -1 && num === 1) {
          // 2 弹出对话框
          alert('警告', '您确定删除吗？😊', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
              text: '删除', onPress: () => {
                // 执行删除
                dispatch(cart_item_delete(id));
              }
            },
          ])
  
        } else {
          dispatch(cart_num_update(id, unit));
        }
  
      },
      // 执行删除
      cartItemDelete: (id) => {
        alert('警告', '您确定删除吗？😊', [
          { text: '取消', onPress: () => console.log('cancel') },
          {
            text: '删除', onPress: () => {
              // 执行删除
              dispatch(cart_item_delete(id));
            }
          },
        ])
      }
    }
  }

export default connect(mapStateToProps,mapDispatch)(withRouter(Cart))