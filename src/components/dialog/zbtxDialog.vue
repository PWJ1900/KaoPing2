<template>
  <div>
    <el-dialog title="指标体系"
               :modal='false'
               v-if="form!=undefined"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :center="true"
               style="margin-top:6%;width:2000px;margin-left:5%">
      <!--总列宽为5 -->
      <table style="width:900px;text-align:center;border-collapse:collapse"
             border="2">
        <!-- 指标体系 -->
        <tr>
          <td rowspan="3" style="width:100px"
              colspan="1">指标体系</td>
          <td colspan="1" style="width:100px">体系名称定义:</td>
          <td colspan="3">
            <div style="width:250px;margin-left:240px">
            <el-input v-model="form.itemtype"></el-input>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="1"> 测评序号选择：</td>
          <td colspan="3">
            <div style="width:250px;margin-left:240px">
            <el-select v-model="form.cpid">
              <el-option v-for="(item , i ) in cpxhList"
                         :key="i+100"
                         :label="item.memo"
                         :value="item.cpid"></el-option>
            </el-select>
            </div>
          </td>
        </tr>
        <tr style="height:80px">
          <td colspan="1">身份类型选择:</td>
          <td colspan="3">
            <el-checkbox-group v-model="form.rysfs" :change="changeBox">
              <el-checkbox v-for="(item,index) in sflxList" :key="index+100" :label="item.rysfdm">{{item.rysfmc}}</el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <!-- 二级指标内容 -->
        <tr>
          <td :rowspan="form.col_num+1" colspan="1">指标内容</td>
          <td colspan="1">二级指标选择：</td>
          <td colspan="1">
            <el-select v-model="form.cpzb2">
              <el-option v-for="(item , i ) in ejzbList"
                         :key="i+20"
                         :label="item.id+item.name"
                         :value="item.id"></el-option>
            </el-select>
          </td>
          <td colspan="1">权重(可在二级指标修改)</td>
          <td colspan="1">对应一级指标</td>
        </tr>
        <tr v-show="form.col_num>=1">
          <td colspan="1">指标1：</td>
          <td colspan="1">
            <el-input v-model="form.xm1"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz1"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr1"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=2">
          <td colspan="1">指标2：</td>
          <td colspan="1">
            <el-input v-model="form.xm2"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz2"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr2"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=3">
          <td colspan="1">指标3：</td>
          <td colspan="1">
            <el-input v-model="form.xm3"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz3"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr3"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=4">
          <td colspan="1">指标4：</td>
          <td colspan="1">
            <el-input v-model="form.xm4"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz4"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr4"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=5">
          <td colspan="1">指标5：</td>
          <td colspan="1">
            <el-input v-model="form.xm5"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz5"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr5"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=6">
          <td colspan="1">指标6：</td>
          <td colspan="1">
            <el-input v-model="form.xm6"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz6"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr6"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=7">
          <td colspan="1">指标7：</td>
          <td colspan="1">
            <el-input v-model="form.xm7"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz7"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr7"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=8">
          <td colspan="1">指标8：</td>
          <td colspan="1">
            <el-input v-model="form.xm8"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz8"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr8"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=9">
          <td colspan="1">指标9：</td>
          <td colspan="1">
            <el-input v-model="form.xm9"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz9"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr9"></el-input>
          </td>
        </tr>
        <tr v-show="form.col_num>=10">
          <td colspan="1">指标10：</td>
          <td colspan="1">
            <el-input v-model="form.xm10"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.qz10"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.xmnr10"></el-input>
          </td>
        </tr>
        <!-- 参评群体内容 -->
        <tr>
          <td :rowspan="form.cpfv_num+1" colspan="1">参评群体内容</td>
          <td colspan="1">参评群体选择：</td>
          <td colspan="2">
            <el-select v-model="form.cpfvid">
              <el-option v-for="(item ,i ) in cpqtList"
                         :key="i+5000"
                         :label="item.id+item.name"
                         :value="item.id"></el-option>
            </el-select>
          </td>
          <td colspan="1">权重(可在参评群体修改)</td>
        </tr>
        <tr v-show="form.cpfv_num>=1">
          <td colspan="1">群体1：</td>
          <td colspan="2">
            <el-input v-model="form.a"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.a_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=2">
          <td colspan="1">群体2：</td>
          <td colspan="2">
            <el-input v-model="form.b"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.b_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=3">
          <td colspan="1">群体3：</td>
          <td colspan="2">
            <el-input v-model="form.c"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.c_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=4">
          <td colspan="1">群体4：</td>
          <td colspan="2">
            <el-input v-model="form.d"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.d_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=5">
          <td colspan="1">群体5：</td>
          <td colspan="2">
            <el-input v-model="form.e"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.e_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=6">
          <td colspan="1">群体6：</td>
          <td colspan="2">
            <el-input v-model="form.f"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.f_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=7">
          <td colspan="1">群体7：</td>
          <td colspan="2">
            <el-input v-model="form.g"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.g_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=8">
          <td colspan="1">群体8：</td>
          <td colspan="2">
            <el-input v-model="form.h"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.h_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=9">
          <td colspan="1">群体9：</td>
          <td colspan="2">
            <el-input v-model="form.i"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.i_qz"></el-input>
          </td>
        </tr>
        <tr v-show="form.cpfv_num>=10">
          <td colspan="1">群体10：</td>
          <td colspan="2">
            <el-input v-model="form.j"></el-input>
          </td>
          <td colspan="1">
            <el-input v-model="form.j_qz"></el-input>
          </td>
        </tr>
        

      </table>

      <span slot="footer"
            class="dialog-footer"
            style="background-color:white">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { tablePostUpdate } from '@/api/tablePostUpdate'

export default {
  beforeCreate(){
    //身份类型
    this.$axios.post('get_sflxList').then(
      (res)=>{
        this.sflxList=res.data
      }
    )
    //测评序号
    this.$axios.post('get_cpxhList').then(
      (res)=>{
        this.cpxhList=res.data
      }
    )
    //二级指标
    this.$axios.post('get_ejzbList').then(
      (res)=>{
        this.ejzbList=res.data
      }
    )
    //参评群体
    this.$axios.post('get_cpqtList').then(
      (res)=>{
        this.cpqtList=res.data
      }
    )
  },
  created(){
    // if(this.getEditOrAdd=='edit_zbtx'){
    //   alert('编辑')
    // }
    // if(this.getEditOrAdd=='add_zbtx'){
    //   alert('新增')
    // }
    console.log("========")
    console.log(this.form.rysfs)
    console.log(this.form.cpfv_num)
    console.log(this.form.col_num)
     console.log("========")
  },
  props: {
    headerUse: Array,  //这里用不到，因为这个dialog比较复杂
    form: Object,  // 接收数据
    getEditOrAdd:String,//判断编辑、新增
  },
  data () {
    return {
      zbnr:'',cpqt:'',sflx:'',
      sflxList:[],//身份类型 多选框
      cpxhList:[], //测评序号 下拉菜单
      ejzbList:[],//二级指标 下拉菜单
      cpqtList:[],//参评群体 下拉菜单
      dialogVisible: true,    
    };
  },
  computed:{
    cpzb22(){
      return this.form.cpzb2
    },
    cpfvidd(){
      return this.form.cpfvid
    },
    sflxx(){
      return this.form.rysfs
    }
  },
  watch: {
    sflxx:{
      handler(newval,oldval){
        console.log(newval)
      },immediate:true
    },
    cpzb22:{
      handler(newval,oldval){
        console.log('所选二级指标id:'+newval)
        for(var i in this.ejzbList){  
          if(this.ejzbList[i].id==newval){
            this.form.col_num=this.ejzbList[i].col_num
            console.log('二级指标个数:'+this.form.col_num)
          }else{
            
          }
        }
        // this.form.col_num=newval
      },immediate:true
    },
    cpfvidd:{
      handler(newval,oldval){
        console.log('所选参评群体id:'+newval)
        for(var i in this.cpqtList){  
          if(this.cpqtList[i].id==newval){
            this.form.cpfv_num=this.cpqtList[i].cpfv_num
            console.log('参评群体个数:'+this.form.cpfv_num)
          }else{
            
          }
        }
      },immediate:true
    }
  },
  methods: {
    changeBox(val){
      console.log(val)
    },
    cancel () {
      this.dialogVisible = false
      this.$emit("funcZbtx", this.dialogVisible)
    },
    confirmit () {
      console.log( this.form)
      this.dialogVisible = false
      var list=[]
      this.form.rysfs.forEach(element => {
        list.push(element)
      })
      var temp = JSON.stringify(list)
      temp = temp.substring(1,temp.length-1) //去掉中括号
      temp = temp.replaceAll("\"","")
      // console.log(temp)
      this.form.rysfs=temp
      this.form.rysf = '2'
      console.log(this.form.rysfs)
      tablePostUpdate(this, this.getEditOrAdd, this.form)
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
<style scoped>
.el-input {
  display: inline;
}
</style>