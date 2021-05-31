<template>

  <div>
    <el-container>
      <el-header>
        <!-- 一级指标 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>
          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :showDialogYjzb="true"
                    :showAddorDelete="true"
                    useTitle="一级指标"
                    getName="yjzb"
                    :showSearch="true"
                    :showCheckbox="false" 
                    @delete="del"
                    @groupDelete="grpDel"/>

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'


export default {
  async created () {
    tablePostGet(this, "yjzb")
  },
  data () {
    return {
      headerUse: [
        {
          label: "指标名称",
          key: "name"
        },
        {
          label: "指标个数",
          key: "col_num"
        }
      ],
      tableData: [],
    }
  },
  methods: {
    del(data){
      this.$axios.post("del_yjzb",this.qs.stringify({id:data.id}) ).then(
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
      this.$axios.post('dels_yjzb',this.qs.stringify({list:temp}))
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