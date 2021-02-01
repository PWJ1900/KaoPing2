import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import home from '@/pages/Home/index'
//下面的test页面是用来做测试用的
import test from '@/pages/test'
//以下为边侧栏跳转路由
import jichuxinxi from '@/pages/Home/Aside/jichuxinxi'
import mingzhupingce from '@/pages/Home/Aside/mingzhupingce'
import mingzhutuijian from '@/pages/Home/Aside/mingzhutuijian'
import xitongguanli from '@/pages/Home/Aside/xitongguanli'
//以下为基础信息显示的路由，在main中显示
import danweixinxi from '@/pages/Home/Main/jichuxinxi/danweixinxi'
import bumengxinxi from '@/pages/Home/Main/jichuxinxi/bumengxinxi'
import shengfengleixing from '@/pages/Home/Main/jichuxinxi/shengfengleixing'
import zhijixinxi from '@/pages/Home/Main/jichuxinxi/zhijixinxi'
import ganbuxinxi from '@/pages/Home/Main/jichuxinxi/ganbuxinxi'
import banzixinxi from '@/pages/Home/Main/jichuxinxi/banzixinxi'
import yijizhibiao from '@/pages/Home/Main/jichuxinxi/yijizhibiao'
import erjizhibiao from '@/pages/Home/Main/jichuxinxi/erjizhibiao'
import canpingqunti from '@/pages/Home/Main/jichuxinxi/canpingqunti'
import duixiangfengzu from '@/pages/Home/Main/jichuxinxi/duixiangfengzu'
import kaopingdingyi from '@/pages/Home/Main/jichuxinxi/kaopingdingyi'

//以下为民主评测显示的路由
import cepingxuhao from '@/pages/Home/Main/mingzhupingce/cepingxuhao'
import zhibiaotixi from '@/pages/Home/Main/mingzhupingce/zhibiaotixi'
import ADfengzhi from '@/pages/Home/Main/mingzhupingce/ADfengzhi'
import cepingdengji from '@/pages/Home/Main/mingzhupingce/cepingdengji'
import yonghumima from '@/pages/Home/Main/mingzhupingce/yonghumima'
import shujutongji from '@/pages/Home/Main/mingzhupingce/shujutongji'
import shujujisuan from '@/pages/Home/Main/mingzhupingce/shujujisuan'
import cepingjieguo from '@/pages/Home/Main/mingzhupingce/cepingjieguo'
import dengjitongji from '@/pages/Home/Main/mingzhupingce/dengjitongji'
import zongtipingjia from '@/pages/Home/Main/mingzhupingce/zongtipingjia'
import shujushangbao from '@/pages/Home/Main/mingzhupingce/shujushangbao'
import shujudaochu from '@/pages/Home/Main/mingzhupingce/shujudaochu'

//以下是民主推荐
import tuijianxuhao from '@/pages/Home/Main/mingzhutuijian/tuijianxuhao'
import zhiweizhishu from '@/pages/Home/Main/mingzhutuijian/zhiweizhishu'
import yonghumima2 from '@/pages/Home/Main/mingzhutuijian/yonghumima'
import shujutongji2 from '@/pages/Home/Main/mingzhutuijian/shujutongji'
import tanhuatuijian from '@/pages/Home/Main/mingzhutuijian/tanhuatuijian'
import xingmingxiaogai from '@/pages/Home/Main/mingzhutuijian/xingmingxiaogai'
import rengshushezhi from '@/pages/Home/Main/mingzhutuijian/rengshushezhi'
import tuijianjieguo from '@/pages/Home/Main/mingzhutuijian/tuijianjieguo'
import shujushangbao2 from '@/pages/Home/Main/mingzhutuijian/shujushangbao'

//以下是系统管理
import yonghuguanli from '@/pages/Home/Main/xitongguanli/yonghuguanli'
import miyaoguangli from '@/pages/Home/Main/xitongguanli/miyaoguanli'
import beifengyuhuifu from '@/pages/Home/Main/xitongguanli/beifengyuhuifu'
import shujushanchu from '@/pages/Home/Main/xitongguanli/shujushanchu'
import xitongchushihua from '@/pages/Home/Main/xitongguanli/xitongchushihua'
import mimaxiugai from '@/pages/Home/Main/xitongguanli/mimaxiugai'
import bianmaguizeshuoming from '@/pages/Home/Main/xitongguanli/bianmaguizeshuoming'
import bangquanyuyewulianxi from '@/pages/Home/Main/xitongguanli/bangquanyuyewulianxi'

// header导航栏组建
import headerUse from '@/components/header/inheaderuse'
import useTable from '@/components/Table/useTable'
import fwbUse from "@/components/editor/fwbUse"


Vue.use(Router)
 const router = new Router({
  mode:'history',
  routes: [
  {
    path:"/test",
    name:"test",
    component:test
  },
    {
      path:'/',
      redirect:'/Login',

    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path:'/home',
      name:'home',
      component:home,
      redirect:'/jichuxinxi',
      children:[{
        path:'/jichuxinxi',
        name:'jichuxinxi',
        component:jichuxinxi,
        children:[
          {path:'/danweixinxi',
          name:'danweixinxi',
          component:danweixinxi},
          {path:'/bumengxinxi',
          name:'bumengxinxi',
          component:bumengxinxi},
          {path:'/shengfengleixing',
          name:'shengfengleixing',
          component:shengfengleixing},
          {path:'/zhijixinxi',
          name:'zhijixinxi',
          component:zhijixinxi},
          {path:'/ganbuxinxi',
          name:'ganbuxinxi',
          component:ganbuxinxi},
          {path:'/banzixinxi',
          name:'banzixinxi',
          component:banzixinxi},
          {path:'/yijizhibiao',
          name:'yijizhibiao',
          component:yijizhibiao},
          {path:'/erjizhibiao',
          name:'erjizhibiao',
          component:erjizhibiao},
          {path:'/canpingqunti',
          name:'canpingqunti',
          component:canpingqunti},
          {path:'/duixiangfengzu',
          name:'duixiangfengzu',
          component:duixiangfengzu},
          {path:'/kaopingdingyi',
          name:'kaopingdingyi',
          component:kaopingdingyi},
        ]
      },{
        path:'/mingzhupingce',
        name:'mingzhupingce',
        component:mingzhupingce,
        children:[{
          path:'/cepingxuhao',
        name:'cepingxuhao',
        component:cepingxuhao,

        },
      { path:'/zhibiaotixi',
      name:'zhibiaotixi',
      component:zhibiaotixi,},
      { path:'/ADfengzhi',
      name:'ADfengzhi',
      component:ADfengzhi,},
      { path:'/cepingdengji',
      name:'cepingdengji',
      component:cepingdengji,},
      { path:'/yonghumima',
      name:'yonghumima',
      component:yonghumima,},
      { path:'/shujutongji',
      name:'shujutongji',
      component:shujutongji,},
      { path:'/shujujisuan',
      name:'shujujisuan',
      component:shujujisuan,},
      { path:'/cepingjieguo',
      name:'cepingjieguo',
      component:cepingjieguo,},
      { path:'/dengjitongji',
      name:'dengjitongji',
      component:dengjitongji,},
      { path:'/zongtipingjia',
      name:'zongtipingjia',
      component:zongtipingjia,},
      { path:'/shujushangbao',
      name:'shujushangbao',
      component:shujushangbao,},
      { path:'/shujudaochu',
      name:'shujudaochu',
      component:shujudaochu,},
    
    
    
    ]
      },{
        path:'/mingzhutuijian',
        name:'mingzhutuijian',
        component:mingzhutuijian,
        children:[
            {path:'/tuijianxuhao',
            name:'tuijianxuhao',
            component:tuijianxuhao,},
            {path:'/zhiweizhishu',
            name:'zhiweizhishu',
            component:zhiweizhishu,},
            {path:'/yonghumima2',
            name:'yonghumima2',
            component:yonghumima2,},
            {path:'/shujutongji2',
            name:'shujutongji2',
            component:shujutongji2,},
            {path:'/tanhuatuijian',
            name:'tanhuatuijian',
            component:tanhuatuijian,},
            {path:'/xingmingxiaogai',
            name:'xingmingxiaogai',
            component:xingmingxiaogai,},
            {path:'/rengshushezhi',
            name:'rengshushezhi',
            component:rengshushezhi,},
            {path:'/tuijianjieguo',
            name:'tuijianjieguo',
            component:tuijianjieguo,},
            {path:'/shujushangbao2',
            name:'shujushangbao2',
            component:shujushangbao2,}


        ]
      },{
        path:'/xitongguanli',
        name:'xitongguanli',
        component:xitongguanli,
        children:[
          {path:'/yonghuguanli',
          name:'yonghuguanli',
          component:yonghuguanli,},
          {path:'/miyaoguangli',
          name:'miyaoguangli',
          component:miyaoguangli,},
          {path:'/beifengyuhuifu',
          name:'beifengyuhuifu',
          component:beifengyuhuifu,},
          {path:'/shujushanchu',
          name:'shujushanchu',
          component:shujushanchu,},
          {path:'/xitongchushihua',
          name:'xitongchushihua',
          component:xitongchushihua,},
          {path:'/mimaxiugai',
          name:'mimaxiugai',
          component:mimaxiugai,},
          {path:'/bianmaguizeshuoming',
          name:'bianmaguizeshuoming',
          component:bianmaguizeshuoming,},
          {path:'/bangquanyuyewulianxi',
          name:'bangquanyuyewulianxi',
          component:bangquanyuyewulianxi,},

        
        
        
        
        
        
        ]
      }]
    }
  ]
})
router.beforeEach((to, from,next)=>{
  let vtf = sessionStorage.getItem('vtf')
  if(to.name == "Login"){
    next()
  }
  else if(vtf == '1'){
    next()
  }
  else{
    next({name:"Login"})
  }

  
  
  
});
export default router

//全局使用组建
Vue.component("headerUse",headerUse)
Vue.component("useTable",useTable)
Vue.component("fwbUse",fwbUse)