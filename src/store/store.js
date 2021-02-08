import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//类似公共的方法和共享的数据可以在这里面定义，目前还未用
export default new Vuex.Store({
	state:{
		count:1,
		routerUse:[],
		headerLabel:{
			"danweixinxi": "单位信息" , 
			"bumengxinxi":"部门信息",
			"shengfengleixing":"身份类型",
			"zhijixinxi":"职级信息",
			"ganbuxinxi":"干部信息",
			"banzixinxi":"班子信息",
			"yijizhibiao":"一级指标",
			"erjizhibiao":"二级指标",
			"canpingqunti":"参评群体",
			"duixiangfengzu":"对象分组",
			"kaopingdingyi":"考评定义",
			"cepingxuhao":"测评序号",
			"zhibiaotixi":"指标体系",
			"ADfengzhi":"A~D分值",
			"cepingdengji":"测评等级",
			"yonghumima":"用户密码",
			"shujutongji":"数据统计",
			"shujujisuan":"数据计算",
			"cepingjieguo":"测评结果",
			"dengjitongji":"等级统计",
			"zongtipingjia":"总体评价",
			"shujushangbao":"数据上报",
			"shujudaochu":"数据导出",
			"tuijianxuhao":"推荐序号",
			"zhiweizhishu":"职位职数",
			"yonghumima2":"用户密码",
			"shujutongji2":"数据统计",
			"tanhuatuijian":"谈话推荐",
			"xingmingxiaogai":"姓名校改",
			"rengshushezhi":"人数设置",
			"tuijianjieguo":"推荐结果",
			"shujushangbao2":"数量上报",
			"yonghuguanli":"用户管理",
			"miyaoguangli":"密钥管理",
		 "beifengyuhuifu":"备份与恢复",
		 "shujushanchu":"数据删除",
		 "xitongchushihua":"系统初始化",
		 "mimaxiugai":"密码修改",
		 "bianmaguizeshuoming":"编码规则说明",
		 "bangquanyuyewulianxi":"版权与业务联系"


				
		}
	},
	mutations:{
		add(state, step){
			state.count++
			console.log(state.count)
		},
		// jump(state, step){
		// 	state.routerUse.push(step)
		// }


	},
	actions:{

	}
})