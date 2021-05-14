<template>
  <el-row>
    <el-dialog title="二级指标"
               :modal='true'
               width="70%"
               v-if="form!=undefined"
               :close-on-click-modal='false'
               :modal-append-to-body="false"
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :center="true">
      <!--  判断undefined就不显示    v-if="form!=undefined"
      :fullscreen="true"-->

      <table cellspacing="0">
        <tbody>
          <tr>
            <!-- <td></td> -->
            <td>指标名称定义:</td>
            <td colspan="2">
              <el-input type="text"
                        v-model="form.name"></el-input>
            </td>
            <td>一级指标选择:</td>
            <td>
              <el-select v-model="yjzb"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options2"
                           :key="item.name"
                           :label="item.name"
                           :value="item.name">
                </el-option>
              </el-select>
            </td>

          </tr>
          <tr>
            <!-- <td :rowspan="this.value1 + 1">指标内容定义:</td> -->
            <td>指标个数:</td>
            <td>
              <el-select v-model="form.col_num"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="(item,index) in 11"
                           :key="index"
                           :label="index"
                           :value="index">
                </el-option>
              </el-select>
            </td>
            <td>考评要点</td>
            <td>权重</td>
            <td>对应一级指标</td>
          </tr>
      
           <tr v-show="form.col_num>=1">
            <td>指标1:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm1"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm1"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp1"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr1"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=2">
            <td>指标2:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm2"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm2"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp2"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr2"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=3">
            <td>指标3:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm3"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm3"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp3"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr3"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=4">
            <td>指标4:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm4"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm4"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp4"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr4"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=5">
            <td>指标5:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm5"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm5"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp5"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr5"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=6">
            <td>指标6:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm6"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm6"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp6"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr6"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=7">
            <td>指标7:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm7"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm7"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp7"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr7"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=8">
            <td>指标8:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm8"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm8"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp8"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr8"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr> <tr v-show="form.col_num>=9">
            <td>指标9:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm9"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm9"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp9"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr9"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr><tr v-show="form.col_num>=10">
            <td>指标10:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="form.xm10"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="form.xmm10"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.xmp10"></el-input>
            </td>
            <td>
              <el-select v-model="form.nr10"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item"
                           :label="item"
                           :value="item">
                </el-option>
              </el-select>
            </td>
          </tr>
          <!-- <tr>
            <td colspan="6"
                id="buttonUse">
              <el-button size="small"
                         type="warning">复制</el-button>
              <el-button size="small"
                         type="success">保存</el-button>
              <el-button size="small">返回</el-button>

            </td>
          </tr> -->
        </tbody>
      </table>
      <span slot="footer"
            class="dialog-footer" style="background-color:white">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>

</template>

<script>
import { tablePostUpdate } from '@/api/tablePostUpdate'
import { tablePostGet } from '@/api/tablePostGet'

export default {
  created(){
    
  },
  props: {
    headerUse: Array,
    form: Object,
    // showDialog: Boolean,
    getEditOrAdd:''

  },
  data () {
    return {
      dialogVisible: true,
      options: [],
      yjzb:'', //记录所选的一级指标
      options2:[
   
], //一級指標
    };
  },
  watch:{
    yjzb:{
      handler(newval,oldval){
        console.log(newval)
        this.$axios.post("getYjzbNames").then(
          (res)=>{
            this.options2 = res.data
          }
        )
        //获取新的一级指标 options
        this.$axios.post("getYjzbByName",this.qs.stringify({name:this.yjzb})).then(
          (res)=>{
            this.options = res.data
          }
        )
      },
      immediate: true
    }
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcEjzb", this.dialogVisible)


    },
    confirmit () {
      this.dialogVisible = false
      tablePostUpdate(this, this.getEditOrAdd, this.form)
      this.$emit("funcEjzb", this.dialogVisible)
      //这里面写后端的edit，delete，create接口

    },
    handleClose (done) {//此处遮罩层有问题
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcEjzb", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>
<style scoped>
table,
table td {
  border: 0.5px solid rgba(124, 141, 141, 0.925);
}
table td {
  padding: 10px 30px;
}
#buttonUse {
  text-align: center;
}
</style>
<style scoped>
@import '../../css/tableuse.css';
</style>