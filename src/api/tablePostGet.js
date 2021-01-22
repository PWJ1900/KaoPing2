const talePostGet = (the,addUrl)=>{
	// the.$axios({
	// 	method: 'post',
	// 	url: addUrl,
	// 	data: the.qs.stringify({ nihao: "fdsa" })
	// }).then((response) => {
	// 	the.tableData = response.data

	// }).catch((error) => {
	// 	console.log(error)
	// })
	the.$axios.post(
			addUrl,
			the.qs.stringify({ nihao: "fdsa" })
		).then((response) => {
			the.tableData = response.data
	
		}).catch((error) => {
			console.log(error)
		})
}
export {talePostGet}