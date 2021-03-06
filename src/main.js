import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
//引入axios库
import axios from 'axios'
//1.引入第三方组件库 mint-ui
//1.1完成引入所有组件
import MintUI from "mint-ui"
//1.2单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//1.3将mint-ui 注册Vue
Vue.use(MintUI)



// Vue.config.productionTip = false
// axios.defaults.baseURL="http://localhost:8080/"
//1.6配置请求时保存session信息
axios.defaults.withCredentials=true
//1.7配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
Vue.use(Vant);
Vue.prototype.axios=axios; 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
