<template>

  <div>
    <el-container>
      <el-header>
        <!-- 备份与恢复 -->
        <headerUse />
      </el-header>
      <el-main>
        <div style="margin-top:20px">
          <el-button type="primary" @click="backup">备份数据库</el-button>
          <el-button type="primary" @click="recover">恢复数据库</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  methods : {
    backup () {

    },
    recover () {
      
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