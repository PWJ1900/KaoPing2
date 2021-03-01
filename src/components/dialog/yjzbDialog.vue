<template>
  <el-row>
    <el-dialog title="一级指标信息更改"
               :modal='true'
               width="70%"
               v-if="form!=undefined"
               :modal-append-to-body="false"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :center="true">
      <!--  判断undefined就不显示    v-if="form!=undefined"
       :fullscreen="true"-->

      <table cellspacing="0">
        <tbody>
          <tr>
            <!-- <td></td> -->
            <td>指标名称定义:</td>
            <td>
              <el-input type="text"
                        v-model="this.form.b"></el-input>
            </td>
          </tr>
          <tr>
            <!-- <td :rowspan="value1+1">指标内容定义:</td> -->
            <td>指标个数设置:</td>
            <td>
              <el-select v-model="value1"
                         placeholder="请选择指标"
                         id="el-selectUse">
                <el-option v-for="(item,index) in 11"
                           :key="index"
                           :label="index"
                           :value="index">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr v-for="i in this.value1"
              :key="i">
            <td>指标{{i}}:</td>
            <td>
              <el-input type="text"
                        v-model="valueUse[i]"></el-input>
            </td>
          </tr>
          <tr>
            <td colspan="3"
                id="buttonUse">
              <el-button type="info"
                         size="small">复制</el-button>
              <el-button type="success"
                         size="small">保存</el-button>
              <el-button type="warning"
                         size="small">返回</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit">确 定</el-button>
      </span> -->
    </el-dialog>
  </el-row>

</template>

<script>
export default {
  props: {
    headerUse: Array,
    form: Object,
    // showDialog: Boolean,


  },
  // created () {
  //   console.log(this.form)
  // },
  data () {
    return {
      dialogVisible: true,
      value1: this.form.d,//把部门信息的最后一个属性弄进来
      // options: [{
      //   value: '选项1',
      //   label: '请选择单位'
      // }, {
      //   value: '选项2',
      //   label: '测试单位'
      // }],
      valueUse: []
    };
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcYjzb", this.dialogVisible)


    },
    confirmit () {
      this.dialogVisible = false
      this.$emit("funcYjzb", this.dialogVisible)
      //这里面写后端的edit，delete，create接口

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcYjzb", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>
<style scoped>
table,
table td {
  border: 0.5px solid rgba(124, 141, 141, 0.925);
}
table td {
  padding: 10px 30px;
}
#buttonUse {
  text-align: center;
}
</style>

<style scoped>
@import '../../css/tableuse.css';
</style>
