import React,{ Fragment } from 'react';
import "./styles/App.css"
import { TabBar } from 'antd-mobile';
import  MyLayout  from "./components/MyLayout";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    return (
     <Fragment>
      <Router>
         {/* 
          render 和 component属性的区别？
          1  component 里面的组件 可以直接 this.props.match
          2  render 要自己传递参数过去
           */}
      <Route path="/"  exact  render={(props)=><MyLayout {...props}> <Home />   </MyLayout>} />
          {/* 购物车 */}
          <Route path="/Cart"  render={(props)=><MyLayout {...props}> <Cart />   </MyLayout>} />

          {/* 我的 */}
          <Route path="/Mine"  render={(props)=><MyLayout {...props}> <Mine />   </MyLayout>} />

          {/* 登录 */}
          {/* <Route path="/login" component={Login}></Route> */}
        
      </Router>
     </Fragment>
      
    );
  }
}

export default App;
