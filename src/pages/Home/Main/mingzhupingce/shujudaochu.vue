<template>

  <div>
    <el-container>
      <el-header>
        <!-- 数据导出 -->
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
        <el-col :span="6">
           统计类型
              <el-select v-model="djtjForm3.region" placeholder="请选择统计类型">
                <el-option label="测评统计明细表" value="cptj"></el-option>
                <el-option label="按各测评范围的测评统计明细表" value="cpfw"></el-option>
                <el-option label="测评明细表" value="cp"></el-option>
              </el-select>
        </el-col>
        <el-col :span="6">
          <download-excel :data="this.sjdcData"
                          style="margin:0"
                          :fields="json_fields"
                          name="导出的表格名称.xls">

            <!--      header="这是个excel的头部"  这里还有个动态绑定的问题没解决-->
            <el-button type="primary" >导出EXCEL</el-button>
          </download-excel>
        </el-col>
      </el-row>
        <el-row>
           统计表：(请注意，在导出数据前，请确保已经完成“数据计算”) 
        </el-row>
        </el-card>
        <el-card>
           <el-table :data="sjdcData" stripe border>
          <el-table-column prop="mc" label="名称" ></el-table-column>
          <el-table-column prop="cpxh" label="测评序号" ></el-table-column>
          <el-table-column prop="dwmc" label="单位名称" ></el-table-column>
          <el-table-column prop="jls" label="记录数" ></el-table-column>
           </el-table>
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
      },
       djtjForm3: {
        region:''
      },
      sjdcData:[
        {
          mc: '6',
          cpxh: '30',
          dwmc: '',
          jls: ''
          
        }],
        json_meta: [//定义导出表格
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ],
      json_fields: {
          "名称":"mc",
          "测评序号":"cpxh",
          "单位名称":"dwmc",
          "记录数":"jls"

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
.el-card {
  margin: 1%;
}
</style>