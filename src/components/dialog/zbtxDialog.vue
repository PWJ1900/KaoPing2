<template>
    <div>
        <el-dialog
            title="指标体系"
            :modal='false'
            v-if="form!=undefined"
            :close-on-click-modal='false'
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            :center="true"
            style="margin-top:6%;width:2000px;margin-left:5%">
              <!--总列宽为5 -->
              <table style="width:900px;text-align:center" border="2">
                <!-- 指标体系 -->
                <tr>
                  <td rowspan="3" colspan="1">指标体系</td>
                  <td colspan="1">体系名称定义:</td>
                  <td colspan="3"><el-input v-model="zhibiaotixi.tiximingchengdingyi"></el-input></td>
                </tr>
                <tr>
                  <td colspan="1"> 测评序号选择：</td>
                  <td colspan="3">
                    <el-select v-model="zhibiaotixi.cpxh">
                      <el-option v-for="(item , i ) in zhibiaotixi.cepingxuhaoxuanze" :key="i" :label="item" :value="i"></el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td colspan="1">身份类型选择:</td>
                  <td colspan="3">
                    <el-checkbox-group v-model="zhibiaotixi.shenfenleixingxuanze">
                      <el-checkbox label="A">企业负责人(1)</el-checkbox>
                      <el-checkbox label="B">企业班子成员(2)</el-checkbox>
                      <el-checkbox label="C">集团本部中层干部或部门负责人(3)</el-checkbox>
                      <el-checkbox label="D">集团本部中层其他(4)</el-checkbox>
                      <el-checkbox label="E">集团本部中层以下(5)</el-checkbox>
                      <el-checkbox label="f">财务经理(6)</el-checkbox>
                      <el-checkbox label="g">集团本部中层(7)</el-checkbox>
                      <el-checkbox label="h">企业领导班子1(8)</el-checkbox>
                      <el-checkbox label="i">AAA(9)</el-checkbox>
                    </el-checkbox-group>
                  </td>
                </tr>
                <!-- 指标内容 -->
                <tr>
                  <td :rowspan="zhibiaoneirong.list.length+1" colspan="1">指标内容</td>
                  <td colspan="1">二级指标选择：</td>
                  <td colspan="1">
                    <el-select v-model="zhibiaoneirong.ejzb">
                      <el-option v-for="(item , i ) in zhibiaoneirong.erjizhibiaoxuanze" :key="i" :label="item" :value="i"></el-option>
                    </el-select>
                  </td>
                  <td colspan="1">权重(可在二级指标修改)</td>
                  <td colspan="1">对应一级指标</td>
                </tr>
                <tr v-for="(item,i) in zhibiaoneirong.list" :key="i">
                  <td>指标{{i+1}}:</td>
                  <td><el-input v-model="zhibiaoneirong.list[i].b"/></td>
                  <td><el-input v-model="zhibiaoneirong.list[i].c"/></td>
                  <td><el-input v-model="zhibiaoneirong.list[i].d"/></td>
                </tr>
                <!-- 参评群体内容 -->
                <tr>
                    <td :rowspan="canpingquntineirong.list.length+1" colspan="1">参评群体内容</td>
                    <td colspan="1">参评群体选择：</td>
                    <td colspan="2">
                      <el-select v-model="canpingquntineirong.cpqt">
                        <el-option v-for="(item , i ) in canpingquntineirong.canpingquntixuanze" :key="i" :label="item" :value="i"></el-option>
                      </el-select>
                    </td>
                    <td colspan="1">权重(可在参评群体修改)</td>
                </tr>
                <tr v-for="(item,i) in canpingquntineirong.list" :key="i">
                  <td colspan="1">群体{{i+1}}:</td>
                  <td colspan="2"><el-input v-model="canpingquntineirong.list[i].b"></el-input></td>
                  <td colspan="1"><el-input v-model="canpingquntineirong.list[i].c"></el-input></td>
                </tr>
                <!-- 否决性指标 -->
                <tr>
                    <td :rowspan="foujuexingzhibiao.length+1" colspan="1">否决性指标</td>
                    <td :rowspan="foujuexingzhibiao.length+1" colspan="1">指标内容:<br>
                      <el-button type="small" @click="fjxzb_add">增加指标内容</el-button><br>
                      <el-button type="small" @click="fjxzb_dec">减少指标内容</el-button>
                    </td>
                    <td colspan="3">具体内容</td>
                </tr>
                <tr v-for="(item,i) in foujuexingzhibiao" :key="i">
                  <td colspan="3">{{i+1}}、<el-input v-model="foujuexingzhibiao[i]"></el-input></td>
                </tr>         
                <!-- 总体评价 -->
                <tr>
                  <td :rowspan="zongtipingjia.xuanxiangdingyi.length+3" colspan="1">总体评价</td>
                  <td colspan="1">评价类型：</td>
                  <td colspan="3"></td>
                </tr>
                <tr>
                  <td colspan="1">评价标题：</td>
                  <td colspan="3">
                    <el-input placeholder="请按照下放要求输入" v-model="zongtipingjia.pingjiabiaoti"></el-input>
                    <br>
                    <p><b>“文本框型题|选项型标题|上行右边的标题|上行左边的标题”     没有为空，但"|"一定要输入</b></p>
                  </td>
                </tr>
                <tr>
                  <td :rowspan="zongtipingjia.xuanxiangdingyi.length+1" colspan="1">选项定义：
                    <el-button type="small" @click="ztpj_add">增加指标内容</el-button><br>
                      <el-button type="small" @click="ztpj_dec">减少指标内容</el-button>
                  </td>
                  <td colspan="3">选项内容</td>
                </tr>
                <tr v-for="(item,i) in zongtipingjia.xuanxiangdingyi" :key="i">
                  <td colspan="3">
                    {{i+1}}<el-input v-model="zongtipingjia.xuanxiangdingyi[i]"></el-input>
                  </td>
                </tr>
              
              </table>
  
            <span slot="footer" class="dialog-footer" style="background-color:white">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confirmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { tablePostUpdate } from '@/api/tablePostUpdate'

export default {
    props : {
        headerUse: Array,  //这里用不到，因为这个dialog比较复杂
        form: Object  // 接收数据
    },
    data() {
      return {
        dialogVisible: true,
        zhibiaotixi : {
          tiximingchengdingyi : '测试',
          cepingxuhaoxuanze : [
          'aaa',
          'ccc',
          'daa'
        ],
          cpxh : '',
          shenfenleixingxuanze : ['测试','测试']
        },
        zhibiaoneirong : { 
          erjizhibiaoxuanze : [
          'aaa',
          'vbbb',
          'adda'
        ],
          ejzb : '',
          list : [
            {
              a : '群体a',
              b : 'aa',
              c : 'aa',
              d : '德'
            },
            {
              a : '群体b',
              b : 'aa',
              c : 'aa',
              d : '德ee'
            }
        ]
        },
        canpingquntineirong : {
          canpingquntixuanze : [
          'aaa',
          'vvv',
          'aaa'
        ],
        cpqt : '',
        list : [
            {
              a : '群体a',
              b : '所在企业班子成员及各部门主要负责人',
              c : 50
            },
            {
              a : '群体b',
              b : '所在负责人',
              c : 100
            }
          ]
        },
        foujuexingzhibiao : [
          'aaaa',
          'bbbb',
          'cccc'
        ],
        zongtipingjia : {
          pingjiabiaoti : '测试',
          xuanxiangdingyi : ['测试','测试'] 
        }
      };
    },
    watch : {
    form: {//子组建向其第一次传值的判断
      handler (newName, oldName) {
        let copy = JSON.parse(JSON.stringify(newName))//深复制避免获取同一个地址直接绑定到表上
        this.formUse = copy
        // ...
      },
      immediate: true
    }
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcZbtx", this.dialogVisible)
      },
      confirmit () {
        this.dialogVisible = false
        tablePostUpdate(this, "xgbmxx", this.formUse)
        location.reload();
        this.$emit("funcZbtx", this.dialogVisible)
        //这里面写后端的edit，delete，create接口
      },
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.dialogVisible = false
            this.$emit("funcZbtx", this.dialogVisible)
            done();
          })
          .catch(_ => { });
      },
      fjxzb_add () {
        this.foujuexingzhibiao.push('')
        console.log(this.foujuexingzhibiao.length)
      },
      fjxzb_dec () {
        this.foujuexingzhibiao.pop()
      },
      ztpj_add () {
        this.zongtipingjia.xuanxiangdingyi.push('')
      },
      ztpj_dec () {
        this.zongtipingjia.xuanxiangdingyi.pop()
      }
    }
  }
}
</script>
<style scoped>
.el-input { 
  display: inline;
}
</style>