<template>
  <el-row>
    <el-dialog title="提示"
               :modal='false'
               width="70%"
               v-if="form!=undefined"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose">
      <!--  判断undefined就不显示    v-if="form!=undefined"-->

      <table cellspacing="0">
        <tbody>
          <tr>
            <td>部门代码：</td>
            <td>
              <!-- 这里的form后期得把其字典的key改掉 -->
              <el-input type="text"
                        v-model="this.form.a"></el-input>
            </td>
            <td>部门名称：</td>
            <td>
              <el-input type="text"
                        v-model="this.form.b"></el-input>
            </td>
          </tr>
          <tr>
            <td>单位代码：</td>
            <td>
              <el-input type="text"
                        v-model="this.form.c"></el-input>
            </td>
            <td>单位名称：</td>
            <td>
              <el-select v-model="value1"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
        </tbody>
      </table>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit">确 定</el-button>
      </span>
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
      options: [{
        value: '选项1',
        label: '请选择单位'
      }, {
        value: '选项2',
        label: '测试单位'
      }],
    };
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcBmxx", this.dialogVisible)


    },
    confirmit () {
      this.dialogVisible = false
      this.$emit("funcBmxx", this.dialogVisible)
      //这里面写后端的edit，delete，create接口

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcBmxx", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>