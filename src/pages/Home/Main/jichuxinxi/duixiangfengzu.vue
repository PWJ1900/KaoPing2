<template>

  <div>
    <el-container>
      <el-header>
        <!-- 对象分组 -->
        <headerUse />
      </el-header>
      <el-main>
        这是main
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text"
                       @click="AddUser">添加操作</el-button>
          </div>
          <div v-for="o in peopleNumber"
               :key="o"
               class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      peopleNumber: []
    }
  },
  methods: {
    AddUser () {
      this.peopleNumber.push("")

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

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>