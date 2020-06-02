<template>
    <div>
       <el-container>
           <el-header>
             <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/student' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
  <el-breadcrumb-item>指标点评分细则</el-breadcrumb-item>
</el-breadcrumb>
               <el-form ref="formInlineRef"  :inline="true" :model="formInline" class="demo-form-inline">
                   <el-form-item label="指标点">
    <el-select  v-model="formInline.zhibiaodian" placeholder="请选择指标点">
  
      <el-option label="指标点1-1" value="1001"></el-option>
      <el-option label="指标点1-2" value="2"></el-option>
       <el-option label="指标点1-3" value="3"></el-option>
        <el-option label="指标点2-1" value="4"></el-option>
         <el-option label="指标点2-2" value="5"></el-option>
          <el-option label="指标点2-3" value="6"></el-option>
           <el-option label="指标点3-1" value="7"></el-option>
            <el-option label="指标点3-2" value="8"></el-option>
             <el-option label="指标点3-3" value="9"></el-option>
              <el-option label="指标点3-4" value="10"></el-option>
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
        prop="gid"
        label="指标点编号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="cname"
        label="课程名"
        width="150">
      </el-table-column>
       <el-table-column
        prop="weight"
        label="权重"
        width="150">
      </el-table-column>
       <el-table-column
        prop="grade"
        label="评价值"
        width="150">
      </el-table-column>
       
     
     
           </el-table>
    
   

    </el-main>
       </el-container>
    </div>
</template>
<script>
export default {
     data() {
      return {
           
        formInline: {
         zhibiaodian:'',
        },
        tableData:[],
             
      }
      
    },
     created(){
        this.gettableData()
        
      },
      methods:{
        async gettableData(){
            if(this.formInline.zhibiaodian!=0){
         const{data:res}=await this.axios.get('/api/get_course_byg', {
    params: {
        
        sid:'10001',
        gid:this.formInline.zhibiaodian,
     
    } })
      this.tableData=res.data
      console.log(res.data) }
      else{
const{data:res}=await this.axios.get('/api/get_course_byg2', {
    params: {
        
        sid:'10001',
        } })
      this.tableData=res.data
      console.log(res.data) }
      }
     
        
      }
}
</script>
<style scoped>
.el-breadcrumb{
  margin-bottom: 15px;
}
</style>