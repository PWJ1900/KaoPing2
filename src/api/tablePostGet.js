

const tablePostGet = (the,addUrl)=>{
	// the.$axios({
	// 	method: 'post',
	// 	url: addUrl,
	// 	data: the.qs.stringify({ nihao: "fdsa" })
	// }).then((response) => {
	// 	the.tableData = response.data

	// }).catch((error) => {
	// 	console.log(error)
	// })
	/**axios的post方法：返回值传给 tableData
	 * 第一个参数：结合main.js中的baseUrl，形成完整的请求路径
	 * 第二个参数：使用qs插件将对象转化为url格式，形成请求参数
	 */
	the.$axios.post(addUrl, the.qs.stringify({ nihao: "fdsa" }))
		.then((response) => {
			console.log(response)
			// the.tableData = JSON.parse(JSON.stringify(response.data))
			the.tableData = response.data
			// console.log( the.tableData[0,2])
		}).catch((error) => {
			console.log(error)
		})
		
}
export {tablePostGet}