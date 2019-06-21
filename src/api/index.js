
import axios from "axios";
// 0 添加统一的默认的 接口地址前缀
axios.defaults.baseURL = "http://react.zbztb.cn/site/";
// 请求成功了 就会被调用的一个事件 ===   响应 拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log(response);
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
// 1 获取首页轮播图 + 推荐商品
export const getGoods = () => axios.get("goods/gettopdata/goods");