<template>

  <div>
    <el-container>
      <el-header>
        <!-- 参评群体 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>
          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :showDialogCpqt="true"
                    :showAddorDelete="true"
                    :showSearch="true"
                    :showCheckbox="false"
                    useTitle="参评群体"
                    getName="cpqt"
                    @delete="del"
                    @groupDelete="grpDel" />

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'

export default {
  async created () {
    tablePostGet(this, "cpqt")//根据postman的Api获取数据来测试

  },
  data () {
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [//此处虚更改与后端提取字段的一致
        {
          label: "参评群体名称",
          key: "name"
        },
        {
          label: "参评群体个数",
          key: "cpfv_num"
        }
      ],
      tableData: [],



    }
  },
  methods: {
    del(data){
      this.$axios.post("del_cpqt",this.qs.stringify({id:data.id}) ).then(
        (res)=>{
          this.$message({
          type: 'success',
          message: '删除成功!'
        });
        }
      )
      
    },
    grpDel(data){
      var list=[]
      data.forEach(element => {
        list.push(element.id)
      })
      var temp = JSON.stringify(list)
      temp = temp.substring(1,temp.length-1)
      console.log(temp)
      this.$axios.post('dels_cpqt',this.qs.stringify({list:temp}))
        .then((res)=>{
          console.log(res)
        })
    }


  }

}
</script>
<style scoped>
@import '../../../../css/headermain2.css';
</style>
<style>
.el-main {
  padding: 0;
}
</style>