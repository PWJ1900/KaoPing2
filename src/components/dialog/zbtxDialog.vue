<template>
    <div>
        <el-dialog
            title="提示"
            :modal='false'
            width="70%"
            v-if="form!=undefined"
            :close-on-click-modal='false'
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            :fullscreen="true"
            :center="true">
            <table>
              <!-- 指标体系 -->
              <div>
                <table>
                  <tr>
                    <td rowspan="3">指标体系</td>
                    <td>
                      体系名称定义：<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      测评序号选择：<el-select>
                        <el-option label="2021" value="1"></el-option>
                        <el-option label="2022" value="2"></el-option>
                      </el-select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <el-checkbox-group v-model="checkList">
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
                </table>
              </div>
              <!-- 指标内容 -->
              <div></div>
              <!-- 参评群体内容 -->
              <div></div>
              <!-- 否决性指标 -->
              <div>
                <table>
                  <tr>
                    <td rowspan="10">总体评价</td>
                    <td rowspan="10">指标内容</td>
                  </tr>
                  <tr>
                    <td>
                      1.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      4.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      5.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      6.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      7.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      8.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      9.<el-input></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      10.<el-input></el-input>
                    </td>
                  </tr>
                </table>
              </div>
              <!-- 总体评价 -->
              <div>
                <table>
                  <tr>
                    <td rowspan="5">总体评价</td>
                    <td rowspan="1">评价标题</td>
                    <td>
                      <el-input></el-input>
                      <br>
                      <p>“文本框型题|选项型标题|上行右边的标题|上行左边的标题”     没有为空，但"|"一定要输入</p>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="4">选项定义：</td>
                    <td>1.<el-input></el-input></td>
                  </tr>
                  <tr>
                    <td>2.<el-input></el-input></td>
                  </tr>
                  <tr>
                    <td>3.<el-input></el-input></td>
                  </tr>
                  <tr>
                    <td>4.<el-input></el-input></td>
                  </tr>
                </table>
              </div>
            </table>
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
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
        checkList : [],
      };
    },
    watch: {
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
      }
    }
}
</script>