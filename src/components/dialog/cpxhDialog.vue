<template>
    <el-row>
        <el-dialog  title="提示"
                    :modal='false'                
                    v-if="form!=undefined"
                    :close-on-click-modal='false'
                    :visible.sync="dialogVisible"
                    :before-close="handleClose"
                    :center="true"
                    >
            <div>
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="测评序号">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="测评名称">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="开始时间">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="开始日期">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="结束时间">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="结束日期">
                  <el-input></el-input>
                </el-form-item>
              </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confirmit">确 定</el-button>
            </span>
        </el-dialog>
    </el-row>
</template>
<script>
import { tablePostUpdate } from '@/api/tablePostUpdate'

export default {
  props : {
      headerUse: Array,
      form: Object
  },
  data() {
    return {
      dialogVisible: true,
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
      this.$emit("funcCpxh", this.dialogVisible)


      },
      confirmit () {
        this.dialogVisible = false
        tablePostUpdate(this, "xgbmxx", this.formUse)
        location.reload();
        this.$emit("funcCpxh", this.dialogVisible)
        //这里面写后端的edit，delete，create接口
      },
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.dialogVisible = false
            this.$emit("funcCpxh", this.dialogVisible)
            done();
          })
          .catch(_ => { });
      }
    }
}
</script>
<style scoped>

</style>