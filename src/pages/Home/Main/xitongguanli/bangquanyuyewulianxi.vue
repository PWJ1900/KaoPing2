<template>

  <div>
    <el-container>
      <el-header>
        <!-- 版权与业务联系 -->
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
              <span>欢迎使用综合考评系统</span>&nbsp;&nbsp;&nbsp;

            </div>
            <table border="0"
                   align="center"
                   cellspacing="3vh">
              <tr>
                <td>软件版本：领导班子和领导干部综合考评系统 2020年3.0版</td>
              </tr>
              <tr>
                <td>版权所有：江苏省委组织部、扬州大学</td>
              </tr>
              <tr>
                <td>软件设计：江苏省委组织部干部五处、扬州大学</td>
              </tr>
              <tr>
                <td>软件开发：扬州大学信息学院 李志强 YZQQLZQ@163.COM</td>
              </tr>
              <tr>
                <td>业务联系：扬州大学信息学院 李志强 QQ 289213627 </td>
              </tr>
              <tr>
                <td align="center"> 13952751283(微信) </td>
              </tr>

            </table>
          </el-card>
        </el-col>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {

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