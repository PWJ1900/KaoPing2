<template>
  <div>
    <el-dialog title="提示"
               :modal='true'
               width="70%"
               v-if="form!=undefined"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :modal-append-to-body='false'
               :center="true">
      <!--  :fullscreen="true" -->
      <div>
        <table border="2"
               width="500px">
          <tr>
            <td>测评序号：</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>单位：</td>
            <td></td>
            <td>考评类型：</td>
            <td></td>
          </tr>
          <tr>
            <td>组条件：</td>
            <td></td>
            <td>参评群体：</td>
            <td></td>
          </tr>
          <tr>
            <td>用户名加入编码：</td>
            <td></td>
            <td>测评人数量：</td>
            <td></td>
          </tr>
          <tr>
            <td>选择干部组：</td>
            <td>待选干部：</td>
            <td></td>
            <td>选中的干部：</td>
          </tr>
        </table>
        <div style="width:500px">
          <el-transfer v-model="transferList2"
                       :data="transferList1"></el-transfer>
        </div>
      </div>

      <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel"
                   size="small">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit"
                   size="small">确 定</el-button>
      </span>

      <div>
        这是一张表格：
        <el-row>
          <el-col :span="3">姓名或编号：
            <input />
          </el-col>
          <el-col :span="3">单位：
            <el-select>
              <el-option label="1"
                         value="1"></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">部门：
            <el-select>
              <el-option label="2"
                         value="2"></el-option>
            </el-select>
          </el-col>
          <el-col :span="2">
            <el-button size="small">查询</el-button>
          </el-col>
          <el-col :span="2">
            <el-button size="small">全部查询</el-button>
          </el-col>
        </el-row>
        <el-table border="true">
          <el-table-column type="selection">
          </el-table-column>
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
      </div>

    </el-dialog>
  </div>
</template>
<script>
import index from '../../pages/Home/index.vue';
export default {
  components: { index },
  props: {
    headerUse: Array,
    form: Object
  },
  data () {
    return {
      dialogVisible: true,
      transferList1: [],
      transferList2: []
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