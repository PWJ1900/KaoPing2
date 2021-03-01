<template>
  <div>
    <el-dialog title="提示"
               :modal='true'
               width="70%"
               v-if="form!=undefined"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :modal-append-to-body='false'
               :center="true">
      <!-- :fullscreen="true" -->
      <table>
        <!-- 指标体系 -->
        <div>
          <table border="2"
                 width="500px">
            <tr>
              <td rowspan="3">指标体系</td>
              <td>
                体系名称定义：
              </td>
              <td><input /></td>
            </tr>
            <tr>
              <td> 测评序号选择：</td>
              <td>
                <el-select>
                  <el-option label="2021"
                             value="1"></el-option>
                  <el-option label="2022"
                             value="2"></el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td>身份类型选择:</td>
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
        <div>
          <table border="2"
                 width="500px">
            <tr>
              <td :rowspan="zhibiaoneirong.row">指标内容</td>
              <td>二级指标选择：</td>
              <td>
                <el-select>
                  <el-option label="2021"
                             value="1"></el-option>
                  <el-option label="2022"
                             value="2"></el-option>
                </el-select>
              </td>
              <td>权重(可在二级指标修改)</td>
              <td>对应一级指标</td>
            </tr>
            <tr v-for="(item,i) in zhibiaoneirong.list"
                :key="i">
              <td>{{item.a}}</td>
              <td><input v-text="item.b" /></td>
              <td><input v-text="item.c" /></td>
              <td><input v-text="item.d" /></td>
            </tr>
          </table>
        </div>
        <!-- 参评群体内容 -->
        <div>
          <table border="2"
                 width="500px">
            <tr>
              <td :rowspan="canpingqunti.row">参评群体内容</td>
              <td>参评群体选择：</td>
              <td>
                <el-select>
                  <el-option label="2021"
                             value="1"></el-option>
                  <el-option label="2022"
                             value="2"></el-option>
                </el-select>
              </td>
              <td>权重(可在参评群体修改)</td>
            </tr>
            <tr v-for="(item, i) in canpingqunti.list"
                :key="i">
              <td>{{item.a}}</td>
              <td><input v-text="item.b" /></td>
              <td><input v-text="item.c" /></td>
            </tr>
          </table>
        </div>
        <!-- 否决性指标 -->
        <div>
          <table border="2"
                 width="500px">
            <tr>
              <td rowspan="11">总体评价</td>
              <td rowspan="11">指标内容</td>
            </tr>
            <tr>
              <td>
                &ensp;1.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;2.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;3.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;4.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;5.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;6.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;7.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;8.<input />
              </td>
            </tr>
            <tr>
              <td>
                &ensp;9.<input />
              </td>
            </tr>
            <tr>
              <td>
                10.<input />
              </td>
            </tr>
          </table>
        </div>
        <!-- 总体评价 -->
        <div>
          <table border="2"
                 width="500px">
            <tr>
              <td rowspan="5">总体评价</td>
              <td rowspan="1">评价标题</td>
              <td>
                <input placeholder="请按照下放要求输入" />
                <br>
                <p>“文本框型题|选项型标题|上行右边的标题|上行左边的标题” 没有为空，但"|"一定要输入</p>
              </td>
            </tr>
            <tr>
              <td rowspan="4">选项定义：</td>
              <td>1.<input /></td>
            </tr>
            <tr>
              <td>2.<input /></td>
            </tr>
            <tr>
              <td>3.<input /></td>
            </tr>
            <tr>
              <td>4.<input /></td>
            </tr>
          </table>
        </div>
      </table>

      <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel"
                   size="small">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit"
                   size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { tablePostUpdate } from '@/api/tablePostUpdate'

export default {
  props: {
    headerUse: Array,  //这里用不到，因为这个dialog比较复杂
    form: Object  // 接收数据
  },
  data () {
    return {
      dialogVisible: true,
      checkList: [],
      canpingqunti: {
        row: 3,
        list: [
          {
            a: '群体a',
            b: '所在企业班子成员及各部门主要负责人',
            c: 50
          },
          {
            a: '群体b',
            b: '所在负责人',
            c: 100
          }
        ]
      },
      zhibiaoneirong: {
        row: 3,
        list: [
          {
            a: '群体a',
            b: 'aa',
            c: 'aa',
            d: '德'
          },
          {
            a: '群体b',
            b: 'aa',
            c: 'aa',
            d: '德'
          }
        ]
      }
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