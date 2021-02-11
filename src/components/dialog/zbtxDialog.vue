<template>
    <div>
        <el-dialog
            title="提示"
            v-if="form!=undefined"
            :visible.sync="dialogVisible"
            :fullscreen="true"
            :before-close="handleClose">
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
              <div></div>
            </table>
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
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
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>