<template>
    <div>
        <el-dialog
            title="用户密码"
            :modal='false'
            :close-on-click-modal='false'
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            :center="true"
            style="margin-top:6%;width:2000px;margin-left:95px">
           
              <!--表格  -->
              <div>
              <table border="2" style="width:800px;border-collapse:collapse;text-align:center ">
                <tr>
                  <td>测评序号：</td>
                  <td>
                    <el-select v-model="cpxh">
                      <el-option v-for="(item,i) in cpxhList" :key="i" :label="item.memo" :value="item.cpid"></el-option>
                    </el-select>
                  </td>
                  <td>测评人数量：</td>
                  <td>
                    <input  style="width:100px!important;height:25px!important;" v-model="cprsl"/>
                  </td>
                </tr>
                <tr>
                  <td>单位：</td>
                  <td>
                    <el-select v-model="dw">
                      <el-option v-for="(item,i) in dwList" :key="i" :label="item.dwmc" :value="item.dwdm+','+item.dwmc"></el-option>
                    </el-select>
                  </td>
                  <td>考评类型：</td>
                  <td>
                    <el-select v-model="kplx">
                      <el-option v-for="(item,i) in kplxList" :key="i" :label="item" :value="item"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>组条件：</td>
                  <td>
                    <input style="width:100px!important;height:25px!important;"  v-model="search_fz"/> <el-button type="small">查询</el-button>
                  </td>
                  <td>参评群体：</td>
                  <td>
                    <el-select v-model="cpqt">
                      <el-option v-for="(item,i) in cpqtList" :key="i" :label="item" :value="i+1"></el-option>
                    </el-select>
                  </td>
                </tr>
           
                <tr>
                  <td>选择干部组：</td>
                  <td>待选干部：</td>
                  <td></td>
                  <td>选中的干部：</td>
                </tr>
                <tr>
                  <td colspan="4">
                    <div>
                      <template>
                        <el-transfer  
                          :titles="['待选干部','选中的干部']" 
                          v-model="xzgbList" :data="dxgbList"
                          style="text-align: left; display: inline-block">
                        </el-transfer>
                      </template>
                    </div>
                  </td>
                </tr>
              </table>
              </div>
              <!--底部按钮  -->
            <span slot="footer" class="dialog-footer" style="background-color:white">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confirmi">确 定</el-button>
            </span>
            <br><br><br>
            <!-- 表格 -->
            <el-card style="width:100%">
              <div style="width:100%">
                <el-row>
                  <el-col :span="10">请输入查询条件：<el-input v-model="searchData2" style="width:300px;height:10px"></el-input></el-col>
                  <el-col :span="2" style="margin-left:50px;margin-top:10px">
                    <el-button size="small" @click="searchInfo">查询</el-button>
                  </el-col>
                  <el-col :offset="6" :span="4"  style="margin-left:50px;margin-top:10px"><el-button size="small" @click="addList">添加所选干部</el-button> </el-col>
                </el-row>
              </div>
              <div>
                <el-table border :data="tableDataUse2.slice((currentPage-1)*pagesize,currentPage*pagesize)"  stripe
                  :row-style="{height: '0'}"
                  :cell-style="{padding: '1px'}"
                  style="width: 100%"
                  @selection-change="selectionChange">
                  <el-table-column type="selection"></el-table-column>
                  <el-table-column label="代码" prop="cpdm"></el-table-column>
                  <el-table-column label="姓名" prop="xm"></el-table-column>
                  <el-table-column label="身份" prop="rysf"></el-table-column>
                  <el-table-column label="性别" prop="xb"></el-table-column>
                  <el-table-column label="职务" prop="zw"></el-table-column>
                  <el-table-column label="职级" prop="zj"></el-table-column>
                  <el-table-column label="出生年月" prop="csrq"></el-table-column>
                  <el-table-column label="单位" prop="dw" width="150px"></el-table-column>
                  <el-table-column label="部门" prop="bm" width="150px"></el-table-column>
                </el-table>
              </div>
            </el-card>
            <!--底部设计：页数组件  -->
            <div class="block">
              <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 50, 200]"
                     :page-size="5"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="tableData2.length">
              </el-pagination>
            </div>
        </el-dialog>
    </div> 
</template>
<script>
import index from '../../pages/Home/index.vue';
export default {
  created () {
    this.tableDataUse2 = this.tableData2
  },
  components: { index },
  props : {
      cpxhList:Array,
      dwList:Array,
      kplxList:Array,
      
      tableData2:Array,
  },
  data() {
    return {
      cpxh:'', //所选测评序号
      dw:'', //所选单位 
      kplx:'',//所选考评类型
      cpqt : '',//所选参评群体
      search_fz:'',//搜框框-组条件
      cprsl:'',//测评人数量
      dxgbList:[],//待选干部
      xzgbList:[],//选中的干部
      cpqtList:[],
      dialogVisible: true,
      // 人员表格
      tableDataUse2 : [],
      searchData2 : '',// 底部表格的筛选
      //分页组件
      currentPage:1,
      pagesize:5,
      selectionList:[], //批量选择的列表

    };
  },
  watch: {
    cpqt:{
      handler(newval,oldval){
        console.log(newval)
      },immediate:true
    },
    kplx:{
      handler(newval,oldval){
        if(this.kplx=='干部考评'){
          this.cpqtList=["范围a","范围b","范围c","范围d","范围e","范围f","范围g","范围h","范围i","范围j"]
          this.cpqt=this.cpqtList[0]
        }
        if(this.kplx=='一报告两评议'){
          this.cpqtList=['A票','B票']
          this.cpqt=this.cpqtList[0]
        }
      },
      immediate:true
    }
  },
  methods: {
    addList(){ 
      var temp =true
      if(this.selectionList.length==0){
        alert("您没有选择任何的干部")
      }else{
        this.selectionList.forEach(element=>{
          temp=true
          this.dxgbList.forEach(element2=>{
            if(element.cpdm==element2.key){
              temp=false
            }
          })
          if(temp==true){
            this.dxgbList.push({
              key:element.cpdm,
              label:element.xm
            })
          }
        })
      }
    },
    selectionChange(selection){
      this.selectionList = selection
    },
    handleCurrentChange(page){
      this.currentPage = page
    },
    handleSizeChange(pagesize){
      this.pagesize = pagesize
    },
    searchInfo () {
      var searchData2 = this.searchData2
      let keyUse = []
      //把tableData的一组key取出来，从而做下面对应属性的过滤
      for (let i in this.tableData2[0]) {
        keyUse.push(i)
      }
      this.tableDataUse2 = this.tableData2
      if (searchData2 != '') {
        this.tableDataUse2 = this.tableDataUse2.filter(//便编写的查询过滤器考虑把次放出去因为每个的页面需要的过滤属性不一样
          (data) =>
            !searchData2 ||
            (data[keyUse[0]] + "")
              .toLowerCase()
              .includes(searchData2.toLowerCase()) ||
            (data[keyUse[1]] + "")
              .toLowerCase()
              .includes(searchData2.toLowerCase()) ||
            (data[keyUse[2]] + "")
              .toLowerCase()
              .includes(searchData2.toLowerCase())
        );
      } else {
        this.tableDataUse2 = this.tableData2
      }
    },
    cancel () {
      this.dialogVisible = false
      this.$emit("funcYhmm", this.dialogVisible)


    },
    confirmi () {
      if(this.cpqt=='范围a'||this.cpqt=='A票'){
        this.cpqt=0
      }
      var temp = 0
      var cpfv=''
      if(this.kplx=='干部考评'){
          temp=Number(this.cpqt)+1
        }
        if(this.kplx=='一报告两评议'){
          temp=(Number(this.cpqt)+1)*10
        }
      switch(temp){
        case 1:cpfv='a';break;
        case 2:cpfv='b';break;
        case 3:cpfv='c';break;
        case 4:cpfv='d';break;
        case 5:cpfv='e';break;
        case 6:cpfv='f';break;
        case 7:cpfv='g';break;
        case 8:cpfv='h';break;
        case 9:cpfv='i';break;
        case 10:cpfv='j';break;
        default:cpfv='o'
      }
      var gbfzdm = JSON.stringify(this.xzgbList)
      
      gbfzdm=gbfzdm.substring(1,gbfzdm.length-1)
      console.log(gbfzdm)
      this.dialogVisible = false
      this.$axios.post("add_yhmm",this.qs.stringify({
        cpid:this.cpxh,
        dwdm:this.dw.split(',')[0],
        dwmc:this.dw.split(',')[1],
        gbfzdm:gbfzdm,gbfzmc:'',
        cprsl:this.cprsl,
        cpqt:temp,
        cpfv:cpfv
      })).then(
        res=>{
          console.log(res)
        }
      )
      this.$emit("funcYhmm", this.dialogVisible)
      //这里面写后端的edit，delete，create接口
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcYhmm", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
}
</script>
<style scoped>
tr,td {
 height: 50px;
 line-height: 50px;
}
</style>
