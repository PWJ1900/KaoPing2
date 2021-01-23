
<template>
  <el-row>

    <el-button @click="addUse">新增</el-button>
    <el-dialog title="提示"
               :modal='false'
               width="70%"
               v-if="showDialog"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose">
      <!--  判断undefined就不显示    v-if="form!=undefined"-->

      <el-form ref="form"
               :model="form"
               label-width="80px">
        <el-form-item v-for="item in headerUse"
                      :label="item.label"
                      :key="item.key">
          <el-input v-model="form[item.key]"
                    style="width:30%"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>

</template>

<script>
export default {
  props: {
    headerUse: Array,
    form: Object

  },
  data () {
    return {
      dialogVisible: false,
      showDialog: false
    };
  },
  methods: {
    addUse () {
      this.dialogVisible = true
      this.showDialog = true

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>