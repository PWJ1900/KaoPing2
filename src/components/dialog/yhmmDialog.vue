<template>
    <div>
        <el-dialog
            title="用户密码"
            :modal='false'
            v-if="form!=undefined"
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
            <div style="width:100%">
              <el-card>
              <el-row>
                <el-col :span="3">姓名或编号:<input/></el-col>
                <el-col :span="3" style="margin-left:100px">单位：
                  <el-select>
                    <el-option label="1" value="1"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="3" style="margin-left:100px">部门：
                  <el-select>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="2" style="margin-left:50px">
                  <el-button size="small">查询</el-button>
                </el-col>
                <el-col :span="2" style="margin-left:50px">
                  <el-button size="small">全部查询</el-button>
                </el-col>
              </el-row>
              </el-card>
              <el-row>
                <el-table border="true">
                  <el-table-column type="selection"></el-table-column>
                  <el-table-column label="代码"></el-table-column>
                  <el-table-column label="姓名"></el-table-column>
                  <el-table-column label="身份"></el-table-column>
                  <el-table-column label="性别"></el-table-column>
                  <el-table-column label="职务"></el-table-column>
                  <el-table-column label="职级"></el-table-column>
                  <el-table-column label="出生年月"></el-table-column>
                  <el-table-column label="单位"></el-table-column>
                  <el-table-column label="部门"></el-table-column>
                </el-table>
              </el-row>
            </div>
       
        </el-dialog>
    </div> 
</template>
<script>
import index from '../../pages/Home/index.vue';
export default {
  components: { index },
    props : {
        headerUse: Array,
        form: Object
    },
    data() {
      return {
        dialogVisible: true,
        cpxh : '',
        cepingxuhao : ['测试','测试'],
        dw : '',
        danwei : ['测试','测试'],
        kplx : '',
        kkaopingleixing : ['测试','测试'],
        zutiaojian : '',
        cpqt : '',
        canpingqunti : ['测试','测试'],
        yonghumingjiarubainma : '',
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
        xuanzhongdeganbu : []
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
