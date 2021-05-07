<template>

  <div>
    <el-container>
      <el-header>
        <!-- 等级统计 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-card>
          <!-- 等级统计条件选择区域 -->
        <el-row :gutter="20">
        <el-col :span="6">
          测评序号:
          <el-select v-model="value" clearable placeholder="请选择测评序号">
          <el-option v-for="item in cpxh" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
           单位：
              <el-select v-model="value2" clearable placeholder="请选择单位" >
              <el-option v-for="item in dw" :key="item.value2" :label="item.label2" :value="item.value2">
              </el-option>
              </el-select>
        </el-col>
        <el-col :span="6">
           统计类型:
              <el-select v-model="value3" clearable placeholder="请选择统计类型" @change="changeShow">
              <el-option v-for="item in tjlx" :key="item.value3" :label="item.label3" :value="item.value3">
              </el-option>
              </el-select>
        </el-col>
        <el-col :span="6">
          <download-excel :data="currentTable"
                          style="margin:0"
                          :fields="json_fields"
                          name="导出的表格名称.xls">

            <!--      header="这是个excel的头部"  这里还有个动态绑定的问题没解决-->
            <el-button type="primary" >导出EXCEL</el-button>
          </download-excel>
        </el-col>
      </el-row>

        </el-card>
        
         <el-card>
           <!-- 表格一显示 按等级数量统计各被测对象-->
          <el-table :data="djtjData" stripe border v-show="showTable1">
          <el-table-column prop="dm" label="代码" ></el-table-column>
          <el-table-column prop="name" label="姓名" ></el-table-column>
          <el-table-column prop="fpmms" label="分配密码数" ></el-table-column>
          <el-table-column prop="cps" label="测评数" ></el-table-column>
          <el-table-column prop="yxs" label="优秀数" ></el-table-column>
          <el-table-column prop="czs" label="称职数" ></el-table-column>
          <el-table-column prop="jbczs" label="基本称职数" ></el-table-column>
          <el-table-column prop="bczs" label="不称职数" ></el-table-column>
          <el-table-column prop="yxl" label="优秀率"></el-table-column>
          <el-table-column prop="czl" label="称职率" ></el-table-column>
          <el-table-column prop="jbczl" label="基本称职率" ></el-table-column>
          <el-table-column prop="bczl" label="不称职率" ></el-table-column>
          
          </el-table>

          <!-- 表格二显示 按各测评范围统计各被测对象-->
          <el-table :data="djtjData2" stripe border v-show="showTable2">
          <el-table-column prop="dm" label="代码" ></el-table-column>
          <el-table-column prop="name" label="姓名" ></el-table-column>
          <el-table-column prop="cpfw" label="测评范围" ></el-table-column>
          <el-table-column prop="fpmms" label="分配密码数" ></el-table-column>
          <el-table-column prop="cps" label="测评数" ></el-table-column>
          <el-table-column prop="yxs" label="优秀数" ></el-table-column>
          <el-table-column prop="czs" label="称职数" ></el-table-column>
          <el-table-column prop="jbczs" label="基本称职数" ></el-table-column>
          <el-table-column prop="bczs" label="不称职数" ></el-table-column>
          <el-table-column prop="yxl" label="优秀率"></el-table-column>
          <el-table-column prop="czl" label="称职率" ></el-table-column>
          <el-table-column prop="jbczl" label="基本称职率" ></el-table-column>
          <el-table-column prop="bczl" label="不称职率" ></el-table-column>
          
          </el-table>

          <!-- 表格三显示 按参评群体权重统计各被测对象-->
          <el-table :data="djtjData3" stripe border v-show="showTable3">
          <el-table-column prop="dm" label="代码" ></el-table-column>
          <el-table-column prop="name" label="姓名" ></el-table-column>
          <el-table-column prop="rysf" label="rysf" ></el-table-column>
          <el-table-column prop="fpmms" label="分配密码数" ></el-table-column>
          <el-table-column prop="cpzs" label="测评总数" ></el-table-column>
          <el-table-column prop="yxzs" label="优秀总数" ></el-table-column>
          <el-table-column prop="czzs" label="称职总数" ></el-table-column>
          <el-table-column prop="jbcpzs" label="基本称职总数" ></el-table-column>
          <el-table-column prop="bczzs" label="不称职总数" ></el-table-column>
          <el-table-column prop="cpsa" label="测评数(a)" ></el-table-column>
          <el-table-column prop="yxsa" label="优秀数(a)" ></el-table-column>
          <el-table-column prop="czsa" label="称职数(a)" ></el-table-column>
          <el-table-column prop="jbczsa" label="基本称职数(a)" ></el-table-column>
          <el-table-column prop="bczsa" label="不称职数(a)" ></el-table-column>
          <el-table-column prop="yxla" label="优秀率(a)"></el-table-column>
          <el-table-column prop="czla" label="称职率(a)" ></el-table-column>
          <el-table-column prop="jbczla" label="基本称职率(a)" ></el-table-column>
          <el-table-column prop="bczla" label="不称职率(a)" ></el-table-column>
          <el-table-column prop="cpsb" label="测评数(b)" ></el-table-column>
          <el-table-column prop="yxsb" label="优秀数(b)" ></el-table-column>
          <el-table-column prop="czsb" label="称职数(b)" ></el-table-column>
          <el-table-column prop="jbczsb" label="基本称职数(b)" ></el-table-column>
          <el-table-column prop="bczsb" label="不称职数(b)" ></el-table-column>
          <el-table-column prop="yxlb" label="优秀率(b)"></el-table-column>
          <el-table-column prop="czlb" label="称职率(b)" ></el-table-column>
          <el-table-column prop="jbczlb" label="基本称职率(b)" ></el-table-column>
          <el-table-column prop="bczlb" label="不称职率(b)" ></el-table-column>
          <el-table-column prop="cpsc" label="测评数(c)" ></el-table-column>
          <el-table-column prop="yxsc" label="优秀数(c)" ></el-table-column>
          <el-table-column prop="czsc" label="称职数(c)" ></el-table-column>
          <el-table-column prop="jbczsc" label="基本称职数(c)" ></el-table-column>
          <el-table-column prop="bczsc" label="不称职数(c)" ></el-table-column>
          <el-table-column prop="yxlc" label="优秀率(c)"></el-table-column>
          <el-table-column prop="czlc" label="称职率(c)" ></el-table-column>
          <el-table-column prop="jbczlc" label="基本称职率(c)" ></el-table-column>
          <el-table-column prop="bczlc" label="不称职率(c)" ></el-table-column>
          <el-table-column prop="cpsd" label="测评数(d)" ></el-table-column>
          <el-table-column prop="yxsd" label="优秀数(d)" ></el-table-column>
          <el-table-column prop="czsd" label="称职数(d)" ></el-table-column>
          <el-table-column prop="jbczsd" label="基本称职数(d)" ></el-table-column>
          <el-table-column prop="bczsd" label="不称职数(d)" ></el-table-column>
          <el-table-column prop="yxld" label="优秀率(d)"></el-table-column>
          <el-table-column prop="czld" label="称职率(d)" ></el-table-column>
          <el-table-column prop="jbczld" label="基本称职率(d)" ></el-table-column>
          <el-table-column prop="bczld" label="不称职率(d)" ></el-table-column>
          <el-table-column prop="cpse" label="测评数(e)" ></el-table-column>
          <el-table-column prop="yxse" label="优秀数(e)" ></el-table-column>
          <el-table-column prop="czse" label="称职数(e)" ></el-table-column>
          <el-table-column prop="jbczse" label="基本称职数(e)" ></el-table-column>
          <el-table-column prop="bczse" label="不称职数(e)" ></el-table-column>
          <el-table-column prop="yxle" label="优秀率(e)"></el-table-column>
          <el-table-column prop="czle" label="称职率(e)" ></el-table-column>
          <el-table-column prop="jbczle" label="基本称职率(e)" ></el-table-column>
          <el-table-column prop="bczle" label="不称职率(e)" ></el-table-column>
          <el-table-column prop="fwaqz" label="范围a权重" ></el-table-column>
          <el-table-column prop="fwbqz" label="范围b权重" ></el-table-column>
          <el-table-column prop="fwcqz" label="范围c权重" ></el-table-column>
          <el-table-column prop="fwdqz" label="范围d权重" ></el-table-column>
          <el-table-column prop="fweqz" label="范围e权重" ></el-table-column>
          <el-table-column prop="yxl" label="优秀率" ></el-table-column>
          <el-table-column prop="czl" label="称职率" ></el-table-column>
          <el-table-column prop="jbczl" label="基本称职率" ></el-table-column>
          <el-table-column prop="bczl" label="不称职率" ></el-table-column>
          </el-table>
        </el-card>
      </el-main>
    </el-container>

  </div>
</template>
<script>
import useTable from '@/components/Table/useTable'

export default {
  components: { useTable },
  async created () {
  },
  data () {
    return {
      // 测评序号选择表
      cpxh: [{
          value: '选项1',
          label: '2020考评（2020001）'
        }, {
          value: '选项2',
          label: '20201118测试（20201118）'
      }],
      value: '',
      // 单位选择表
      dw: [{
          value2: '选项1',
          label2: '全部'
        }, {
          value2: '选项2',
          label2: '测试单位'
      }],
      value2: '',
      // 统计类型选择表
      tjlx: [{
          value3: '选项1',
          label3: '按等级数量统计各被测对象'
        }, {
          value3: '选项2',
          label3: '按各测评范围统计各被测对象'
        },
        {
          value3: '选项3',
          label3: '按参评群体权重统计各被测对象'
        }],
      value3: '',
      // 按等级数量统计各被测对象表单数据
      djtjData:[
        {
          dm: '6',
          name: '30',
          fpmms: '',
          cps: '',
          yxs: '',
          czs: '',
          jbczs: '',
          bczs: '',
          yxl: '',
          czl: '',
          jbczl: '',
          bczl: ''
        }
      ],
      // 按各测评范围统计各被测对象表单数据
      djtjData2:[
        {
          dm: '6',
          name: '30',
          cpfw: '10',
          fpmms: '',
          cps: '',
          yxs: '',
          czs: '',
          jbczs: '',
          bczs: '',
          yxl: '',
          czl: '',
          jbczl: '',
          bczl: ''
        }
      ],
      // 按参评群体权重统计各被测对象表单数据
      djtjData3:[
        {
          dm: '6',
          name: '30',
          rysf:'',
          fpmms:'',
          cpzs:'',
          yxzs:'',
          czzs:'',
          jbcpzs:'',
          bczzs:'',
          cpsa:'',
          yxsa:'',
          czsa:'',
          jbczsa:'',
          bczsa:'',
          yxla:'',
          czla:'',
          jbczla:'',
          bczla:'',

          cpsb:'',
          yxsb:'',
          czsb:'',
          jbczsb:'',
          bczsb:'',
          yxlb:'',
          czlb:'',
          jbczlb:'',
          bczlb:'',

          cpsc:'',
          yxsc:'',
          czsc:'',
          jbczsc:'',
          bczsc:'',
          yxlc:'',
          czlc:'',
          jbczlc:'',
          bczlc:'',

          cpsd:'',
          yxsd:'',
          czsd:'',
          jbczsd:'',
          bczsd:'',
          yxld:'',
          czld:'',
          jbczld:'',
          bczld:'',

          cpse:'',
          yxse:'',
          czse:'',
          jbczse:'',
          bczse:'',
          yxle:'',
          czle:'',
          jbczle:'',
          bczle:'',

          fwaqz:'',
          fwbqz:'',
          fwcqz:'',
          fwdqz:'',
          fweqz:'',

          yxl:'',
          czl:'',
          jbczl:'',
          bczl:'',

        }
      ],
      // 当前表的data
      currentTable: [],
      // 表一显示
      showTable1: false,
       // 表二显示
      showTable2: false,
       // 表三显示
      showTable3: false,
       json_meta: [//定义导出表格
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ],
      json_fields: {
          "代码":"dm",
          "姓名":"name"
      }
    }
  },
  methods: {
    changeShow(value) {
      if(value == this.tjlx[0].value3) {
        this.showTable1 = true
        this.showTable2 = false
        this.showTable3 = false
        this.currentTable = this.djtjData
      }
      if(value == this.tjlx[1].value3){
        this.showTable1 = false
        this.showTable2 = true
        this.showTable3 = false
        this.currentTable = this.djtjData2
      }
      if(value == this.tjlx[2].value3){
        this.showTable1 = false
        this.showTable2 = false
        this.showTable3 = true
        this.currentTable = this.djtjData3
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
.el-card{
  margin:1%;
}
</style>