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
// import GetTable from '@/api/tablePostGet';
import Router from 'vue-router'

// 导出excel表格插件
import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 这条语句防止重复点击路由出错



Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
// axios.defaults.baseURL = 'https://7ac6fd16-7d64-4750-9429-58f28f2e230a.mock.pstmn.io/';
// axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.baseURL = 'http://localhost:8080/'
Vue.prototype.qs = qs      //全局注册，使用方法为:this.qs
Vue.use(ElementUI)
ElementUI.Dialog.props.closeOnClickModal.default = false
Vue.config.productionTip = false
// Vue.use(GetTable)

// Vue.mixin({
//   beforeRouteLeave(to,form,next){
//     //获取当前路由所属的.vue文件的name名
//     let vueName = this.$vnode.componentOptions.Ctor.extendOptions.name;
//     //判断该name名是否存在清空路由缓存的临时缓存中
//     if(vueName == sessionStorage.getItem("routerIsClose")){
//       //获取当前路由的key值
//       let key = this.$vnode.componentOptions.Ctor.cid;
//       //获取所有路由的key值
//       let keys = this.$vnode.parent.componentInstance.keys;
//       if(null != key && undefined != key){
//         //将需要清空路由缓存的key移除
//         keys.splice(keys.indexOf(key),1);
//         //获取该key值对应的缓存
//         let cache = this.$vnode.parent.componentInstance.cache;
//         //删除该缓存
//         delete cache[key];
//         this.$destroy();
//         //移除临时缓存
//         sessionStorage.removeItem("routerIsClose");
//       }
//     }
//     next();
//   }
// });


/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  components: { App },
  store,
  template: '<App/>',
})

