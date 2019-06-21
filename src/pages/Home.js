import React, { Component, Fragment } from 'react';
import { getGoods } from "../api";
import { Carousel } from 'antd-mobile';
class  Home extends Component {
    state= {
        sliderlist:[],
        imgHeight: 176,
        toplist:[]
    }
    componentDidMount() {
        getGoods()
          .then(res => {
            //   console.log(res);
            if (res.status === 0) {
              //  成功
              this.setState({
                sliderlist: res.message.sliderlist,
                toplist: res.message.toplist
              });
            }
          })
        }
    render() { 
        // console.log("home render");
        return (  
            <Fragment>
            {/*轮播图开始*/}
        <Carousel
          autoplay
          infinite
        >
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
           </Carousel>
        {/*轮播图结束*/}
        </Fragment>
        );
    } 
}
export default Home;