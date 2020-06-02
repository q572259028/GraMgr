<template>
    <div>
       <el-container>
           <el-header>
               <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/student' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
  <el-breadcrumb-item>课程评分细则</el-breadcrumb-item>
</el-breadcrumb>
               <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
                   <el-form-item label="课程">
    <el-select  v-model="formInline.course" placeholder="请选择课程">
  
      <el-option label="软件测试" value="1"></el-option>
      <el-option label="管理信息系统" value="2"></el-option>
       <el-option label="操作系统" value="3"></el-option>
        <el-option label="电子商务" value="4"></el-option>
         <el-option label="项目管理" value="5"></el-option>
         
    </el-select>
  </el-form-item>
 

  <el-form-item>
    <el-button type="primary"  @click="gettableData">查询</el-button>
  </el-form-item>
</el-form>
</el-header>
<el-main>
           <el-table
       :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="cpid"
        label="教学目标编号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="cpcouent"
        label="课程教学目标内容"
        width="200">
      </el-table-column>
       <el-table-column
        prop="gid"
        label="毕业要求指标点编号"
        width="200">
      </el-table-column>
       <el-table-column
        prop="gcontent"
        label="毕业要求目标内容"
        width="200">
      </el-table-column>
       <el-table-column
        prop="evaluation"
        label="评价值"
        width="200">
      </el-table-column>
        <el-table-column label="操作">
           <template slot-scope="shuju" >
            <el-button type="primary"  @click="getshuju(shuju.row.gid)" icon="el-icon-s-order">
              详情
                 </el-button>
           </template>
                   </el-table-column>
       
     
     
           </el-table>
    
   <el-dialog
  title="提示"
  :visible.sync="dialogVisible "
  width="80%"
  :before-close="handleClose">
  <span>毕业要求评分细则：</span>
    <el-table
       :data="detailData"
      style="width: 80%">
      <el-table-column
        prop="content"
        label="评分细则"
        width="160">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="分值"
        width="160">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="实际成绩"
        width="160">
      </el-table-column>
     
   
      
    
    </el-table>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible  = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible  = false">确 定</el-button>
  </span>
</el-dialog>

    </el-main>
       </el-container>
    </div>
</template>
<script>
export default {
     data() {
      return {
             dialogVisible :false,
        formInline: {
         course:'',
        },
        tableData:[],
         detailData:[],    
      }
      
    },
     created(){
        this.gettableData()
         this.getdetailData()
      },
      methods:{
        async gettableData(){
         
         const{data:res}=await this.axios.get('/api/get_basis', {
    params: {
        
        sid:'10001',
        cid:this.formInline.course,
     
    } })
      this.tableData=res.data
      console.log(res.data)},   
      
       async getshuju(e){
           this.dialogVisible=true
         const{data:res}=await this.axios.get('/api/get_basis2', {
    params: {
        
        sid:'10001',
        cid:this.formInline.course,
        gid:e,
     
    } })
      this.detailData=res.data
      console.log(res.data) }
        }
}
</script>
<style scoped>
.el-breadcrumb{
  margin-bottom: 15px;
}
</style>