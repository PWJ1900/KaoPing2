<template>
  <div>

    <el-container>
      <el-header>
        <!-- 对象分组 -->
        <headerUse />
      </el-header>
      <el-main>
        <div v-if="showPage">
          <el-card style="margin:1%;">
            <div>
              <el-button @click="addUse"
                         size="small"
                         type="success">新增</el-button>
              <el-button type="danger"
                         size="small"
                         @click="groupDelete">批量删除</el-button>

              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style="font-size:13px"> 请输入分组名称和代号：</span>
              <el-input type="text"
                        style="width:25%"
                        id="useSearch2"
                        v-model="fzOrdh">
                <el-button slot="append"
                           icon="el-icon-search"
                           size="small"
                           style="width:5vw;padding:0;font-size:12px;  background: #23C6C8;color:white"
                           @click="search">查询</el-button>
              </el-input>
            </div>
          </el-card>
          <div style="height:68vh">
            <el-card style="margin:1%;">
              <el-table :data="this.tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        :max-height="useTableHeight"
                        :row-style="{height: '0'}"
                        :cell-style="{padding: '1px'}"
                        border
                        key=1
                        @selection-change="selectionLineChangeHandle"
                        style="width: 100%;
                        ">
                <el-table-column type="selection">

                </el-table-column>
                <el-table-column prop="gbfzdm"
                                 label="代码"
                                 width="180">
                </el-table-column>
                <el-table-column prop="gbfzmc"
                                 label="名称"
                                 width="180">
                </el-table-column>
                <el-table-column prop="cpxms"
                                 label="干部姓名"
                                 width="180">
                </el-table-column>
                <el-table-column prop="cpdms_sql"
                                 label="干部代码">
                </el-table-column>
                <el-table-column label="操作"
                                 fixed="right"
                                 width="300">
                  <template slot-scope="scope">
                    <el-button type="info"
                               icon="el-icon-edit"
                               size="small"
                               @click="editUse(scope.row)">编辑</el-button>
                    <el-popconfirm title="您确定要将此行信息删除吗"
                                   @confirm="deleteUse(scope.row)">
                      <el-button type="danger"
                                 slot="reference"
                                 size="small"
                                 icon="el-icon-delete">删除</el-button>
                    </el-popconfirm>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </div>
          <div class="block">
            <el-pagination @size-change="handleSizeChange"
                           key="11"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-sizes="[5, 10, 50, 200]"
                           :page-size="pagesize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="tableData.length">
            </el-pagination>
          </div>
        </div>



        <div v-if="!showPage">
          <el-row>
            <el-col :span="8">
              <el-card style="width:28vw;margin:1%;"
                       shadow="hover">
                修改被测对象组
                <table cellspacing="0">
                  <tbody>
                    <tr>
                      <td>选中的干部:</td>
                      <td>分组操作:</td>
                    </tr>
                    <tr>
                      <td rowspan="7">
                        <!-- <div v-for="(i,index) in addPeopleData"
                             :key="index">
                          <el-tag>{{i.xm}}</el-tag>
                        </div> -->
                        <el-checkbox-group v-model="checkListUse"
                                           @change="useTry">
                          <el-checkbox v-for="(i,index) in addPeopleData"
                                       :label="i"
                                       :key="index"></el-checkbox>
                          <!-- 此处获取checkbox的框来add过去 -->
                        </el-checkbox-group>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <el-button size="mini"
                                   class="buttonUse"
                                   type="danger"
                                   @click="deleteCheck"
                                   plain>删除当前干部</el-button>
                        <el-button size="mini"
                                   type="info"
                                   style="margin-left:0"
                                   class="buttonUse"
                                   plain>根据姓名更改代码</el-button>
                      </td>

                    </tr>
                    <tr>
                      <td>分组名称:</td>

                    </tr>
                    <tr>
                      <td>
                        <el-input type="text"></el-input>
                      </td>

                    </tr>
                    <tr>
                      <td>分组代码:</td>

                    </tr>
                    <tr>
                      <td>
                        <el-input type="text"></el-input>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <el-button size="mini"
                                   type="primary"
                                   plain>修改</el-button>
                        <el-button size="mini"
                                   type="success"
                                   plain>复制</el-button>
                        <el-button size="mini"
                                   @click="returnTo"
                                   plain>返回</el-button>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </el-card>
            </el-col>
            <el-col :span="14">

              <el-card style="margin:1%;width:55vw"
                       shadow="hover">
                <el-button size="mini"
                           type="success"
                           @click="addPeople">将选中的干部加入组</el-button>
                姓名或编号：<el-input type="text"
                          style="width:8vw"
                          v-model="xmOrbh"></el-input>
                单位：<el-select v-model="formUse.dw"
                           style="width:8vw"
                           placeholder="请选择单位"
                           id="el-selectUse">
                  <el-option v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
                部门：<el-select v-model="formUse.bm"
                           style="width:8vw"
                           placeholder="请选择部门"
                           id="el-selectUse">
                  <el-option v-for="item in options2"
                             :key="item.value"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
                <el-button size="mini">查询</el-button>
                <el-button size="mini">全部</el-button>
                <el-button size="mini"
                           style="width:5vw;padding:0;font-size:12px;  background: #23C6C8;">组合查询</el-button>

                <el-table :data="
                  this.tableData2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                          :max-height="useTableHeight"
                          key=2
                          :row-style="{height: '0'}"
                          :cell-style="{padding: '1px'}"
                          @selection-change="selectionLineChangeHandle"
                          style="width:52vw"
                          border
                          :default-sort="{prop: 'date', order: 'descending'}">
                  <el-table-column type="selection"></el-table-column>
                  <el-table-column prop="dm"
                                   label="代码"
                                   :sortable="true"
                                   width="80">
                  </el-table-column>
                  <el-table-column prop="xm"
                                   label="姓名"
                                   sortable
                                   width="80">
                  </el-table-column>
                  <el-table-column prop="sf"
                                   label="身份"
                                   width="80"
                                   :sortable="true">
                    <!-- :formatter="formatter" -->
                  </el-table-column>
                  <el-table-column prop="xb"
                                   label="性别"
                                   :sortable="true"
                                   width="80">
                  </el-table-column>
                  <el-table-column prop="zw"
                                   label="职位"
                                   :sortable="true"
                                   width="80">
                  </el-table-column>
                  <el-table-column prop="zj"
                                   label="职级"
                                   :sortable="true"
                                   width="80">
                  </el-table-column>
                  <el-table-column prop="csny"
                                   label="出生年月"
                                   :sortable="true"
                                   width="120">
                  </el-table-column>
                  <el-table-column prop="dw"
                                   label="单位"
                                   :sortable="true"
                                   width="80">
                  </el-table-column>
                  <el-table-column prop="bm"
                                   label="部门"
                                   :sortable="true"
                                   width="80">
                  </el-table-column>
                </el-table>
                <!-- </el-card> -->

                <div class="block">
                  <el-pagination @size-change="handleSizeChange"
                                 key="12"
                                 @current-change="handleCurrentChange"
                                 :current-page="currentPage"
                                 :page-sizes="[5, 10, 50, 200]"
                                 :page-size="pagesize"
                                 layout="total, sizes, prev, pager, next, jumper"
                                 :total="tableData2.length">
                  </el-pagination>

                </div>

              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>

  </div>

</template>
<script>
import index from '../../index.vue'
import { listenWindow } from '@/utils/listenWindow'
import { tablePostGet } from '@/api/tablePostGet'

export default {
  components: { index },
  data () {
    return {
      // peopleNumber: []
      checkListUse: [],

      fzOrdh: '',
      showPage: true,
      currentPage: 1,
      pagesize: 5,
      xmOrbh: '',
      addPeopleData: [],
      addPeopleDataReturn: [],
      deleteCheckData: [],
      formUse: {
        dw: '',
        bm: ''
      },
      options2: [{
        value: "选项1",
        label: "全部"
      }],
      options: [{
        value: "选项1",
        label: '全部'
      }, {
        value: "选项2",
        label: '测试单位'
      },],
      tableData: [
      ],
      useJJJ: '',

    }
  },
  computed: {
    useTableHeight () {
      return (window.innerHeight * 3 / 5)
    }

  },
  mounted () {
    tablePostGet(this, "dxfz")//根据postman的Api获取数据来测试
  },
  methods: {
    // AddUser () {
    //   this.peopleNumber.push("")

    // }
    search () {
      //对this.fzOrdh进行过滤器操作
    },
    async handleSizeChange (val) {
      // console.log(`每页 ${val} 条`);
      this.pagesize = val
      // console.log(this.sizeChange)
    },
    async handleCurrentChange (val) {
      this.currentPage = val


    },
    async selectionLineChangeHandle (val) {
      console.log(val)//把此值交给后groupDelete处理然后交给后端分配处理，交给后端接口
      this.addPeopleDataReturn = val

    },
    groupDelete () {

    },
    async addPeople () {
      let def = true
      this.addPeopleDataReturn.forEach((element, index) => {
        this.addPeopleData.forEach(element2 => {
          console.log(element2)
          if (element.xm == element2) {
            def = false
          }

        });
        if (def == true) {
          this.addPeopleData.push(element.xm)

        }
        def = true


      });




    },
    async deleteCheck () {
      let re = []
      // for (let i in this.addPeopleData) {
      //   for (let j in this.deleteCheckData) {
      //     if (this.addPeopleData[i] == this.deleteCheckData[j]) {
      //       re.push(i)
      //       // this.addPeopleData.splice(i, 1)
      //     }
      //   }
      // }
      // console.log(re)
      for (let j in this.deleteCheckData) {
        this.addPeopleData = this.addPeopleData.filter((item) => item !== this.deleteCheckData[j])
      }
    },
    useTry (data) {
      console.log(data)
      // 获取表格中复选框值
      this.deleteCheckData = data


    },
    async addUse () {
      this.showPage = false
      this.pagesize = 15
      this.currentPage = 1


    },
    async returnTo () {
      this.showPage = true
      this.pagesize = 5
      this.currentPage = 1

    },
    async editUse () {
      this.showPage = true
      // this.pagesize = 5
      this.currentPage = 1

    },
    deleteUse(data){
      this.$axios.post("del_dxfz",this.qs.stringify({id:data.id}) ).then(
        (res)=>{
          this.$message({
          type: 'success',
          message: '删除成功!'
        });
        }
      )
      
    },
    async formatter (row, column) {
      return row.address//格式化指定列的值
    }
  }
}
</script>
<style scoped>
@import '../../../../css/headermain2.css';
</style>
<style scoped>
.buttonUse {
  width: 110px;
  padding: 2px;
}
</style>
<style>
.el-main {
  padding: 0;
}
</style>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
#useSearch2 {
  height: 4vh;
}
</style>
<style scoped>
.block {
  text-align: center;
}
/* .block {
  position: absolute;
  top: 92vh;
  left: 37vw;
  text-align: center;
} */
.el-divider--horizontal {
}
table,
table td {
  border: 0.5px solid rgba(124, 141, 141, 0.925);
}
table td {
  padding: 10px 30px;
}
</style>
