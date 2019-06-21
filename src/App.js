import React,{ Fragment } from 'react';
import "./styles/App.css"
import { TabBar } from 'antd-mobile';
import  MyLayout  from "./components/MyLayout";

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
       <MyLayout/>
     </Fragment>
      
    );
  }
}

export default App;
