<template>

  <div>
    <el-container>
      <el-header>
        <!-- 测评等级 -->
        <headerUse />
      </el-header>
      <el-main>

        <!-- 表格 -->
        <el-table :data="tableData" border>
          <!-- 测评等级 -->
          <el-table-column prop="cpdj" label="测评等级"></el-table-column>
          <!-- 最低分 -->
          <el-table-column prop="zdf" label=">=最低分"></el-table-column>
          <!-- 最高分 -->
          <el-table-column prop="zgf" label="<最高分"></el-table-column>
          <!-- 编辑区 -->
          <el-table-column>
            <template slot-scope="scope">
              <el-button @click="editUse(scope.row)">编辑</el-button>
              <el-button @click="deleteUse(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 两个功能按钮 -->
        <div style="margin-top:20px">
          <el-button type="primary" @click="cpdjDialogVisible = true">新建测评等级</el-button>
          <el-button type="primary" @click="zfpmDialogVisible = true">显示总分及排名</el-button>
        </div>
        <!-- dialog ：修改、新建测评等级、显示总分及排名  -->
        <!-- 1.修改 -->
        <el-dialog  title="修改" :center="true" :visible.sync="editDialogVisible" 
                    :before-close="handleClose" :fullscreen="true">

          <div>
            测评等级:<input v-model="editData.cpdj"
                   type="text" />
          </div>
          <div>
            最低分:<input v-model="editData.zdf"
                   type="number" />
          </div>
          <div>
            最高分:<input v-model="editData.zgf"
                   type="number" />
          </div>
          <span slot="footer"
                class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="edit">保存</el-button>
          </span>
        </el-dialog>
        <!-- 2.新建测评等级的dialog -->
        <el-dialog title="新建测评等级" :visible.sync="cpdjDialogVisible" 
          :before-close="handleClose" :fullscreen="true" :center="true">
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="测评等级">
              <el-input v-model="form.cpdj"
                        type="text"></el-input>
            </el-form-item>
            <el-form-item label=">=最低分">
              <el-input v-model="form.zdf"
                        type="number"></el-input>
            </el-form-item>
            <el-form-item label="<最高分">
              <el-input v-model="form.zgf"
                        type="number"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer"
                class="dialog-footer">
            <el-button @click="cpdjDialogVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="add">保存</el-button>
          </span>
        </el-dialog>

        <!-- 3.显示总分及排名的dialog -->
        <el-dialog title="总分及排名"
                   :visible.sync="zfpmDialogVisible"
                   :before-close="handleClose"
                   :fullscreen="true"
                   :center="true">
          <div>
            <p><b>请注意：一定要先 采集数据计算，再获取最新的总评分</b></p>
            <div>
              测评序号：<el-select v-model="cepingxuhaotemp" placeholder="请选择测评序号">
              <el-option v-for="item in data" :label="item.cepingxuhao+'('+item.cepingmingcheng+')'" 
                :key="item.cepingxuhao" 
                value='i.cepingxuhao'>
              </el-option>
              </el-select>
              <br>
              总分前:<input v-model="zfq" placeholder="10"/>%
            </div>
            <!-- 显示查询结果 -->
            <div>        
              <h1>查询结果： {{result}}</h1>
            </div>

          </div>
          <span slot="footer"
                class="dialog-footer">
            <el-button type="primary"
                       @click="zfpmDialogVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="search">查询</el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>

  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
import index from '../../index.vue'
export default {
  components: { index },
  async created () {
    console.log("测评等级组件-加载完成")
    // tablePostGet(this, "bmxx")//根据postman的Api获取数据来测试
  },
  data () {
    return {
      /**修改的dialog
       * editData : 需要修改的数据
       */
      editDialogVisible: false,
      editData: '',

      /**新建测评等级的dialog
       * cpdjDialogVisible : dialog切换开关
       * form : 表单信息 
       * */
      cpdjDialogVisible: false,
      form: {
        cpdj: '',
        zdf: '',
        zgf: ''
      },

      /**显示分数及排名的dialog
      * zfpmDialogVisible : dialog切换开关
      * data : 测评序号、测评名称信息
      * cepingxuhaotemp : 记录想查看信息的测评序号
      * zfq ：总分前
      * result ： 查询结果
      */
      zfpmDialogVisible: false,
      data: [
        {
          cepingxuhao: '202002',
          cepingmingcheng: '测试用1'
        },
        {
          cepingxuhao: '202101',
          cepingmingcheng: '测试用2'
        }
      ],
      cepingxuhaotemp: '',
      zfq: '',
      result: 'jieguo',

      /**表格数据
       * 
       *  */
      tableData: [
        {
          cpdj: '优秀',
          zdf: 99,
          zgf: 100
        },
        {
          cpdj: '良好',
          zdf: 88,
          zgf: 99
        },
        {
          cpdj: '一般',
          zdf: 70,
          zgf: 79
        },
        {
          cpdj: '改进',
          zdf: 60,
          zgf: 69
        }
      ]
    }
  },
  methods: {
    // 编辑 ，传入当前行数据（scope.row）
    editUse (value) {
      this.editData = value
      console.log(value)
      console.log('修改的是' + value.cepingdengji)
      this.editDialogVisible = true
    },
    // 删除，传入当前行数据（scope.row）
    deleteUse (value) {
      console.log('删除的是' + value.cepingdengji)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    // 修改dialog的修改请求
    edit () {
      console.log(this.editData)
    },
    // 查看dialog的查看请求
    search () {
    },
    // 新增dialog的新增请求
    add () {

    }
  }
}
</script>
<style scoped>
@import '../../../../css/headermain2.css';

.el-main {
  padding: 0;
}
.el-table {
  width: 80%;
  height: 60%;
}
</style>
