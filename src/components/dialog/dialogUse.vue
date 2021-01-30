
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

      <el-form ref="form"
               :model="form"
               label-width="100px">
        <el-form-item v-for="item in headerUse"
                      :label="item.label"
                      :key="item.key">
          <el-input v-model="form[item.key]"
                    style="width:30%"></el-input>
        </el-form-item>

      </el-form>
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
  data () {
    return {
      dialogVisible: true
    };
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("func", this.dialogVisible)


    },
    confirmit () {
      this.dialogVisible = false
      this.$emit("func", this.dialogVisible)
      //这里面写后端的edit，delete，create接口

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("func", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>