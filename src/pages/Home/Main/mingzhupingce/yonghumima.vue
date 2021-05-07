<template>

  <div>
    <el-container>
      <el-header>
        <!-- 用户密码 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 顶部 -->
        <el-card style="margin:1%">
          <!-- 顶部设计 -->
          <el-row>
          <!-- 新增、批量删除，由showAddorDelete控制 -->
            <el-col :span="5">
              <el-button type="success"
                     size="small"
                     @click="addUse">新增</el-button>
              <el-button type="danger"
                     size="small">批量删除</el-button>
            </el-col>
            <!-- 第一种查询，通过搜索框筛选 -->
            <el-col :span="8">请输入查询条件：<el-input v-model="searchData" style="width:300px"></el-input></el-col>
            <el-col :span="2" style="margin-left:50px;margin-top:10px">
              <el-button size="small" @click="searchInfo(searchData)">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
        <!-- 表格 -->
          <div style="height:68vh">
            <el-card style="margin:1%;">
            <!-- <el-scrollbar> -->
              <el-table :data="this.tableDataUse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border  style="font-size: 12px"
                  :row-style="{height: '0'}" :cell-style="{padding: '1px'}"
                  stripe>
                <el-table-column type="selection"></el-table-column>
                <el-table-column label="用户名"  prop="UserName">
                  <template slot-scope="scope"> 
                     <el-input v-if="scope.row.isEdit"  v-model="scope.row.UserName" placeholder="请输入内容"></el-input> 
                     <span v-else>{{scope.row.UserName}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="密码" prop="Password">
                  <template slot-scope="scope">
                     <el-input v-if="scope.row.isEdit"  v-model="scope.row.UserName" placeholder="请输入内容"></el-input> 
                     <span v-else>{{scope.row.Password}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="禁用">
                  <template slot-scope="scope">
                     <el-checkbox :disabled="!scope.row.isEdit" size="small" v-model="scope.row.jy"></el-checkbox> 
                     <!-- <span>{{scope.row.jy?'是':'否'}}</span> -->
                  </template>
                </el-table-column>
                <el-table-column label="考评序号" prop="cpid"></el-table-column>
                <el-table-column label="群体类型" prop="cpfv"></el-table-column>
                <el-table-column label="分组名" prop="fzm"></el-table-column>
                <el-table-column label="分组码" prop="fzma"></el-table-column>
                <el-table-column label="操作框" fixed="right" width="300">
                  <template slot-scope="scope">
                    
                      <span v-if="scope.row.isEdit">
                        <el-button size="mini" type="info" @click="editYes(scope)">确定</el-button>
                        <el-button  size="mini" type="info" @click="editNo(scope)">复原</el-button>
                      </span>
                      <el-button type="info" icon="el-icon-edit" size="small" @click="rowClick(scope)" v-else > 编辑</el-button>

                    <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
                  </template>
                </el-table-column>
        </el-table>
        </el-card>
      </div>
      <!--底部设计：页数组件  -->
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
      <!-- 新增的dialog -->
      <yhmmDialog v-if="this.addDialog" @funcYhmm="getifshow" />
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
  },
  created () {
    
  },
  components: {
    yhmmDialog
  },
  data () {
    return {
      tableData: [],//后台表格数据
      tableDataUse:[],//表格用数据
      currentPage: 1,//当前页
      pagesize: 5,//每页大小
      searchData:'',//搜索框内容
      addDialog:false,//新建dialog
      // editDialog:false,//编辑的dialog（如果采用表内直接修改，则取消此）
    }
  },
  watch:{
    tableData:{
      handler(newval,oldval){
        console.log(this.tableData)

        let copy = JSON.parse(JSON.stringify(this.tableData))
        this.tableDataUse=copy
    //☆☆☆  2个数组的内存地址是相同的，修改时会同时修改，所以需要开辟两个不同内容
      },
      immediate:true
    }
  },
  methods : {
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

    },
    editNo(scope){
      //将该行的tableDataUse，用tableData替换  ..scope.$index为当前行值（0开始）
      console.log("复原前"+this.tableDataUse[scope.$index].mm)
        this.tableDataUse[scope.$index].mm=this.tableData[scope.$index].mm
        this.tableDataUse[scope.$index].yhm=this.tableData[scope.$index].yhm
        this.tableDataUse[scope.$index].jy=this.tableData[scope.$index].jy
      console.log("复原后"+this.tableDataUse[scope.$index].mm)
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