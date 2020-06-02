<template>
    <div>
       <el-container>
           <el-header>
             <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/student' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
  <el-breadcrumb-item>毕业要求评分细则</el-breadcrumb-item>
</el-breadcrumb>
               <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
                   <el-form-item label="毕业要求">
    <el-select  v-model="formInline.biyeyaoqiu" placeholder="请选择毕业要求">
      <el-option label="毕业要求一" value="1"></el-option>
      <el-option label="毕业要求二" value="2"></el-option>
       <el-option label="毕业要求三" value="3"></el-option>
        <el-option label="毕业要求四" value="4"></el-option>
         <el-option label="毕业要求五" value="5"></el-option>
          <el-option label="毕业要求六" value="6"></el-option>
           <el-option label="毕业要求七" value="7"></el-option>
            <el-option label="毕业要求八" value="8"></el-option>
             <el-option label="毕业要求九" value="9"></el-option>
              <el-option label="毕业要求十" value="10"></el-option>
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
        prop="id"
        label="毕业要求编号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="ggrade"
        label="评价值"
        width="200">
      </el-table-column>
       <el-table-column label="操作">
           <template slot-scope="shuju" >
            <el-button type="primary"  @click="getshuju(shuju.row.id)" icon="el-icon-s-order">
              查看详情
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
        prop="id"
        label="毕业要求编号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="gid"
        label="指标点编号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="content"
        label="指标点内容"
        width="160">
      </el-table-column>
       <el-table-column
        prop="grade"
        label="评价值"
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
         biyeyaoqiu:'',
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
          if(this.formInline.biyeyaoqiu!=0){
         const{data:res}=await this.axios.get('/api/get_gg4', {
    params: {
        
        sid:'10001',
        ggid:this.formInline.biyeyaoqiu,
     
    } })
      this.tableData=res.data
      console.log(res.data)}
      else{
          const{data:res}=await this.axios.get('/api/get_gg2', {
    params: {
        
        sid:'10001',
        
     
    } })
      this.tableData=res.data
      console.log(res.data)
      }
       },
       async getshuju(e){
           this.dialogVisible=true
         const{data:res}=await this.axios.get('/api/get_gg3', {
    params: {
        
        sid:'10001',
        ggid:e,
     
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