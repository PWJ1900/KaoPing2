const tablePostUpdate = (the,createUrl,form)=>{
	the.$axios.post(
		createUrl,
			the.qs.stringify( form)
		).then((response) => {
			console.log(response)
			// the.tableData = JSON.parse(JSON.stringify(response.data))
			// the.tableDataUse = response.data
			// console.log( the.tableData[0,2])
	
		}).catch((error) => {
			console.log(error)
		})
}
export {tablePostUpdate}