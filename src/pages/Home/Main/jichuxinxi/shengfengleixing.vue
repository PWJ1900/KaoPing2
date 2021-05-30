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
                    :showDialogNormal="true"
                    :showAddorDelete="true"
                    :showSearch="true"
                    :showdaoru="true"
                    :showdaochu="true"
                    getName="sflx"
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
    tablePostGet(this, "sflx")//根据postman的Api获取数据来测试

  },
  data () {
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [
        {
          label: "身份类型代码",
          key: "rysfdm"
        },
        {
          label: "身份类型名称",
          key: "rysfmc"
        }
      ],
      tableData: [],
      searchinfo: '',
      restoretableData: []
    }
  },
  methods: {
    del (data) {
      this.$axios.post("del_sflx", this.qs.stringify({ id: data.id })).then(
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
      this.$axios.post('dels_sflx',this.qs.stringify({list:temp}))
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