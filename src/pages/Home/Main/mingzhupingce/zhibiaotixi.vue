<template>
  <div>
    <el-container>
      <el-header>
        <!-- 指标体系 -->
        <headerUse />
      </el-header>
      <el-main>
        <useTable :headerUse="this.headerUse"
                  :tableData="this.tableData"
                  :showDialogZbtx="true"
                  :showAddorDelete="true"
                  :showdaoru="true"
                  :showSearch="true"
                  useTitle="指标体系"
                  getName="zbtx"
                  :showdaochu="true"
                  @delete="del"
                  @groupDelete="grpDel"/>
      </el-main>
    </el-container>

  </div>
</template>
<script>
import useTable from '@/components/Table/useTable'

export default {
  async created () {
    this.$axios.post('zbtx').then(
      res=>{
        this.tableData=res.data
      }
    )

  },
  components: {
    useTable
  },
  methods:{
    del(data){
      this.$axios.post("del_zbtx",this.qs.stringify({id:data.id}) ).then(
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
      this.$axios.post('dels_zbtx',this.qs.stringify({list:temp}))
        .then((res)=>{
          console.log(res)
        })
    }
  },
  data () {
    return {
      headerUse: [
        {
          label: '指标名称',
          key: 'itemtype'
        },
        {
          label: "测评序号",
          key: 'cpid'
        },
        {
          label: '身份列表',
          key: 'rysfs'
        },  {
          label: '指标个数',
          key: 'col_num'
        }, {
          label: '参评群体数',
          key: 'cpfv_num'
        }
      ],
      tableData: []

    }
  }
}
</script>>
<style scoped>
@import '../../../../css/headermain2.css';

.el-main {
  padding: 0;
}
</style>