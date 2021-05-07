<template>

  <div>
    <el-container>
      <el-header>
        <!-- 测评结果 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-card style="margin='10%">
          <el-button type="primary"  @click="scbbdialogVisible = true">生成报表</el-button>
          <el-button type="primary"  @click="scbbdialogVisible = true">总体评价与建议/否决性指标</el-button>
        </el-card>
        <!-- 生成报表弹出框内容 -->
        <el-dialog title="生成报表" :visible.sync="scbbdialogVisible" width="100%" >
          
            <table border="1px" cellspacing="0px">
            <tr>
            <td rowspan="2">测评序号</td>
            <td rowspan="2" colspan="3"><el-checkbox v-model="checked1">2020考评(2020001)</el-checkbox><br/>
            <el-checkbox v-model="checked2">20201118测试(20201118)</el-checkbox></td>
            <td>图标标题</td>
            <td colspan="3"><input type="text" id="text" value=""><input type="button" value="T" @click="getTitle"></td>
            </tr>

            <tr>
            <td><el-checkbox v-model="tblx" @change="controlTblx">图表类型</el-checkbox></td>
            <td colspan="3"><el-select v-model="tblxValue" clearable placeholder="请选择图表类型" :disabled="tblxDis">
                <el-option v-for="item in tblx1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
                </td>
            </tr>

           <tr>
            <td rowspan="5">测评指标</td>
            <td>指标体系</td>
            <td colspan="2"><input type="text"></td>
            <td><el-checkbox v-model="cpqt" @change="controlCpqt">参评群体</el-checkbox></td>
            <td colspan="3"><el-select v-model="cpqtValue" clearable placeholder="请选择参评群体" :disabled="cpqtDis">
                <el-option v-for="item in cpqt1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select></td>
          </tr>

           <tr>
            <td>指标等级</td>
            <td colspan="2">
              <template>
                <el-radio v-model="radio" label="1">一级指标</el-radio>
                <el-radio v-model="radio" label="2">二级指标</el-radio>
              </template>
            </td>
            <td><input type="button" value="查询"></td>
            <td>被测对象</td>
            <td></td>
            <td>已被测对象</td>
          </tr>

          <tr>
            <td rowspan="3">指标内容</td>
            <td rowspan="3" colspan="2"></td>
            <td rowspan="3">被测对象</td>
            <td rowspan="3" colspan="3">
              
              <template>
                <el-transfer v-model="value" :data="data"></el-transfer>
              </template>
            </td>
          </tr>
          
            </table>
          
          <span slot="footer">
            <el-button @click="scbbdialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="scbbdialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>

      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
data () {
  // 穿梭框
  const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
  return {
    data: generateData(),
    value: [1, 4],
    scbbdialogVisible: false,
    // 图表类型下拉框
    tblx1: [{
          value: '选项1',
          label: '简单柱形图'
        }, {
          value: '选项2',
          label: '堆积柱形图'
      },{
          value: '选项3',
          label: '百分比堆积柱形图'
      },{
          value: '选项4',
          label: '折线图'
      },{
          value: '选项5',
          label: '简单柱形图（3D）'
      },{
          value: '选项6',
          label: '堆积柱形图（3D）'
      },{
          value: '选项7',
          label: '百分比堆积柱形图（3D）'
      },{
          value: '选项8',
          label: '折线图（3D）'
      }],
      // 参评群体下拉框
    cpqt1: [{
      value: '选项1',
      label: '全部参评群体'
    },{
      value: '选项2',
      label: '集团董事长'
    },{
      value: '选项3',
      label: '集团分管领导'
    },{
      value: '选项4',
      label: '集团其他领导'
    },{
      value: '选项5',
      label: '集团各部室负责人'
    }],
    tblxValue: '',
    // 图表类型 多选框 默认值为false
    tblx: false,
    // 参评群体 多选框 默认值为false
    cpqt: false,
    cpqtValue:'',
    // 测评序号 
    checked1:'',
    checked2:'',
    // 图表类型可选
    tblxDis: true,
    // 参评群体可选
    cpqtDis: true,
    // 单选框
    radio: ''
  }
},
methods: {
  // 控制测评群体可选择的方法
  controlCpqt(cpqt){
    if(cpqt == true){
      this.cpqtDis = false
    }else{
      this.cpqtDis = true
    }
   
  },
  // 控制图表类型可选择的方法
  controlTblx(tblx){
    if(tblx == true){
      this.tblxDis = false
    }else{
      this.tblxDis = true
    }
   
  },
  // 添加标题
  getTitle(){
    console.log(this.cpqt)
    if(this.cpqt == false){
      document.getElementById("text").value="综合测评统计表"
    }else{
      document.getElementById("text").value="各参评群体统计表"
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