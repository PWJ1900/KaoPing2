import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//类似公共的方法和共享的数据可以在这里面定义，目前还未用
export default new Vuex.Store({
	state:{
		count:1,
		routerUse:[]
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