<template>

  <div>
    <el-container>
      <el-header>
<!-- 用户密码 -->
        <headerUse />
      </el-header>
      <el-main>
<!-- 顶部菜单------开始 -->
        <el-card style="margin:1%">
          <el-row>
            <el-col :span="5">
              <el-button type="success"
                     size="small"
                     @click="addUse">新增</el-button>
              <el-button type="danger"
                     size="small" @click="grpDel">批量删除</el-button>
            </el-col>
            <el-col :span="8">请输入查询条件：<el-input v-model="searchData" style="width:300px"></el-input></el-col>
            <el-col :span="2" style="margin-left:50px;margin-top:10px">
              <el-button size="small" @click="searchInfo(searchData)">查询</el-button>
            </el-col>
          </el-row>
        </el-card>

<!-- 表格------开始 -->
          <div style="height:68vh">
            <el-card style="margin:1%;">
            <!-- <el-scrollbar> -->
              <el-table :data="this.tableDataUse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border  style="font-size: 12px"
                  :row-style="{height: '0'}" :cell-style="{padding: '1px'}"
                  stripe
                  @selection-change="selectChange">
                <el-table-column type="selection"></el-table-column>
                <el-table-column label="用户名"  prop="UserName">
                  <template slot-scope="scope"> 
                     <el-input v-if="scope.row.isEdit"  v-model="scope.row.UserName" placeholder="请输入内容"></el-input> 
                     <span v-else>{{scope.row.UserName}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="密码" prop="Password">
                  <template slot-scope="scope">
                     <el-input v-if="scope.row.isEdit"  v-model="scope.row.Password" placeholder="请输入内容"></el-input> 
                     <span v-else>{{scope.row.Password}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="禁用">
                  <template slot-scope="scope">
                     <el-checkbox :disabled="!scope.row.isEdit" size="small" v-model="scope.row.bcp"></el-checkbox> 
                     <span>{{scope.row.jy?'是':'否'}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="考评序号" prop="cpid"></el-table-column>
                <el-table-column label="群体类型" prop="cpfv"></el-table-column>
                <el-table-column label="分组名称" prop="gbfzmc"></el-table-column>
                <el-table-column label="分组代码" prop="gbfzdm"></el-table-column>
                <el-table-column label="操作框" fixed="right" width="300px">
                  <template slot-scope="scope">
                      <span v-if="scope.row.isEdit">
                        <el-button size="mini" type="info" @click="editYes(scope)">确定</el-button>
                        <el-button  size="mini" type="info" @click="editNo(scope)">复原</el-button>
                      </span>
                      <el-button type="info" icon="el-icon-edit" size="small" @click="rowClick(scope)" v-else > 编辑</el-button>

                    <el-button type="danger" size="small" icon="el-icon-delete" @click="deletea(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
        </el-table>
<!-- 表格------结束 -->
        </el-card>
      </div>
<!-- 分页组件------开始 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 50, 200]"
                     :page-size="5"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="tableData.length">
        </el-pagination>
      </div>
<!-- 分页组件------结束 -->      
      
      
<!-- 新增触发的dialog -->
      <yhmmDialog v-if="this.addDialog" @funcYhmm="getifshow" 
                  :cpxhList="cpxhList"
                  :dwList="dwList"
                  :kplxList="kplxList"
                  :tableData2="tableData2"/>
      </el-main>
    </el-container>

  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
// import useTable from '@/components/Table/useTable'
import XLSX from 'xlsx'//对excel导入操作
import yhmmDialog from '@/components/dialog/yhmmDialog'

export default {
  beforeCreate(){
    tablePostGet(this,"yhmm")//根据postman的Api获取数据来测试
    //加载列表数据
    this.$axios.post('get_dw').then(res=>{
      this.dwList=res.data
    })
    this.$axios.post('get_cpxh').then(res=>{
      this.cpxhList=res.data
    })
    this.$axios.post('gbxx').then(res=>{
      this.tableData2=res.data
    })
  },
  
  created () {
    
  },
  components: {
    yhmmDialog
  },
  data () {
    return {
      tableData: [],//表格数据
      tableDataUse:[],//表格暂存数据
      currentPage: 1,//分页组件的当前页码
      pagesize: 5,//分页组件的页大小
      searchData:'',//搜索框内容
      addDialog:false,//控制新建的dialog
      selectionList:[], //批量删除列表
      cpxhList:[],
      dwList:[],
      kplxList:['干部考评','一报告两评议'],
    }
  },
  watch:{
    tableData:{
      handler(newval,oldval){
        //用JSON转一下，可以避免内存地址重复
        let copy = JSON.parse(JSON.stringify(this.tableData))
        this.tableDataUse=copy
    
      },
      immediate:true
    }
  },
  methods : {
    selectChange(selection){
      this.selectionList = selection
    },
    handleSizeChange (val) {
      this.pagesize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    },
    rowClick(scope){
      console.log("修改")
      this.tableDataUse[scope.$index].isEdit=! this.tableDataUse[scope.$index].isEdit
    },
    editYes(scope){
      console.log("确定")
      //修改完成，隐藏（确定、复原），显示“编辑”
      this.tableDataUse[scope.$index].isEdit=! this.tableDataUse[scope.$index].isEdit
      //发送修改请求到后端
      console.log(scope)
      this.$axios.post('edit_yhmm',this.qs.stringify(scope.row))
        .then(res=>{
          console.log(res)
        })

    },
    editNo(scope){
      //将该行的tableDataUse，用tableData替换  ..scope.$index为当前行值（0开始）
        this.tableDataUse[scope.$index].UserName=this.tableData[scope.$index].UserName
        this.tableDataUse[scope.$index].Password=this.tableData[scope.$index].Password
        this.tableDataUse[scope.$index].bcp=this.tableData[scope.$index].bcp
    },
    searchInfo (searchData) {
      let keyUse = []
      //把tableData的一组key取出来，从而做下面对应属性的过滤
      for (let i in this.tableData[0]) {
        keyUse.push(i)
      }
      this.tableDataUse = this.tableData
      if (searchData != '') {
        this.tableDataUse = this.tableDataUse.filter(//便编写的查询过滤器考虑把次放出去因为每个的页面需要的过滤属性不一样
          (data) =>
            !searchData ||
            (data[keyUse[0]] + "")
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            (data[keyUse[1]] + "")
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            (data[keyUse[3]] + "")
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            (data[keyUse[4]] + "")
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            (data[keyUse[5]] + "")
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            (data[keyUse[6]] + "")
              .toLowerCase()
              .includes(searchData.toLowerCase())
        );
      } else {
        this.tableDataUse = this.tableData
      }
    },
    getifshow (data) {
      this.addDialog = data//得到子组建的传值来点击关闭
    },
    addUse(){
      this.addDialog=true
    },
    grpDel(){
      var list=[]
      this.selectionList.forEach(element => {
        list.push(element.id)
      })
      var temp = JSON.stringify(list)
      temp = temp.substring(1,temp.length-1)
      console.log(temp)
      this.$axios.post('dels_yhmm',this.qs.stringify({list:temp}))
        .then((res)=>{
          console.log(res)
        })
    },
    deletea(data){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
  
      this.$axios.post("del_yhmm",this.qs.stringify({id:data.id}) ).then(
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
.block {
  text-align: center;
}
#inputheight {
  height: 4vh;
}
</style>