import React, { Component, Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';
class GoodsDetail extends Component {
    render() { 
        return ( 
            <Fragment>
              {/* 导航栏 开始 */}
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            onLeftClick={() =>this.props.history.go(-1)}
          >商品详情
          </NavBar>
           {/* 导航栏 结束 */}
          </Fragment>
        )
    }
}
 
export default GoodsDetail;