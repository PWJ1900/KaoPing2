<template>

  <div>
    <el-header>
        <!-- 测评结果 -->
        <headerUse />
      </el-header>
      <el-main>

      <!-- 测评序号 -->
      <useTable   :headerUse="this.headerUse"
                  :tableData="this.tableData"
                  :showDialogCpxh="true"
                  :showAddorDelete="false"
                  :showdaoru="true"
                  :showSearch="true"
                  :showdaochu="true"
                  @delete="del" />

        <!-- 这是main -->
      </el-main>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
import useTable from '@/components/Table/useTable'


export default {
  async created () {
    console.log("测评序号组件-加载完成")
    tablePostGet(this, "mygl")//根据postman的Api获取数据来测试
  },
  data () {
    return {
      /**子组件的数据
       * headerUse：表头信息，带key（子组件用来绑定prop属性）
       * tableData：表格数据
       */
      headerUse: [
        {
          label: "姓名",
          key: "xm"
        },
        {
          label: "单位",
          key: "dw"
        },
        {
          label: "卡编号",
          key: "bh"
        },
        {
          label: "卡序号",
          key: "GUID"
        },
        {
          label: "启用",
          key: "qy"
        }
      ],
      tableData: [],
    }
  },
  components : {
    useTable
  },
  methods: {
    del(data){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
  
      this.$axios.post("del_mygl",this.qs.stringify({ID:data.ID}) ).then(
        (res)=>{
          this.$message({
          type: 'success',
          message: '删除成功!',
          offset: 100
        });
        }
      )
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            offset: 100
          });         
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