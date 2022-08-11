import Vue from 'vue'
import App from './App.vue'
//element UI
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//国际化
import i18n from './lang/index.js'
//vuex
import Vuex from 'vuex'
// 引入store文件
import store from './store/store.js'
//router
import router from './router/index'
//axios
import axios from "axios";
Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(elementUi)
Vue.use(Vuex)
// 引入组件结构
// import bjwTable from "bjw-table";
// 引入组件样式
// import 'bjw-table/bjw-table.css'
// 注册组件到全局
// Vue.use(bjwTable);

new Vue({
  render: h => h(App),
  i18n,
  router,
  store: new Vuex.Store(store)
}).$mount('#app')
