// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/store.js'
import axios from 'axios'
import qs from 'qs'



Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
axios.defaults.baseURL = 'https://449ff5f7-3bf6-4d59-a0ae-cfa8267584f2.mock.pstmn.io/';
Vue.prototype.qs = qs      //全局注册，使用方法为:this.qs
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>',
})
