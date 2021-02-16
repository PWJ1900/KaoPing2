<template>

  <div>
    <el-container>
      <el-header>
        <!-- 系统初始化 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 这是main -->
        <el-col :span="5">
          &nbsp;
        </el-col>
        <el-col :span="14">
          <el-card style="margin:1%;height:70vh;margin-left:2svw;width:50vw"
                   ref="elcards">
            <div slot="header"
                 style="text-align:center">

              <el-button size="mini"
                         type="primary">系统初始化</el-button>
            </div>
            <table border="2"
                   align="center">
              <tbody>
                <tr>
                  <td>类型:</td>
                  <td>表名:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>基础数据:</td>
                  <td>
                    <el-checkbox-group v-model="checkListUse">
                      <el-checkbox label="参评指标"></el-checkbox><br>
                      <el-checkbox label="参评群体"></el-checkbox><br>
                      <el-checkbox label="单位部门"></el-checkbox><br>
                      <el-checkbox label="考评定义"></el-checkbox><br>
                      <el-checkbox label="人员等级"></el-checkbox><br>
                      <el-checkbox label="测评等级"></el-checkbox>
                    </el-checkbox-group>
                  </td>
                  <td>选择表示将删除此信息!</td>
                </tr>
              </tbody>
            </table>

          </el-card>
        </el-col>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      checkListUse: []
    }
  }

}
</script>
<style scoped>
@import '../../../../css/headermain2.css';
</style>
<style>
.el-main {
  padding: 0;
}
</style>