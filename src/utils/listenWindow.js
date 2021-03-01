const listenWindow = (the)=>{
	const that = the
    window.onresize = () => {
      return (() => {//此函数为自己回调方法挂在mounted,此方法只能一时自己调用
        //这里写要操作的函数
				// console.log(window.screenWidth)
        // window.screenWidth = document.body.clientWidth
        // that.screenWidth = window.screenWidth
				console.log(document.body.clientWidth)
				// console.log(that.document.body.clientWidth)
				if(document.body.clientWidth < 1100){
				that.isCollapse = true
				that.useIcon = "el-icon-d-arrow-right"}
				else{
					that.isCollapse = false
					that.useIcon = "el-icon-d-arrow-left"
					
				}
      })()
    }}
		export {listenWindow}

