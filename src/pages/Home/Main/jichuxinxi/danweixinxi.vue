<template>

  <div>
    <el-container>
      <el-header>
        <!-- 单位信息 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>
          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :showDialogDwxx="true"
                    :showAddorDelete="true"
                    :showSearch="true"
                    :showdaoru="true"
                    :showdaochu="true"
                    getName="dwxx"
                    @refreshUseData="SecondGet"
                    @delete="del" 
                    @groupDelete="grpDel"/>
          <!-- @refreshUseData="SecondGet" 这个为更改传值再次刷新数据 -->

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'


export default {
  async created () {
    tablePostGet(this, "dwxx")//根据postman的Api获取数据来测试

  },
  data () {
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [
        {
          label: "单位信息代码",
          key: "dwdm"
        },
        {
          label: "单位信息名称",
          key: "dwmc"
        }



      ],
      tableData: [],
      searchinfo: '',
      restoretableData: []
    }
  },
  methods: {
    SecondGet () {
      tablePostGet(this, "dwxx")//更改数据时第二次刷新其逻辑dialog->table->this属性，$emit实现
    },
    del (data) {
      this.$axios.post("del_dwxx", this.qs.stringify({ id: data.id })).then(
        (res) => {
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
      this.$axios.post('dels_dwxx',this.qs.stringify({list:temp}))
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