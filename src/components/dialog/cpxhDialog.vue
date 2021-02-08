<template>
    <div>
        <el-dialog
            title="提示"
            v-if="form!=undefined"
            :visible.sync="dialogVisible"
            :fullscreen="true"
            :before-close="handleClose">
            <div>
              <form>
                测评序号<input type="text"/>
                测评名称<input/>
                开始时间<input/>
                开始日期<input/>
                结束时间<input/>
                结束日期<input/>
              </form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props : {
        headerUse: Array,
        form: Object
    },
    data() {
      return {
        dialogVisible: true
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>
<style scoped>

</style>