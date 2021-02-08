<template>

  <div>
    <el-container>
      <el-header>
        <!-- 数据删除 -->
        <headerUse />
      </el-header>
      <el-main>
        <table border="2" style="margin-top:10px">
          <caption><el-button type="success" @click="groupDelete">数据成批删除</el-button></caption>
          <tr>
            <th>类型</th>
            <th>序号</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>测试数据:(含评议与作风数据)</td>
            <td>
              测评序号:
              <el-select placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </td>
            <td>
              <el-radio-group v-model="radio1">
                <el-radio label="不删除" ></el-radio>
                <el-radio label="删除原始数据" ></el-radio>
                <el-radio label="删除原始与结果数据" ></el-radio>
                <el-radio label="删除全部数据" ></el-radio>
              </el-radio-group>
            </td>
          </tr>
          <tr>
            <td >推荐数据:(含评议与作风数据)</td>
            <td >
              推荐序号:
              <el-select placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </td>
            <td>
              <el-radio-group v-model="radio2">
                <el-radio label="不删除" ></el-radio>
                <el-radio label="删除原始数据" ></el-radio>
                <el-radio label="删除原始与结果数据" ></el-radio>
                <el-radio label="删除全部数据" ></el-radio>
              </el-radio-group>
            </td>
          </tr>
        </table>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      radio1 : '',
      radio2 : ''
    }
  },
  groupDelete () {
    
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