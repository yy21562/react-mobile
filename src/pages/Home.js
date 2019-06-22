import React, { Component, Fragment } from 'react';
import { getGoods } from "../api";
import { Carousel } from 'antd-mobile';
class  Home extends Component {
    state= {
        sliderlist:[],
        imgHeight: 176,
        toplist:[],
        goodslist: []
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
        {/* 推荐商品 开始 */}
          <div className="recommend_row">
            <div className="recommend_row_title">推荐商品</div>
            <div className="recommend_row_content">
              {
                this.state.toplist.map(v =>
                  <a href = "#" className="top_item" key={v.id} >
                  <div className="top_item_img_wrap">
                    <img src={ v.img_url } alt="" />
                  </div>
                  <div className="top_item_name">
                    <p>
                      {v.title}
                    </p>
                  </div>
                  </a>
                )
              }
            </div>
            <style jsx>
              {`.recommend_row_title {
                background-color:  #f5f5f9;
                color: #666;
                font-size: 14px;
                padding: 8px;
              }
                .recommend_row_content {
                    .top_item {
                        display: flex;
                        background-color: #fff;
                        border-bottom: 1px solid #666;
                        .top_item_img_wrap {
                            width: 20%;
                            padding: 20px;
                        }
                        .top_item_name {
                            width: 80%;
                            display: flex;
                            align-items: center;
                            p {
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            `}
          </style>
          </div>
        {/* 推荐商品 结束 */}
        {/* 商品列表 开始 */}
        <div className="goods_list">
          {this.state.goodslist.map(v=> {
            return (
              <div className="goods_item" key={v.level1cateid}>
                <div className="goods_title">{v.catetitle}</div>
              </div>
            )
          })}

        </div>
        </Fragment>
        );
    } 
}
export default Home;