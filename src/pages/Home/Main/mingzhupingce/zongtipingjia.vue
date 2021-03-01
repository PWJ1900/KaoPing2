<template>

  <div>
    <el-container>
      <el-header>
        <!-- 总体评价 -->
        <headerUse />
      </el-header>
      <el-main>
         <el-card>
          <!-- 等级统计条件选择区域 -->
        <el-row :gutter="20">
        <el-col :span="6">
          测评序号:
              <el-select v-model="djtjForm.region" placeholder="请选择测评序号">
                <el-option label="2020考评（2020001）" value="kaoping" ></el-option>
                <el-option label="20201118测试（20201118）" value="ceshi"></el-option>
              </el-select>
        </el-col>
        <el-col :span="6">
           单位：
              <el-select v-model="djtjForm2.region" placeholder="请选择单位">
                <el-option label="全部" value="all"></el-option>
                <el-option label="测试单位" value="csdw"></el-option>
              </el-select>
        </el-col>
        </el-row>
        <el-row>
          总体评价表
        </el-row>
         </el-card>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      djtjForm: {
        region:''
      },
       djtjForm2: {
        region:''
      }
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