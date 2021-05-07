<template>
    <div>
        <el-dialog
            title="用户密码"
            :modal='false'
            :close-on-click-modal='false'
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            :center="true"
            style="margin-top:6%;width:2000px;margin-left:5%">
           
              <!--表格  -->
              <div>
              <table border="2" style="width:800px">
                <tr>
                  <td>测评序号：</td>
                  <td colspan="3">
                    <el-select v-model="cpxh">
                      <el-option v-for="(item,i) in cepingxuhao" :key="i" label="item" value="i"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>单位：</td>
                  <td>
                    <el-select v-model="dw">
                      <el-option v-for="(item,i) in danwei" :key="i" label="item" value="i"></el-option>
                    </el-select>
                  </td>
                  <td>考评类型：</td>
                  <td>
                    <el-select v-model="kplx">
                      <el-option v-for="(item,i) in kaopingleixing" :key="i" label="item" value="i"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>组条件：</td>
                  <td>
                    <el-input v-model="zutiaojian"></el-input> <el-button type="small">查询</el-button>
                  </td>
                  <td>参评群体：</td>
                  <td>
                    <el-select v-model="cpqt">
                      <el-option v-for="(item,i) in canpingqunti" :key="i" label="item" value="i"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>用户名加入编码：</td>
                  <td>
                    <el-input v-model="yonghumingjiarubianma"></el-input>
                  </td>
                  <td>测评人数量：</td>
                  <td>
                    <el-input v-model="cepingrenshuliang"></el-input>
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
                        <el-transfer v-model="xuanzhongdeganbu" :data="daixuanganbu"></el-transfer>
                      </template>
                    </div>
                  </td>
                </tr>
              </table>
              </div>
              <!--底部按钮  -->
            <span slot="footer" class="dialog-footer" style="background-color:white">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confirmit">确 定</el-button>
            </span>
            <br><br><br>
            <!-- 表格 -->
            <el-card style="width:100%">
              <div style="width:100%">
                <el-row>
                  <el-col :span="20">请输入查询条件：<el-input v-model="searchData" style="width:300px"></el-input></el-col>
                  <el-col :span="2" style="margin-left:50px;margin-top:10px">
                    <el-button size="small" @click="searchInfo(searchData)">查询</el-button>
                  </el-col>
                </el-row>
              </div>
              <div>
                <el-table border :data="tableDataUse"  stripe
                  :row-style="{height: '0'}"
                  :cell-style="{padding: '1px'}"
                  style="width: 100%">
                  <el-table-column type="selection"></el-table-column>
                  <el-table-column label="代码" prop="daima"></el-table-column>
                  <el-table-column label="姓名" prop="xingming"></el-table-column>
                  <el-table-column label="身份" prop="shenfen"></el-table-column>
                  <el-table-column label="性别" prop="xingbie"></el-table-column>
                  <el-table-column label="职务" prop="zhiwu"></el-table-column>
                  <el-table-column label="职级" prop="zhiji"></el-table-column>
                  <el-table-column label="出生年月" prop="chushengnianyue"></el-table-column>
                  <el-table-column label="单位" prop="danwei"></el-table-column>
                  <el-table-column label="部门" prop="bumen"></el-table-column>
                </el-table>
              </div>
            </el-card>
       
        </el-dialog>
    </div> 
</template>
<script>
import index from '../../pages/Home/index.vue';
export default {
  created () {
    this.tableDataUse = this.tableData
  },
  components: { index },
  // props : {
  //     headerUse: Array,
  //     form: Object
  // },
  data() {
    return {
      dialogVisible: true,
      cpxh : '',
      cepingxuhao : ['测试','测试'],
      dw : '',
      danwei : ['测试','测试'],
      kplx : '',
      kaopingleixing : ['测试','测试'],
      zutiaojian : '',
      cpqt : '',
      canpingqunti : ['测试','测试'],
      yonghumingjiarubianma : '',
      cepingrenshuliang : '',
      daixuanganbu : [
        {
          key : 0,
          label : '测试0'
        },
        {
          key : 1,
          label : '测试1'
        },
        {
          key : 2,
          label : '测试2'
        }
      ],
      xuanzhongdeganbu : [],
      // 第二部分的表格
      tableData : [
        {
          daima : '44',
          xingming : '44',
          shenfen : '5',
          xingbie : '5',
          zhiwu : '5',
          zhiji : '5',
          chushengnianyue : '5',
          danwei : '5',
          bumen : '5'
        },
        {
          daima : '44',
          xingming : '44',
          shenfen : '5',
          xingbie : '5',
          zhiwu : '5',
          zhiji : '5',
          chushengnianyue : '5',
          danwei : '5',
          bumen : '5'
        }
      ],
      tableDataUse : [],
      searchData : '',// 底部表格的筛选
    };
  },
  watch: {
    form: {//子组建向其第一次传值的判断
      handler (newName, oldName) {
        let copy = JSON.parse(JSON.stringify(newName))//深复制避免获取同一个地址直接绑定到表上
        this.formUse = copy
        // ...
      },
      immediate: true
    }
  },
  methods: {
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
            (data[keyUse[2]] + "")
              .toLowerCase()
              .includes(searchData.toLowerCase())
        );
      } else {
        this.tableDataUse = this.tableData
      }
    },
    cancel () {
      this.dialogVisible = false
      this.$emit("funcYhmm", this.dialogVisible)


    },
    confirmit () {
      this.dialogVisible = false
      tablePostUpdate(this, "xgbmxx", this.formUse)
      location.reload();
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
